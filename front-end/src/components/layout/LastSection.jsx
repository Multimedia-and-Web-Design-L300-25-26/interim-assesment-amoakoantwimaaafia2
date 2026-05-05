import React from 'react';
import Button from '../common/Button';
import controlImage from '../../assets/crypto/cryptoAssets.png';

function LastSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
          {/* Left — text + signup */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Take control
              <br />
              of your money
            </h2>
            <p className="mt-4 text-gray-500 text-base md:text-lg">
              Start your portfolio today and discover crypto
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="satoshi@nakamoto.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button to="/signup" size="px-6 py-3" rounded="rounded-lg">
                Sign up
              </Button>
            </div>
          </div>
          {/* Right — crypto coins image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={controlImage}
              alt="Crypto coins"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <section className="bg-white pt-16 pb-12 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-500 mb-4">
          DEX trading is offered by Coinbase Bermuda Technologies Ltd.
        </p>
        <p className="text-sm text-gray-400 leading-relaxed">
          Products and features may not be available in all regions. Information is for or
          informational purposes only, and is not (i) an offer, or solicitation of an offer, to
          invest in, or to buy or sell, any interests or shares, or to participate in any investment
          or trading strategy or (ii) intended to provide accounting, legal, or tax advice, or
          investment recommendations. Trading cryptocurrency comes with risk.
        </p>
      </div>
    </section>
  );
}

function CtaAndDisclaimer() {
  return (
    <>
      <CTASection />
      <Disclaimer />
    </>
  );
}

export default LastSection;
