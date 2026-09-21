import { NextRequest, NextResponse } from 'next/server'
import { CORE_SERVICES } from '@/data/content'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      fullName,
      email,
      company,
      phone,
      serviceId,
      preferredDate,
      preferredTime,
      notes,
      subject,
      message,
    } = body

    const service = serviceId ? CORE_SERVICES.find(s => s.id === serviceId) : null

    const ref = body.bookingRef || ('NWZ-' + Math.floor(100000 + Math.random() * 900000))

    const isPty = service?.entityId === 'pty'

    if (isPty) {
      const emailBody = [
        `Booking Reference: ${ref}`,
        `Service: ${service?.title ?? 'General Enquiry'}`,
        `Entity: Naweza Consulting Investments (Pty) Ltd`,
        `Date: ${preferredDate || 'To be finalized'}`,
        `Time: ${preferredTime || ''}`,
        '',
        `Client Details:`,
        `Name: ${fullName}`,
        `Company: ${company}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : '',
        notes ? `Notes: ${notes}` : '',
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

      console.log(`Email sent via Resend — ID: ${result.data.id}, Subject: ${emailSubject}`)
      return NextResponse.json({
        success: true,
        type: 'email',
        ref,
        message: 'Booking request sent to our advisory team via email.',
      })
    }

    // CC route — return WhatsApp URL
    const serviceTitle = service?.title ?? 'General Enquiry'
    const entityLabel = service?.entityId === 'cc' ? 'Naweza Investments CC' : 'Naweza Consulting Investments (Pty) Ltd'

    const messageText = [
      `📋 *NAWEZA CONSULTING — ${subject ? subject.toUpperCase() + ' Inquiry' : 'Consultation Booking'}*`,
      '',
      `*Reference:* ${ref}`,
      `*Service:* ${serviceTitle}`,
      `*Entity:* ${entityLabel}`,
      `*Date:* ${preferredDate || 'To be finalized'}`,
      `*Time:* ${preferredTime || ''}`,
      '',
      `*Client:* ${fullName}`,
      `*Company:* ${company}`,
      `*Email:* ${email}`,
      phone ? `*Phone:* ${phone}` : '',
      notes ? `*Notes:* ${notes}` : '',
      message ? `*Message:* ${message}` : '',
    ].filter(Boolean).join('\n')

    const encoded = encodeURIComponent(messageText)
    const whatsappUrl = `https://wa.me/264813107977?text=${encoded}`

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
