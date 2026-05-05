import React from 'react';

const icons = {
  info: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeWidth="1.5" d="M12 16v-4m0-4h.01" />
    </svg>
  ),
  briefcase: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20 7H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
      />
    </svg>
  ),
  people: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6 0a4 4 0 10-2-7.46 4 4 0 100 7.46M15 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ),
  chat: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 21l1.8-4A7.44 7.44 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  ),
  document: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
  shield: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  code: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  ),
  wallet: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  ),
  building: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-16 0H3m4-8h2m4 0h2m-6 4h2m4 0h2"
      />
    </svg>
  ),
  lock: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  ),
  clock: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  exchange: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
      />
    </svg>
  ),
  globe: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  percent: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19 5L5 19M6.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM17.5 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      />
    </svg>
  ),
  grid: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    </svg>
  ),
};

/* ── Menu content per nav item (section-based) ─────────────── */
const MENU_CONTENT = {
  Individuals: {
    sections: [
      {
        heading: 'For you',
        links: [
          { icon: 'wallet', title: 'Buy and sell', subtitle: 'Buy, sell, and use crypto' },
          { icon: 'code', title: 'Advanced', subtitle: 'Professional-grade trading tools' },
          {
            icon: 'building',
            title: 'Base App',
            subtitle: 'Post, earn, trade, and chat, all in one place',
          },
        ],
      },
      {
        heading: 'Grow',
        links: [
          { icon: 'shield', title: 'Earn', subtitle: 'Stake your crypto and earn rewards' },
          { icon: 'info', title: 'Coinbase One', subtitle: 'Get zero trading fees and more' },
          {
            icon: 'lock',
            title: 'Coinbase Wealth',
            subtitle: 'Institutional-grade services for UHNW',
          },
        ],
      },
    ],
    promo: {
      heading: 'System Update 2025',
      subtext: 'The next chapter of Coinbase. Live on X 12/17.',
      cta: 'Learn more',
    },
  },
  Businesses: {
    sections: [
      {
        heading: 'Products',
        links: [
          { icon: 'building', title: 'Commerce', subtitle: 'Accept crypto payments' },
          { icon: 'wallet', title: 'Asset Listings', subtitle: 'List your asset on Coinbase' },
        ],
      },
      {
        heading: 'Solutions',
        links: [
          { icon: 'code', title: 'Payments', subtitle: 'Stablecoin payments stack' },
          { icon: 'lock', title: 'Custody', subtitle: 'Secure storage solutions' },
        ],
      },
    ],
    promo: {
      heading: 'Crypto solutions',
      subtext: 'for businesses of all sizes.',
      cta: 'Get started',
    },
  },
  Institutions: {
    sections: [
      {
        heading: 'Prime',
        hasArrow: true,
        links: [
          {
            icon: 'clock',
            title: 'Trading and Financing',
            subtitle: 'Professional prime brokerage services',
          },
          { icon: 'lock', title: 'Custody', subtitle: 'Securely store all your digital assets' },
          { icon: 'percent', title: 'Staking', subtitle: 'Explore staking across our products' },
        ],
      },
      {
        heading: 'Markets',
        links: [
          {
            icon: 'exchange',
            title: 'Exchange',
            subtitle: 'Spot markets for high-frequency trading',
          },
          {
            icon: 'globe',
            title: 'International Exchange',
            subtitle: 'Access perpetual futures markets',
          },
          {
            icon: 'grid',
            title: 'Derivatives Exchange',
            subtitle: 'Trade an accessible futures market',
          },
        ],
      },
    ],
    promo: {
      heading: 'Our clients',
      subtext: 'Trusted by institutions and government.',
      cta: 'Learn more',
    },
  },
  Developers: {
    sections: [
      {
        heading: 'Build',
        links: [
          { icon: 'code', title: 'APIs', subtitle: 'Build with Coinbase APIs' },
          { icon: 'document', title: 'Documentation', subtitle: 'Guides and references' },
        ],
      },
      {
        heading: 'Tools',
        links: [
          { icon: 'wallet', title: 'Wallet SDK', subtitle: 'Integrate a wallet' },
          { icon: 'shield', title: 'Onchain tools', subtitle: 'Build on Base' },
        ],
      },
    ],
    promo: {
      heading: 'Build the future',
      subtext: 'of finance.',
      cta: 'Start building',
    },
  },
  Company: {
    sections: [
      {
        heading: 'About us',
        links: [
          { icon: 'info', title: 'About', subtitle: 'Powering the crypto economy' },
          { icon: 'briefcase', title: 'Careers', subtitle: 'Work with us' },
          { icon: 'people', title: 'Affiliates', subtitle: 'Help introduce the world to crypto' },
        ],
      },
      {
        heading: 'Resources',
        links: [
          { icon: 'chat', title: 'Support', subtitle: 'Find answers to your questions' },
          { icon: 'document', title: 'Blog', subtitle: 'Read the latest from Coinbase' },
          { icon: 'shield', title: 'Security', subtitle: 'The most trusted & secure' },
        ],
      },
    ],
    promo: {
      heading: 'Learn all about',
      subtext: 'Coinbase.',
      cta: 'Create your account',
    },
  },
};

/* ── Component ─────────────────────────────────────────────── */
export default function MegaMenu({ active }) {
  if (!active || active === 'Cryptocurrencies') return null;

  const data = MENU_CONTENT[active];
  if (!data) return null;

  return (
    <div className="absolute left-0 right-0 z-50 bg-white border-t shadow-lg">
      <div
        className="grid gap-8 px-8 py-8 mx-auto max-w-7xl"
        style={{ gridTemplateColumns: '1fr 1fr 280px' }}
      >
        {/* ── Left: section columns ──────────────────────── */}
        {data.sections.map((section) => (
          <div key={section.heading}>
            <h4 className="flex items-center gap-1 mb-4 text-sm font-semibold text-black">
              {section.heading}
              {section.hasArrow && (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </h4>
            <div className="flex flex-col gap-3">
              {section.links.map((item) => (
                <a
                  key={item.title}
                  href="#"
                  className="flex items-start gap-3 p-2 -ml-2 rounded-lg group hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-100 rounded-full shrink-0 group-hover:bg-gray-200">
                    {icons[item.icon]}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-black">{item.title}</div>
                    <div className="text-sm leading-snug text-gray-500">{item.subtitle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* ── Right: promo card ──────────────────────────── */}
        <div className="flex flex-col items-start gap-4 p-6 bg-gray-50 rounded-2xl">
          <div className="flex items-center justify-center w-full aspect-square max-w-[160px] bg-blue-600 rounded-2xl">
            <span className="px-4 text-xs font-bold leading-tight tracking-widest text-center text-white">
              CRYPTO MOVES
              <br />
              MONEY FORWARD
            </span>
          </div>
          <h3 className="text-xl font-bold leading-tight text-black">
            {data.promo.heading} <span className="text-gray-400">{data.promo.subtext}</span>
          </h3>
          <a
            href="#"
            className="text-sm font-bold text-black underline underline-offset-4 hover:text-blue-600"
          >
            {data.promo.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
