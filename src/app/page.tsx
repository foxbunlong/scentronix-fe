import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <main>
      <div>
        {/**className="bg-slate-600" */}
        <div className="md:flex">
          {/* Logo */}
          <Image
            className="md:absolute object-contain mx-32"
            width={100}
            height={100}
            src={'/dummy_300x300_ffffff_6074f2.png'}
            alt=""
          />
          {/* Top Menu */}
          <div className="w-full">
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
                  <Link className='text-xs tracking-wider font-medium' href="#">CATEGORIES</Link>
                </li>
                <li>
                  <Link className='text-xs tracking-wider font-medium' href="#">COLLECTIONS</Link>
                </li>
                <li>
                  <Link className='text-xs tracking-wider font-medium' href="#">RESOURCES</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <nav className="flex" aria-label="breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              href="/"
            >
              RECIPES
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                  color="#C68194"
                />
              </svg>
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              href="/blog"
            >
              BREAD
            </Link>
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
                color="#C68194"
              />
            </svg>
          </li>
          <li className="flex items-center" aria-current="page">
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              QUICK BREAD
            </span>
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
                color="#C68194"
              />
            </svg>
          </li>
        </ol>
      </nav>

      {/* Article Content */}
      <article>
        <h1>Article Title</h1>
        <div>
          {/* Content Section */}
          <section>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            {/* Add more content here */}
          </section>

          {/* Image Section */}
          <section>
            <img src="/article-image.jpg" alt="Article Image" />
          </section>
        </div>
      </article>
    </main>
  );
}
