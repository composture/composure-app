import { NextRequest, NextResponse } from 'next/server'
import { CORE_SERVICES } from '@/data/content'

// Rate limiting — in-memory, per-instance (fine for single-instance setup)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_WINDOW_MS = 60_000
const RATE_MAX_REQUESTS = 10

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_MAX_REQUESTS) return false
  entry.count++
  return true
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || 'unknown'
  )
}

function sanitizeCrLf(str: string): string {
  return str.replace(/[\r\n]+/g, ' ').trim()
}

function validateRequired(body: Record<string, unknown>): string | null {
  const name = (body.fullName ?? body.name)?.toString().trim()
  const email = body.email?.toString().trim()
  const company = body.company?.toString().trim()

  if (!name) return 'Name is required.'
  if (!email) return 'Email is required.'
  if (!company) return 'Company is required.'
  if (!body.serviceId && !body.subject) return 'Service or subject is required.'

  return null
}

function buildWhatsappMessage(
  fullName: string,
  email: string,
  phone: string,
  company: string,
  subject: string,
  notesOrMessage: string,
  ref: string,
  serviceTitle: string,
  entityLabel: string,
  isBooking: boolean,
  preferredDate: string,
  preferredTime: string,
): string {
  const lines: string[] = [
    `📋 *NAWEZA CONSULTING — ${isBooking ? 'Consultation Booking' : (subject.toUpperCase() + ' Inquiry')}*`,
    '',
    `*Reference:* ${ref}`,
    isBooking ? `*Service:* ${serviceTitle}` : '',
    `*Entity:* ${entityLabel}`,
    preferredDate ? `*Date:* ${preferredDate}` : '',
    preferredTime ? `*Time:* ${preferredTime}` : '',
    '',
    `*Client:* ${fullName}`,
    `*Email:* ${email}`,
    phone ? `*Phone:* ${phone}` : '',
    isBooking ? `*Company:* ${company}` : '',
    subject ? `*Subject:* ${subject}` : '',
    '',
    `*Message:*`,
    isBooking ? notesOrMessage : notesOrMessage,
  ]

  return lines.filter(Boolean).join('\n').slice(0, 2000)
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = getClientIp(request)
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // CSRF / origin check
    const origin = request.headers.get('origin')
    if (origin) {
      const allowedOrigins = [
        'http://localhost',
        'http://127.0.0.1',
        'https://nawezaconsultingpty.com',
        'https://www.nawezaconsultingpty.com',
      ]
      const isAllowed = allowedOrigins.some(o => origin.startsWith(o))
      if (!isAllowed) {
        console.warn(`Blocked cross-origin request from: ${origin}`)
        return NextResponse.json(
          { success: false, message: 'Invalid request origin.' },
          { status: 403 }
        )
      }
    }

    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, message: 'Invalid request body.' },
        { status: 400 }
      )
    }

    // Input validation
    const validationError = validateRequired(body)
    if (validationError) {
      return NextResponse.json(
        { success: false, message: validationError },
        { status: 400 }
      )
    }

    const isBooking = !!body.serviceId
    const serviceId = body.serviceId as string | undefined
    const service = serviceId ? CORE_SERVICES.find(s => s.id === serviceId) : null

    const ref = body.bookingRef
      ? sanitizeCrLf(body.bookingRef as string)
      : ('NWZ-' + Math.floor(100000 + Math.random() * 900000))

    const isPty = service?.entityId === 'pty'
    const safeFullName = sanitizeCrLf((body.fullName ?? body.name)?.toString() || '')
    const safeEmail = sanitizeCrLf(body.email?.toString() || '')
    const safeCompany = sanitizeCrLf(body.company?.toString() || '')
    const safePhone = sanitizeCrLf((body.phone as string)?.trim() || '')
    const safeSubject = sanitizeCrLf((body.subject as string)?.trim() || '')
    const safeNotes = sanitizeCrLf((body.notes as string)?.trim() || '')
    const safeMessage = sanitizeCrLf((body.message as string)?.trim() || '')
    const safePreferredDate = sanitizeCrLf((body.preferredDate as string)?.trim() || '')
    const safePreferredTime = sanitizeCrLf((body.preferredTime as string)?.trim() || '')

    const serviceTitle = service?.title ?? 'General Enquiry'
    const entityLabel = isPty
      ? 'Naweza Consulting Investments (Pty) Ltd'
      : 'Naweza Investments CC'

    if (isPty) {
      const emailBody = [
        `Booking Reference: ${ref}`,
        `Service: ${serviceTitle}`,
        `Entity: Naweza Consulting Investments (Pty) Ltd`,
        `Date: ${safePreferredDate || 'To be finalized'}`,
        `Time: ${safePreferredTime}`,
        '',
        `Client Details:`,
        `Name: ${safeFullName}`,
        `Company: ${safeCompany}`,
        `Email: ${safeEmail}`,
        safePhone ? `Phone: ${safePhone}` : '',
        safeNotes ? `Notes: ${safeNotes}` : '',
      ].filter(Boolean).join('\n')

      const emailSubject = `Naweza Consultation Booking — ${ref}`

      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      const result = await resend.emails.send({
        from: 'Naweza Consulting <info@nawezaconsultingpty.com>',
        to: 'info@nawezaconsultingpty.com',
        subject: emailSubject,
        text: emailBody,
      })

      if (!result.data?.id) {
        const errMsg = result.error?.message || 'Resend failed to send email'
        console.error('Resend send failed:', result)
        return NextResponse.json(
          { success: false, message: errMsg },
          { status: 500 }
        )
      }

      if (process.env.NODE_ENV === 'development') {
        console.log(`Email sent via Resend — ID: ${result.data.id}, Subject: ${emailSubject}`)
      }

      return NextResponse.json({
        success: true,
        type: 'email',
        ref,
        message: 'Booking request sent to our advisory team via email.',
      })
    }

    // CC route — return WhatsApp URL
    const messageText = buildWhatsappMessage(
      safeFullName,
      safeEmail,
      safePhone,
      safeCompany,
      safeSubject,
      isBooking ? safeNotes : safeMessage,
      ref,
      serviceTitle,
      entityLabel,
      isBooking,
      safePreferredDate || 'To be finalized',
      safePreferredTime,
    )
    const encoded = encodeURIComponent(messageText)
    const whatsappUrl = `https://wa.me/${process.env.WHATSAPP_NUMBER || '264813107977'}?text=${encoded}`

    return NextResponse.json({
      success: true,
      type: 'whatsapp',
      ref,
      whatsappUrl,
      message: 'Opening WhatsApp with your message pre-filled. Tap send when ready.',
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}
