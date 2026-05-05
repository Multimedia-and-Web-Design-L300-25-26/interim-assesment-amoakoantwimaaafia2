import React, { useState } from 'react';
import Button from '../common/Button';

const cryptoData = {
  tradable: [
    { name: 'Bitcoin', symbol: 'BTC', price: '725,403.56', change: 0.64, color: '#F7931A' },
    { name: 'Ethereum', symbol: 'ETH', price: '21,381.91', change: 2.08, color: '#627EEA' },
    { name: 'Tether', symbol: 'USDT', price: '10.79', change: -0.0, color: '#26A17B' },
    { name: 'BNB', symbol: 'BNB', price: '6,722.45', change: 1.14, color: '#F3BA2F' },
    { name: 'XRP', symbol: 'XRP', price: '14.53', change: -0.08, color: '#23292F' },
    { name: 'USDC', symbol: 'USDC', price: '10.80', change: null, color: '#2775CA' },
  ],
  topGainers: [
    { name: 'Pepe', symbol: 'PEPE', price: '0.0812', change: 12.45, color: '#4CAF50' },
    { name: 'Dogecoin', symbol: 'DOGE', price: '1.82', change: 8.32, color: '#C2A633' },
    { name: 'Shiba Inu', symbol: 'SHIB', price: '0.00019', change: 6.71, color: '#FF5722' },
    { name: 'Solana', symbol: 'SOL', price: '1,245.30', change: 5.44, color: '#9945FF' },
    { name: 'Avalanche', symbol: 'AVAX', price: '312.50', change: 4.89, color: '#E84142' },
    { name: 'Chainlink', symbol: 'LINK', price: '142.80', change: 3.92, color: '#2A5ADA' },
  ],
  newOnCoinbase: [
    { name: 'Sui', symbol: 'SUI', price: '8.45', change: 15.2, color: '#4DA2FF' },
    { name: 'Aptos', symbol: 'APT', price: '95.30', change: 7.8, color: '#2DD8A3' },
    { name: 'Sei', symbol: 'SEI', price: '3.12', change: 4.5, color: '#9B1C1C' },
    { name: 'Jupiter', symbol: 'JUP', price: '6.78', change: 3.2, color: '#6366F1' },
    { name: 'Starknet', symbol: 'STRK', price: '4.56', change: -1.3, color: '#28286E' },
    { name: 'ZKsync', symbol: 'ZK', price: '1.89', change: 2.1, color: '#4E529A' },
  ],
};

const tabs = [
  { key: 'tradable', label: 'Tradable' },
  { key: 'topGainers', label: 'Top gainers' },
  { key: 'newOnCoinbase', label: 'New on Coinbase' },
];

const symbolIcons = {
  BTC: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <circle cx="16" cy="16" r="16" fill="#F7931A" />
      <text x="16" y="21" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">
        ₿
      </text>
    </svg>
  ),
  ETH: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <circle cx="16" cy="16" r="16" fill="#627EEA" />
      <text x="16" y="21" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">
        ◆
      </text>
    </svg>
  ),
};

function CoinIcon({ name, color }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div
      className="flex items-center justify-center flex-shrink-0 text-sm font-bold text-white rounded-full w-9 h-9"
      style={{ backgroundColor: color }}
    >
      {initial}
    </div>
  );
}

function CryptoExplorer() {
  const [activeTab, setActiveTab] = useState('tradable');
  const coins = cryptoData[activeTab];

  return (
    <section className="py-16 bg-gray-100 md:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left side */}
          <div>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Explore crypto like Bitcoin, Ethereum, and Dogecoin.
            </h2>
            <p className="mt-4 text-base text-gray-500 md:text-lg">
              Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
            </p>
            <div className="mt-8">
              <Button bg="bg-gray-900" hoverBg="hover:bg-black" size="px-6 py-3" href="#">
                See more assets
              </Button>
            </div>
          </div>

          {/* Right side — crypto card */}
          <div className="p-6 text-white bg-gray-900 rounded-2xl">
            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab.key
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Coin list */}
            <div className="space-y-1">
              {coins.map((coin) => (
                <div
                  key={coin.symbol}
                  className="flex items-center justify-between px-2 py-3 transition-colors rounded-lg cursor-pointer hover:bg-gray-800"
                >
                  <div className="flex items-center gap-3">
                    <CoinIcon name={coin.name} color={coin.color} />
                    <span className="text-lg font-semibold">{coin.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">GHS {coin.price}</div>
                    {coin.change !== null ? (
                      <div
                        className={`text-sm flex items-center justify-end gap-0.5 ${
                          coin.change >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}
                      >
                        <span>{coin.change >= 0 ? '↗' : '↙'}</span>
                        <span>{Math.abs(coin.change).toFixed(2)}%</span>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500">--</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CryptoExplorer;
