import Link from 'next/link';

export default function ContentAdsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">AI Content Distribution & Ad System</h1>
        <p className="text-xl text-blue-400 mb-12 text-center">
          Connect the right people with the right content/ads using semantic understanding and multi-hop reasoning.
        </p>

        <div className="space-y-12">
          {/* Feature Blocks */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Core Features</h2>
            <ul className="list-disc list-inside space-y-4 text-lg opacity-90">
              <li>
                <span className="font-semibold">Semantic Profiling:</span> User Interest × Storyline Semantics × Ad Creative Semantics.
              </li>
              <li>
                <span className="font-semibold">Native Placement:</span> In-storyline ads that don't interrupt the user experience.
              </li>
              <li>
                <span className="font-semibold">ROI Optimization:</span> Automated suggestions for budget, creatives, and audience targeting.
              </li>
              <li>
                <span className="font-semibold">Explainable AI:</span> Visualize the causal paths for recommendations and ad delivery.
              </li>
            </ul>
          </div>

          {/* Key Metrics */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Expected Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-purple-400">X%</p>
                <p className="text-lg opacity-80">Increase in CTR</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-purple-400">X%</p>
                <p className="text-lg opacity-80">Increase in CVR</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-purple-400">X%</p>
                <p className="text-lg opacity-80">Decrease in eCPI</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-lg">
              Request a Demo
            </Link>
            <Link href="#" className="ml-4 border border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-lg">
              Download Product Whitepaper
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
