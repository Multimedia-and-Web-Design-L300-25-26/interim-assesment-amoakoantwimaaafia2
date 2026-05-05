import React from 'react';
import { Link } from 'react-router-dom';
import coinbaseLogo from '../assets/coinbase-logo-dark.png';

const ACCOUNT_TYPES = [
  {
    title: 'Personal',
    description: 'Trade crypto as an individual.',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <circle cx="36" cy="18" r="10" fill="#4B7CF3" />
        <rect x="12" y="30" width="18" height="22" rx="3" fill="#6B7280" />
        <path
          d="M22 48l6 6 2-2"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect x="26" y="34" width="22" height="20" rx="4" fill="#3B82F6" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: 'Business',
    description: 'Manage teams and portfolios, accept crypto payments, access APIs, and more',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <circle cx="22" cy="20" r="8" fill="#9CA3AF" />
        <circle cx="38" cy="16" r="8" fill="#4B7CF3" />
        <rect x="16" y="32" width="14" height="18" rx="3" fill="#9CA3AF" />
        <rect x="32" y="28" width="14" height="22" rx="3" fill="#3B82F6" />
        <circle cx="28" cy="46" r="6" fill="#F59E0B" stroke="#1F2937" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Developer',
    description: 'Build onchain using developer tooling.',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <rect
          x="14"
          y="22"
          width="36"
          height="24"
          rx="4"
          fill="#3B82F6"
          transform="rotate(-10 32 34)"
        />
        <rect
          x="20"
          y="18"
          width="24"
          height="16"
          rx="3"
          fill="#60A5FA"
          transform="rotate(-10 32 26)"
        />
        <path
          d="M28 40l8-8 8 8"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function SignUp() {
  return (
    <div className="min-h-screen bg-[#000000] flex flex-col overflow-y-auto">
      {/* Header */}
      <header className="px-6 py-5">
        <Link to="/" aria-label="Home">
          <img src={coinbaseLogo} alt="Coinbase" className="h-8" />
        </Link>
      </header>

      {/* Main content */}
      <main className="flex items-center justify-center flex-1 px-4">
        <div className="w-full max-w-sm">
          <h1 className="mb-8 text-3xl font-bold leading-snug text-white md:text-4xl">
            What kind of account are you creating?
          </h1>

          <div className="flex flex-col gap-4">
            {ACCOUNT_TYPES.map((type) => (
              <Link
                key={type.title}
                to="/signup/create"
                className="flex items-center gap-5 p-5 text-left transition-colors bg-transparent border border-gray-600 rounded-xl hover:border-gray-400"
              >
                <div className="shrink-0">{type.icon}</div>
                <div>
                  <h2 className="text-base font-bold text-white">{type.title}</h2>
                  <p className="mt-1 text-sm leading-snug text-gray-400">{type.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
