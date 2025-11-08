'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here (e.g., send data to an API)
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-80">
            Tell us your scenario and goals—we’ll arrange a tailored demo and assessment.
          </p>
        </div>

        {submitted ? (
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-green-400">Thanks!</h2>
            <p className="text-lg mt-2">We’ll get back to you within 1–2 business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                <input type="text" id="name" name="name" required className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company *</label>
                <input type="text" id="company" name="company" required className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">Title</label>
                <input type="text" id="title" name="title" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                <input type="email" id="email" name="email" required className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
            
            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">Inquiry Type</label>
              <select id="inquiryType" name="inquiryType" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 focus:ring-blue-500 focus:border-blue-500">
                <option>Demo</option>
                <option>Technical Assessment</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Use Case</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center"><input type="checkbox" name="useCase" value="distribution" className="mr-2 bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500" /> Content Distribution</label>
                <label className="flex items-center"><input type="checkbox" name="useCase" value="ads" className="mr-2 bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500" /> Advertising</label>
                <label className="flex items-center"><input type="checkbox" name="useCase" value="creative" className="mr-2 bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500" /> Creative Generation</label>
                <label className="flex items-center"><input type="checkbox" name="useCase" value="middleware" className="mr-2 bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500" /> Knowledge Middleware</label>
                <label className="flex items-center"><input type="checkbox" name="useCase" value="other" className="mr-2 bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500" /> Other</label>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-12 rounded-full transition duration-300 text-lg">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
