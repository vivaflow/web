import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-transparent text-white font-sans antialiased">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
        <div className="relative z-10 text-center px-4 py-16 md:py-24 lg:py-32 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            The Intelligent Knowledge Infrastructure for the AI Era
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Viva connects content, data, and commerce through a living knowledge network—so AI truly understands people and the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
              Request a Demo
            </Link>
            <Link href="/technology" className="border border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
              See How It Works
            </Link>
          </div>
          <div className="text-sm md:text-base opacity-75">
            Proven in short drama/video, commerce, and brand ads | Millisecond retrieval | Multi-hop reasoning
          </div>
        </div>
      </section>

      {/* Why Viva Section */}
      <section className="py-16 md:py-24 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Viva?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg">AI knows a lot but rarely understands—knowledge is static, fragmented, and siloed.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg">Real work needs cross-system semantic understanding and multi-hop reasoning.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg">Enterprises need a deployable, integrable, and scalable knowledge infrastructure.</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl font-semibold text-blue-400">
            Viva makes knowledge think—and intelligence collaborate.
          </p>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-16 md:py-24 bg-gray-950 bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Three-Layer Cognitive Engine
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-blue-600">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Data Layer</h3>
              <p className="text-base">Dynamic graph storage, privacy computing, real-time updates</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-blue-600">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Knowledge Layer</h3>
              <p className="text-base">GNN + multi-hop reasoning with explainability and self-learning</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-blue-600">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Application Layer</h3>
              <p className="text-base">KaaS, API/SDK, and enterprise integration</p>
            </div>
          </div>
          <p className="text-lg opacity-80">
            Viva closes the loop from data to reasoning to applications.
          </p>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-16 md:py-24 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Beyond Search: Knowledge That Thinks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-400">High-Performance Retrieval</h3>
              <p className="text-base">Optimized PPR + dynamic topology for millisecond response and adaptive updates.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Intelligent Reasoning</h3>
              <p className="text-base">Topology-monitorable multi-hop reasoning that connects concepts into explainable insights.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Cognitive Fusion</h3>
              <p className="text-base">Retrieval + reasoning work together—like memory and logic in the human brain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24 bg-gray-950 bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Turn Knowledge into Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Content Distribution & Ad System</h3>
              <p className="text-base mb-6 flex-grow">Semantic recommendations and native placement; ROI +300–500%.</p>
              <Link href="/solutions/content-ads" className="text-blue-400 hover:underline font-semibold">
                View Solution &rarr;
              </Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Creative & Asset Generation</h3>
              <p className="text-base mb-6 flex-grow">Auto scripts/titles/voice/ad materials; 70% cost ↓, 30%+ CTR ↑.</p>
              <Link href="/solutions/creative" className="text-blue-400 hover:underline font-semibold">
                View Solution &rarr;
              </Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Knowledge Middleware Licensing</h3>
              <p className="text-base mb-6 flex-grow">Expose graph and reasoning as API/SDK for enterprise integration.</p>
              <Link href="/solutions/middleware" className="text-blue-400 hover:underline font-semibold">
                View Solution &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className="py-16 md:py-24 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Immediate Business Value
          </h2>
          <ul className="list-none space-y-4 text-lg">
            <li className="flex items-center justify-center">
              <span className="text-blue-400 mr-3 text-2xl">&#x2713;</span> Accurate distribution: higher CTR & dwell time
            </li>
            <li className="flex items-center justify-center">
              <span className="text-blue-400 mr-3 text-2xl">&#x2713;</span> Native conversion in storyline
            </li>
            <li className="flex items-center justify-center">
              <span className="text-blue-400 mr-3 text-2xl">&#x2713;</span> Lower cost with automated creatives and smart placement
            </li>
            <li className="flex items-center justify-center">
              <span className="text-blue-400 mr-3 text-2xl">&#x2713;</span> Explainable, controllable reasoning paths
            </li>
          </ul>
        </div>
      </section>

      {/* Security & Privacy Section */}
      <section className="py-16 md:py-24 bg-gray-950 bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Enterprise-Grade Security & Compliance
          </h2>
          <ul className="list-none space-y-4 text-lg">
            <li className="flex items-center justify-center">
              <span className="text-green-400 mr-3 text-2xl">&#x2713;</span> Data isolation & least-privilege access
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-400 mr-3 text-2xl">&#x2713;</span> Encryption at rest and in transit
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-400 mr-3 text-2xl">&#x2713;</span> Auditing & governance
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-400 mr-3 text-2xl">&#x2713;</span> Deployable in cloud/private/on-prem
            </li>
          </ul>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready for AI that truly understands your business?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="bg-white hover:bg-gray-200 text-blue-700 font-semibold py-3 px-8 rounded-full transition duration-300">
              Request a Demo
            </Link>
            <Link href="/contact" className="border border-white hover:bg-white hover:text-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}