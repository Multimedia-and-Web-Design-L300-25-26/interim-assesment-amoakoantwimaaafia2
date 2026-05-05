import React, { useState } from 'react';
import coinbaseImg from '../../assets/layout_assets/coinbase-logo.png';
import MegaMenu from './MegaMenu';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const [navHover, setNavHover] = useState(null);
  const [activeNav, setActiveNav] = useState(null);
  const [menuTimeout, setMenuTimeout] = useState(null);

  const navItems = [
    'Cryptocurrencies',
    'Individuals',
    'Businesses',
    'Institutions',
    'Developers',
    'Company',
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white"
      onMouseLeave={() => {
        const timeout = setTimeout(() => {
          setNavHover(null);
          setActiveNav(null);
        }, 200);
        setMenuTimeout(timeout);
      }}
      onMouseEnter={() => {
        if (menuTimeout) {
          clearTimeout(menuTimeout);
          setMenuTimeout(null);
        }
      }}
    >
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <div className="relative flex items-center gap-6">
          <img
            src={coinbaseImg}
            alt="Coinbase logo"
            className="w-10 h-10 cursor-pointer"
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
          />
          {logoHover && (
            <div className="absolute left-0 px-2 py-1 text-xs text-white bg-black rounded shadow top-12">
              Home
            </div>
          )}

          <nav className="hidden md:block">
            <ul className="flex gap-6 text-lg font-medium text-black">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="relative cursor-pointer hover:text-blue-600 transition-colors duration-200"
                  onMouseEnter={() => {
                    if (menuTimeout) {
                      clearTimeout(menuTimeout);
                      setMenuTimeout(null);
                    }
                    setNavHover(item);
                    setActiveNav(item);
                  }}
                  onFocus={() => {
                    setNavHover(item);
                    setActiveNav(item);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="px-3 py-2 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200 hover:bg-gray-300 transition-colors"
          >
            <ion-icon name="search-outline" color="black"></ion-icon>
          </button>

          <button
            aria-label="globe"
            className="px-3 py-2 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200 hover:bg-gray-300 transition-colors"
          >
            <ion-icon name="earth-outline" color="black"></ion-icon>
          </button>

          <Button
            to="/signin"
            bg="bg-gray-200"
            hoverBg="hover:bg-gray-300"
            textColor="text-black"
            size="px-3 py-2"
            className="hidden sm:inline-block"
          >
            Sign in
          </Button>

          <Button to="/signup" size="px-4 py-2" className="hidden sm:inline-block">
            Sign up
          </Button>

          <button
            className="p-2 rounded md:hidden hover:bg-gray-100 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <MegaMenu active={activeNav} />

      {open && (
        <div className="border-t md:hidden">
          <nav className="px-6 py-4">
            <ul className="flex flex-col gap-3 font-medium text-gray-700">
              {navItems.map((item) => (
                <li 
                  key={item} 
                  className="py-2 border-b border-transparent hover:text-blue-600 hover:border-gray-200 transition-colors"
                >
                  {item}
                </li>
              ))}
              <li className="pt-2">
                <Button
                  to="/signin"
                  bg="bg-transparent"
                  hoverBg="hover:bg-gray-100"
                  textColor="text-gray-700"
                  rounded="rounded"
                  size="py-2"
                  className="block w-full text-left hover:text-blue-600"
                >
                  Sign in
                </Button>
                <Button to="/signup" rounded="rounded" size="py-2" className="block w-full mt-2 hover:bg-blue-700">
                  Sign up
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;