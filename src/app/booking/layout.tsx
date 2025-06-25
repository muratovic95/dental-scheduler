   import React from 'react';
   import { Metadata } from 'next';

   export const metadata: Metadata = {
     title: 'Book Appointment - Dental Scheduler',
     description: 'Schedule your dental appointment with our easy-to-use booking system',
   };

   export default function BookingLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return children;
   }
