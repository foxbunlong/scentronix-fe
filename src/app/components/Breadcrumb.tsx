import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function Breadcrumb() {
  return (
    <nav className="flex mt-5" aria-label="breadcrumb">
      <ol className="inline-flex items-center">
        <li className="inline-flex items-center">
          <Link
            className="inline-flex tracking-wider items-center text-xs font-semibold"
            href="#"
          >
            RECIPES
            <svg
              className="rtl:rotate-180 w-2 h-2 text-gray-400 mx-1"
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
            className="inline-flex tracking-wider items-center text-xs font-semibold"
            href="#"
          >
            BREAD
          </Link>
          <svg
            className="rtl:rotate-180 w-2 h-2 text-gray-400 mx-1"
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
          <span className="inline-flex tracking-wider items-center text-xs font-semibold">
            QUICK BREAD
          </span>
          <svg
            className="rtl:rotate-180 w-2 h-2 text-gray-400 mx-1"
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
  );
}
