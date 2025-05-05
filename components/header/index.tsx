'use client';
import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/logo';
import { ThemeSwitcher } from '../theme-switcher';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const navigation = [
    { title: 'NavLink1', path: '/navlink1' },
    { title: 'NavLink2', path: '/navlink2' },
    { title: 'NavLink3', path: '/navlink3' },
    { title: 'NavLink4', path: '/navlink4' },
  ];
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      {' '}
      <div className="md:hidden">
        <div className="flex items-center justify-between py-5 px-4">
          <Logo withText />
          <div className="flex items-center gap-2">
         <ThemeSwitcher /> 
            <button className="menu-btn" onClick={toggleMenu}>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-black dark:fill-white"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu  */}
        {isOpen && (
          <div
            className="mobile-menu fixed inset-0 z-50 bg-white dark:bg-zinc-900"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b dark:border-zinc-800">
                <Logo withText />
                <button
                  className="menu-btn text-white hover:text-white"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 fill-gray-800 dark:fill-white"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 p-4">
                <ul className="space-y-4">
                  {navigation.map((item, idx) => (
                    <li
                      key={idx}
                      className="dark:text-white/70 dark:hover:text-white text-gray-800 hover:text-black"
                    >
                      <a href={item.path} className="block py-2 text-lg">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 border-t dark:border-zinc-800">
                <Link
                  href="/sign-in"
                  className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu border border-zinc-300 bg-zinc-50 dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] backdrop-blur rounded-full w-full"
                >
                  <span className="text-black dark:text-white">Sign in</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="w-5 h-5 fill-black dark:fill-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <nav className="hidden md:block md:text-sm top-0 inset-x-0 shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 sticky z-30 bg-trasparent">
        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-24 md:pt-5">
          <Logo withText />
          <div className="flex-1 text-white/90 items-center mt-8 md:mt-0 md:flex block">
            <ul className="mx-auto flex justify-center items-center space-y-6 md:space-x-6 md:space-y-0 rounded-full border border-zinc-300 dark:bg-zinc-800/10 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] px-6 py-4 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:text-zinc-200 dark:ring-white/10 w-fit">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className="dark:text-white/70 dark:hover:text-white text-gray-800 hover:text-black"
                >
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-end md:flex md:mt-0 gap-2">
              <Link
                href="/sign-in"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu border border-zinc-300 bg-zinc-50 dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] backdrop-blur rounded-full md:inline-flex"
              >
                <span className="text-black dark:text-white">Sign in</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 fill-black dark:fill-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
          <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
