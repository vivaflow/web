import Link from 'next/link';

export default function MiddlewarePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">AI Knowledge Middleware (API/SDK)</h1>
        <p className="text-xl text-blue-400 mb-12 text-center">
          Expose Viva’s retrieval and reasoning as enterprise capabilities—use on demand.
        </p>

        <div className="space-y-12">
          {/* API Capabilities */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">API Capabilities</h2>
            <ul className="list-disc list-inside space-y-4 text-lg opacity-90">
              <li>Semantic Retrieval, Similarity & Relevance Search</li>
              <li>Multi-hop Reasoning for Q&A and Recommendations</li>
              <li>ROI Prediction and Strategy Suggestions</li>
              <li>Event, Entity & Relationship Extraction</li>
            </ul>
          </div>

          {/* Deployment Options */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Deployment</h2>
            <p className="text-lg opacity-90">
              Available on Cloud, Private Cloud, or On-Premise. Includes SLA, monitoring, and dedicated support.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-lg">
              Discuss Technical Solutions
            </Link>
            <Link href="/contact" className="ml-4 border border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-lg">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
