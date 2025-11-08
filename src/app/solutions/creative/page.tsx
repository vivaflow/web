import Link from 'next/link';

export default function CreativePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">AI Creative & Asset Generation</h1>
        <p className="text-xl text-blue-400 mb-12 text-center">
          Let the graph be the “brief,” so generation reflects what you actually need.
        </p>

        <div className="space-y-12">
          {/* Feature Blocks */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Core Features</h2>
            <ul className="list-disc list-inside space-y-4 text-lg opacity-90">
              <li>
                <span className="font-semibold">Automated Content Creation:</span> Generate scripts, storyboards, titles, and voiceover copy automatically.
              </li>
              <li>
                <span className="font-semibold">Asset Management & A/B Testing:</span> Manage creative packages and run performance tests effortlessly.
              </li>
              <li>
                <span className="font-semibold">Performance Feedback Loop:</span> Continuously evolve the knowledge layer with performance data.
              </li>
            </ul>
          </div>

          {/* Key Metrics */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Compound Returns</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-purple-400">↑</p>
                <p className="text-lg opacity-80">Productivity</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-purple-400">↓</p>
                <p className="text-lg opacity-80">Costs</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-purple-400">↑</p>
                <p className="text-lg opacity-80">CTR</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-lg">
              Request a Demo
            </Link>
            <Link href="#" className="ml-4 border border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-lg">
              See Examples
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
