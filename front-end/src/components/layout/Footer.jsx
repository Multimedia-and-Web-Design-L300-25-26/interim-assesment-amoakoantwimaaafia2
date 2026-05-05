import React from 'react';
import coinbaseLogo from '../../assets/layout_assets/coinbase-logo.png';

const footerLinks = {
  Company: [
    'About', 'Careers', 'Affiliates', 'Blog', 'Press', 'Security',
    'Investors', 'Vendors', 'Legal & privacy', 'Cookie policy',
    'Cookie preferences', 'Digital Asset Disclosures',
  ],
  Learn: [
    'Explore', 'Market statistics', 'Coinbase Bytes newsletter',
    'Crypto basics', 'Tips & tutorials', 'Crypto glossary',
    'Market updates', 'What is Bitcoin?', 'What is crypto?',
    'What is a blockchain?', 'How to set up a crypto wallet?',
    'How to send crypto?', 'Taxes',
  ],
  Individuals: [
    'Buy & sell', 'Earn free crypto', 'Base App', 'Coinbase One', 'Debit Card',
  ],
  Businesses: [
    'Asset Listings', 'Coinbase Business', 'Payments', 'Commerce', 'Token Manager',
  ],
  Institutions: [
    'Prime', 'Staking', 'Exchange', 'International Exchange',
    'Derivatives Exchange', 'Verified Pools',
  ],
  Developers: [
    'Developer Platform', 'Base', 'Server Wallets', 'Embedded Wallets',
    'Base Accounts (Smart Wallets)', 'Onramp & Offramp', 'x402',
    'Trade API', 'Paymaster', 'OnchainKit', 'Data API',
    'Verifications', 'Node', 'AgentKit', 'Staking', 'Faucet',
    'Exchange API', 'International Exchange API', 'Prime API', 'Derivatives API',
  ],
  Support: [
    'Help center', 'Contact us', 'Create account', 'ID verification',
    'Account information', 'Payment methods', 'Account access', 'Supported crypto', 'Status',
  ],
  'Asset prices': [
    'Bitcoin price', 'Ethereum price', 'Solana price', 'XRP price',
  ],
  'Stock prices': [
    'NVIDIA price', 'Apple price', 'Microsoft price', 'Amazon price',
  ],
};

// Group columns for layout: col1 = Company + Learn, col2 = Individuals + Businesses + Institutions, col3 = Developers, col4 = Support + Asset prices + Stock prices
const columns = [
  [{ title: 'Company', items: footerLinks.Company }, { title: 'Learn', items: footerLinks.Learn }],
  [{ title: 'Individuals', items: footerLinks.Individuals }, { title: 'Businesses', items: footerLinks.Businesses }, { title: 'Institutions', items: footerLinks.Institutions }],
  [{ title: 'Developers', items: footerLinks.Developers }],
  [{ title: 'Support', items: footerLinks.Support }, { title: 'Asset prices', items: footerLinks['Asset prices'] }, { title: 'Stock prices', items: footerLinks['Stock prices'] }],
];

function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo + Link columns */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={coinbaseLogo} alt="Coinbase" className="w-10 h-10" />
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            {columns.map((col, colIdx) => (
              <div key={colIdx} className="space-y-8">
                {col.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-sm font-bold text-gray-800 mb-3">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item}>
                          <a href="#" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-6 mt-12 mb-8">
          {/* X (Twitter) */}
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="X">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          {/* TikTok */}
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="TikTok">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="text-gray-700 font-medium">&copy; 2026 Coinbase</span>
            <span>•</span>
            <a href="#" className="hover:text-gray-800 transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-800 transition-colors">Terms &amp; Conditions</a>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <span>Global</span>
            <span>•</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
