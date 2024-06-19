import React from 'react';
import Link from 'next/link';
import TopMenu from './components/TopMenu';

export default function Home() {
  return (
    <main>
      <TopMenu />
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
