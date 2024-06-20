import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function TopMenu() {
  return (
    <header className="md:flex">
      {/* Logo */}
      <Image
        className="md:absolute object-contain mx-32"
        width={100}
        height={100}
        src={'/dummy_300x300_ffffff_6074f2.png'}
        alt=""
      />
      {/* Top Menu */}
      <section className="w-full">
        <nav className="flex my-6 mx-64">
          <ul className="inline-flex items-center space-x-1 md:space-x-14 rtl:space-x-reverse">
            <li>
              <Link
                className="text-[14px] tracking-wider font-medium focus:font-medium focus:underline underline-offset-8 decoration-2 decoration-red-700 hover:underline hover:decoration-red-400"
                href="#"
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                className="text-[14px] tracking-wider font-medium focus:font-medium underline underline-offset-8 decoration-2 decoration-red-700 hover:underline hover:decoration-red-400"
                href="#"
              >
                RECIPES
              </Link>
            </li>
            <li>
              <Link
                className="text-[14px] tracking-wider font-medium focus:font-medium focus:underline underline-offset-8 decoration-2 decoration-red-700 hover:underline hover:decoration-red-400"
                href="#"
              >
                LEARN
              </Link>
            </li>
            <li>
              <Link
                className="text-[14px] tracking-wider font-medium focus:font-medium focus:underline underline-offset-8 decoration-2 decoration-red-700 hover:underline hover:decoration-red-400"
                href="#"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                className="text-[14px] tracking-wider font-medium focus:font-medium focus:underline underline-offset-8 decoration-2 decoration-red-700 hover:underline hover:decoration-red-400"
                href="#"
              >
                BLOG
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sub Menu */}
        <nav className="flex h-12 my-7 px-64 bg-orange-50">
          <ul className="inline-flex items-center space-x-1 md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link className="text-xs tracking-wider font-medium" href="#">
                CATEGORIES
              </Link>
            </li>
            <li>
              <Link className="text-xs tracking-wider font-medium" href="#">
                COLLECTIONS
              </Link>
            </li>
            <li>
              <Link className="text-xs tracking-wider font-medium" href="#">
                RESOURCES
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
