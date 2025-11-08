import Link from 'next/link';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Solutions</h1>
        <p className="text-lg opacity-80 mb-16 max-w-3xl mx-auto">
          Viva embeds knowledge understanding into core business flows across distribution, creative, and enterprise integration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Content Distribution & Ad System</h3>
            <p className="text-base mb-4 flex-grow">Semantic recommendations and native placement; ROI +300–500%.</p>
            <p className="text-sm text-gray-400 mb-6">
              Use Cases: Short Drama, Short Video, E-commerce Ads, Brand Marketing
            </p>
            <Link href="/solutions/content-ads" className="text-blue-400 hover:underline font-semibold mt-auto">
              View Solution &rarr;
            </Link>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Creative & Asset Generation</h3>
            <p className="text-base mb-4 flex-grow">Auto scripts/titles/voice/ad materials; 70% cost ↓, 30%+ CTR ↑.</p>
            <p className="text-sm text-gray-400 mb-6">
              Use Cases: Advertisers, MCNs, Content Platforms, In-house Creative Teams
            </p>
            <Link href="/solutions/creative" className="text-blue-400 hover:underline font-semibold mt-auto">
              View Solution &rarr;
            </Link>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Knowledge Middleware Licensing</h3>
            <p className="text-base mb-4 flex-grow">Expose graph and reasoning as API/SDK for enterprise integration.</p>
            <p className="text-sm text-gray-400 mb-6">
              Use Cases: Media Platforms, Retail/E-commerce, Global Apps, Enterprise Data Platforms
            </p>
            <Link href="/solutions/middleware" className="text-blue-400 hover:underline font-semibold mt-auto">
              View Solution &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
