'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/solutions/content-ads" className="hover:text-blue-400">Content Distribution & Ad System</Link></li>
              <li><Link href="/solutions/creative" className="hover:text-blue-400">Creative & Asset Generation</Link></li>
              <li><Link href="/solutions/middleware" className="hover:text-blue-400">Knowledge Middleware Licensing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Technology</h3>
            <ul className="space-y-2">
              <li><Link href="/technology" className="hover:text-blue-400">Technology</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Partners</h3>
            <ul className="space-y-2">
              <li><Link href="/partners" className="hover:text-blue-400">Partners</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-blue-400">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">© Viva System 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};