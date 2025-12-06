import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-6 mb-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-2xl">
          <Link href={'/'} className="hover:text-gray-400 transition-colors">
            LiteQl
          </Link>
        </div>

        {/* Navigation */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row gap-4 text-white">
            <li>
              <Link href={'/'} className="hover:text-gray-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href={'/blog'} className="hover:text-gray-400 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href={'/about'} className="hover:text-gray-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href={'/contact'} className="hover:text-gray-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
