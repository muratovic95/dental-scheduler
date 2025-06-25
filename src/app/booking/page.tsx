'use client';

import React, { useState, FormEvent } from 'react';

export default function BookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Booking submitted successfully!');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Book an Appointment</h1>
          <p className="mt-2 text-gray-600">Select your preferred service and time</p>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  name="patientName" 
                  id="patientName" 
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="patientEmail" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  name="patientEmail" 
                  id="patientEmail" 
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="patientPhone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input 
                  type="tel" 
                  name="patientPhone" 
                  id="patientPhone" 
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">Service</label>
                <select 
                  name="serviceType" 
                  id="serviceType" 
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Regular Checkup">Regular Checkup (30 min) - $50</option>
                  <option value="Comprehensive Exam">Comprehensive Exam (60 min) - $100</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700">Date & Time</label>
                <input 
                  type="datetime-local" 
                  name="appointmentDate" 
                  id="appointmentDate" 
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
                <textarea 
                  name="notes" 
                  id="notes" 
                  rows={3}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Booking...' : 'Book Appointment'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 
