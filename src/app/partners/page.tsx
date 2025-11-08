import Link from 'next/link';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Partners</h1>
        <p className="text-lg opacity-80 mb-12 max-w-2xl mx-auto">
          Join us to build a thinking knowledge network and rapidly empower customer scenarios.
        </p>

        <div className="space-y-12 text-left">
          {/* Partnership Value */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Partnership Value</h2>
            <p className="text-lg opacity-90">
              Collaborate with Viva to deliver intelligent, context-aware solutions that drive real business growth for your clients.
            </p>
          </div>

          {/* Partnership Types */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Partnership Types</h2>
            <ul className="list-disc list-inside space-y-2 text-lg opacity-90">
              <li>Solution Partners</li>
              <li>Channel Partners</li>
              <li>Technology Ecosystem Partners</li>
            </ul>
          </div>

          {/* Co-creation Resources */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Co-creation Resources</h2>
            <ul className="list-disc list-inside space-y-2 text-lg opacity-90">
              <li>Pre-sales Support</li>
              <li>Solution Library</li>
              <li>Joint Marketing Activities</li>
              <li>Training & Certification</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-16">
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-lg">
            Become a Partner
          </Link>
          <Link href="#" className="ml-4 border border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-lg">
            Download Partner Handbook
          </Link>
        </div>
      </div>
    </div>
  );
}
