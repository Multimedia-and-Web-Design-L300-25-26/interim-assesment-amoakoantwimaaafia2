import React, { useState } from 'react';
import homeImage from '../../assets/layout_assets/home_image.png';
import Button from '../common/Button';

function HeroSection() {
  const [email, setEmail] = useState('');

  return (
    <section className="w-full bg-white">
      <div className="grid items-center gap-2 px-6 py-5 mx-auto max-w-7xl md:grid-cols-2">
        {/* ── Left: Phone image ──────────────────────────── */}
        <div className="flex justify-center">
          <img
            src={homeImage}
            alt="Coinbase app preview"
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </div>

        {/* ── Right: Headline + Email signup ──────────────── */}
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-bold leading-tight tracking-tight text-black text-7xl md:text-6xl">
            The future of
            <br />
            finance is here.
          </h1>
          <p className="text-lg text-gray-600">
            Trade crypto and more on a platform you can trust.
          </p>
          <div className="flex items-center w-full max-w-lg gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="satoshi@nakamoto.com"
              className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button to="/signup" size="px-8 py-3" className="whitespace-nowrap">
              Sign up
            </Button>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="px-4 mx-6 auto pb- max-w-7xl">
        <p className="text-sm text-gray-600">
          Stocks and predictions markets not available in your jurisdiction.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
