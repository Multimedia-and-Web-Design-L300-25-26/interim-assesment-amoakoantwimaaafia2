import React from 'react';
import { Link } from 'react-router-dom';
import coinbaseLogo from '../assets/coinbase-logo-dark.png';

export default function SignIn() {
  return (
    <div className="min-h-screen bg-[#000000] flex flex-col overflow-y-auto">
      {/* Header */}
      <header className="px-6 py-5">
        <Link to="/" aria-label="Home">
          <img src={coinbaseLogo} alt="Coinbase" className="h-8" />
        </Link>
      </header>

      {/* Main content */}
      <main className="flex items-center justify-center flex-1 px-4 py-8">
        <div className="w-full max-w-md">
          <h1 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            Sign in to Coinbase
          </h1>

          {/* Email field */}
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-bold text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-4 text-sm text-white placeholder-gray-500 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Continue button */}
          <button className="w-full py-4 text-sm font-bold text-white transition-colors bg-blue-900 rounded-full hover:bg-blue-800">
            Continue
          </button>

          {/* OR divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 border-t border-gray-700" />
            <span className="text-xs text-gray-500 tracking-wider">OR</span>
            <div className="flex-1 border-t border-gray-700" />
          </div>

          {/* Social sign in buttons */}
          <div className="flex flex-col gap-3">
            <button className="flex items-center w-full gap-3 px-6 py-4 text-sm font-bold text-white transition-colors bg-gray-800 rounded-full hover:bg-gray-700">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
              <span className="flex-1 text-center">Sign in with Passkey</span>
            </button>
            <button className="flex items-center w-full gap-3 px-6 py-4 text-sm font-bold text-white transition-colors bg-gray-800 rounded-full hover:bg-gray-700">
              <span className="text-lg font-bold" style={{ fontFamily: 'serif' }}>G</span>
              <span className="flex-1 text-center">Sign in with Google</span>
            </button>
            <button className="flex items-center w-full gap-3 px-6 py-4 text-sm font-bold text-white transition-colors bg-gray-800 rounded-full hover:bg-gray-700">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.96 4.41-3.74 4.25z" />
              </svg>
              <span className="flex-1 text-center">Sign in with Apple</span>
            </button>
          </div>

          {/* Don't have an account */}
          <p className="mt-8 text-sm font-bold text-center text-white">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>

          {/* Disclaimer */}
          <p className="mt-6 text-xs text-center text-gray-500 leading-relaxed">
            Not your device? Use a private window. See our{' '}
            <a href="#" className="underline hover:text-gray-400">Privacy Policy</a> for more info.
          </p>

          {/* Cancel */}
          <p className="mt-6 mb-8 text-center">
            <Link to="/" className="text-sm text-blue-400 hover:underline">
              Cancel signing in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
