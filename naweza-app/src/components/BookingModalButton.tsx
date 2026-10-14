'use client';

import React, { useState } from 'react';
import { BookingModal } from '@/components/BookingModal';

export const BookingModalButton: React.FC<{ label?: string; serviceId?: string; className?: string }> = ({
  label = 'Book a Free Chat',
  serviceId,
  className = 'bg-[#0A2540] hover:bg-[#0F3460] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors whitespace-nowrap',
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label}
      </button>
      <BookingModal isOpen={open} onClose={() => setOpen(false)} initialServiceId={serviceId} />
    </>
  );
};
