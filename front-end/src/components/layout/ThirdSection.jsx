import React from 'react';
import Button from '../common/Button';
import tradeImage from '../../assets/crypto/trade.avif';
import tradeSuccessfulImage from '../../assets/crypto/tradeSuccessful.png';
import cryptoGraphImage from '../../assets/crypto/tradingplatform.png';

function ProductBadge({ label }) {
  return (
    <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 mb-4">
      <div className="flex items-center justify-center w-5 h-5 bg-gray-900 rounded-full">
        <span className="text-[8px] text-white font-bold">C</span>
      </div>
      <span className="text-sm font-semibold tracking-wide text-gray-700 uppercase">{label}</span>
    </div>
  );
}

function ThirdSection() {
  return (
    <div>
      {/* Section 1: Advanced Trading */}
      <section className="py-16 bg-white md:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            {/* Left — image */}
            <div className="overflow-hidden rounded-3xl">
              <img
                src={cryptoGraphImage}
                alt="Advanced trading platform"
                className="object-cover w-full h-auto"
              />
            </div>
            {/* Right — text */}
            <div>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                Powerful tools, designed for the advanced trader.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-500 md:text-lg">
                Powerful analytical tools with the safety and security of Coinbase deliver the
                ultimate trading experience. Tap into sophisticated charting capabilities, real-time
                order books, and deep liquidity across hundreds of markets.
              </p>
              <div className="mt-8">
                <Button bg="bg-gray-900" hoverBg="hover:bg-black" size="px-6 py-3" href="#">
                  Start trading
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Coinbase One */}
      <section className="py-16 bg-white md:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            {/* Left — text */}
            <div>
              <ProductBadge label="Coinbase One" />
              <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                Zero trading fees, more rewards.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-500 md:text-lg">
                Get more out of crypto with one membership: zero trading fees, boosted rewards,
                priority support, and more.
              </p>
              <div className="mt-8">
                <Button bg="bg-gray-900" hoverBg="hover:bg-black" size="px-6 py-3" href="#">
                  Claim free trial
                </Button>
              </div>
            </div>
            {/* Right — image */}
            <div className="flex items-center justify-center p-6 bg-gray-100 rounded-3xl md:p-10">
              <img
                src={tradeSuccessfulImage}
                alt="Coinbase One trade successful"
                className="w-full max-w-[400px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Base App */}
      <section className="py-16 bg-white md:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            {/* Left — image */}
            <div className="flex items-center justify-center p-4 bg-gray-100 rounded-3xl md:p-6">
              <img
                src={tradeImage}
                alt="Base App social feed"
                className="w-full max-w-[550px] h-auto object-contain"
              />
            </div>
            {/* Right — text */}
            <div>
              <ProductBadge label="Base App" />
              <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                Countless ways to earn crypto with the Base App.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-500 md:text-lg">
                An everything app to trade, create, discover, and chat, all in one place.
              </p>
              <div className="mt-8">
                <Button bg="bg-gray-900" hoverBg="hover:bg-black" size="px-6 py-3" href="#">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ThirdSection;
