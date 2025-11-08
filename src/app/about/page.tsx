export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Viva</h1>
        <p className="text-xl text-blue-400 mb-12">
          Make AI truly understand the world—and become the intelligent infrastructure enterprises can use.
        </p>

        <div className="space-y-12 text-left">
          {/* Milestones */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Milestones</h2>
            <ul className="list-disc list-inside space-y-2 text-lg opacity-90">
              <li><span className="font-semibold">2025:</span> Commercial validation in short drama, video, and advertising.</li>
              <li><span className="font-semibold">2026:</span> Expansion into multiple industries with our middleware platform.</li>
              <li><span className="font-semibold">2027:</span> Powering the global intelligent content engine.</li>
            </ul>
          </div>

          {/* Team */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Our Team</h2>
            <p className="text-lg opacity-90">
              Our team comes from leading companies in AI, recommendation systems, ad tech, and enterprise software.
            </p>
          </div>

          {/* Careers */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Join Us</h2>
            <p className="text-lg opacity-90 mb-4">
              We're hiring for the following roles:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg opacity-90">
              <li>Backend / Graph Systems Engineers</li>
              <li>Frontend Engineers</li>
              <li>Solution Architects</li>
              <li>Delivery Managers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
