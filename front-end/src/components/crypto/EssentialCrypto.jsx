import React from 'react';
import Button from '../common/Button';
import usdcImage from '../../assets/crypto/usdc.png';
import bankImage from '../../assets/crypto/Replace_Bank.png';
import investImage from '../../assets/crypto/investInCrypto.png';

const articles = [
  {
    image: usdcImage,
    title: 'USDC: The digital dollar for the global crypto economy',
    description:
      'Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more...',
    href: '#',
  },
  {
    image: bankImage,
    title: 'Can crypto really replace your bank account?',
    description:
      'If you\'re a big enough fan of crypto, you\'ve probably heard the phrase "be your own bank" or the term "bankless" — the idea being that...',
    href: '#',
  },
  {
    image: investImage,
    title: 'When is the best time to invest in crypto?',
    description:
      'Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause...',
    href: '#',
  },
];

function CryptoBasics() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            New to crypto?<br />
            Learn some<br />
            crypto basics
          </h2>
          <div className="flex flex-col justify-center">
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
            </p>
            <div className="mt-6">
              <Button bg="bg-gray-900" hoverBg="hover:bg-black" size="px-6 py-3" href="#">
                Read More
              </Button>
            </div>
          </div>
        </div>

        {/* Article cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="mt-4">
                <a href={article.href} className="block">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug group-hover:underline underline-offset-2">
                    {article.title}
                  </h3>
                </a>
                <p className="mt-3 text-gray-500 text-sm md:text-base leading-relaxed">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CryptoBasics;
