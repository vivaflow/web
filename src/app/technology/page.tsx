import Link from 'next/link';

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Technology</h1>
        <p className="text-xl text-blue-400 mb-16 text-center max-w-3xl mx-auto">
          Viva unifies high-performance retrieval and intelligent reasoning into one cognitive engine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-9 space-y-12">
            {/* Architecture */}
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-4 text-purple-400">Architecture</h2>
              <p className="text-lg opacity-90 mb-6">
                Viva’s three-layer engine closes the loop from data to reasoning to applications, creating a continuously learning system.
              </p>
              {/* You can insert an architecture diagram image here if you have one */}
            </div>

            {/* Retrieval */}
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-4 text-purple-400">Retrieval</h2>
              <p className="text-lg opacity-90">
                Optimized PPR, dynamic topology, millisecond response, and online updates ensure your knowledge base is always fast and current.
              </p>
            </div>

            {/* Reasoning */}
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-4 text-purple-400">Reasoning</h2>
              <p className="text-lg opacity-90">
                Multi-hop, explainable, and topology-monitorable reasoning connects disparate concepts into actionable insights.
              </p>
            </div>

            {/* Performance & Scale */}
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-4 text-purple-400">Performance & Scale</h2>
              <p className="text-lg opacity-90">
                Built for enterprise-grade scalability, Viva handles high QPS and low latency workloads with ease.
              </p>
            </div>

            {/* Security & Governance */}
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-4 text-purple-400">Security & Governance</h2>
              <p className="text-lg opacity-90">
                Data isolation, access control, audit trails, and flexible deployment options ensure your data is always secure.
              </p>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="md:col-span-3">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Ready to Dive Deeper?</h3>
              <Link href="#" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 mb-4">
                Download Technical Whitepaper
              </Link>
              <Link href="/contact" className="block w-full text-center border border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
                Request a Technical Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
