import React from 'react';
import Link from 'next/link';
import TopMenu from './components/TopMenu';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <TopMenu />
      {/* Article Content */}
      <article className="flex mx-12 lg:ml-32 lg:mr-20">
        <section className="w-[47%] pr-20">
          {/* Breadcrumbs */}
          <nav className="flex mt-5" aria-label="breadcrumb">
            <ol className="inline-flex items-center">
              <li className="inline-flex items-center">
                <Link
                  className="inline-flex items-center text-xs font-semibold"
                  href="#"
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
                  className="inline-flex items-center text-xs font-semibold"
                  href="#"
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
                <span className="inline-flex items-center text-xs font-semibold">
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

          <h1 className="text-4xl font-semibold mt-6">
            Whole-Grain Banana Bread
          </h1>
          <div className="w-full mt-28">
            {/* Content Section */}
            <section>
              <p>
                This one-bowl banana bread — our 2018 Recipe of the Year — uses
                the simplest ingredients, but is incredibly moist and flavorful.
                While the recipe calls for a 50/50 mix of flours (all-purpose
                and whole wheat), we often make the bread 100% whole wheat, and
                honestly? No one can tell, it&apos;s that good! And not only is
                this bread delicious — it&apos;s versatile.
              </p>
              {/* Add more content here */}
            </section>
            <section>
              <div className="stats stats--recipe with-rule">
                <div className="stat__item stat__item--prep">
                  <div className="label">Prep</div>
                  <span>10 mins</span>
                </div>

                <div className="stat__item stat__item--bake">
                  <div className="label">Bake</div>
                  <span>1 hr to 1 hr 15 mins</span>
                </div>

                <div className="stat__item stat__item--total">
                  <div className="label">Total</div>
                  <span>1 hr 25 mins</span>
                </div>
              </div>
              <div className="stats stats--recipe stats--yield-row ">
                <div className="stat__item stat__item--yield">
                  <div className="label">Yield</div>
                  <span>one 9&quot; x 5&quot; loaf</span>
                </div>

                <div className="stat__item stat__item--recipe-box">
                  <a
                    href="/recipebox"
                    className="btn btn--save js-kaf-recipe-box-add"
                    data-recipe-id="18916"
                    data-recipe-uuid="cb4174f2-05cd-4032-8ce5-2f1d07315a1f"
                    aria-label="Save Recipe: Whole Grain Banana Bread"
                    data-once="recipe-box-add"
                  >
                    <svg
                      enable-background="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m8 7v-7h-1v7h-7v1h7v7h1v-7h7v-1z"></path>
                    </svg>
                    Save Recipe
                  </a>
                </div>

                <div className="stat__item stat__item--print">
                  <button
                    id="print-recipe-button"
                    className="btn btn--print"
                    data-node="18916"
                  >
                    <svg
                      enable-background="new 0 0 21.1 20.1"
                      viewBox="0 0 21.1 20.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m20.6 3c-.3-.3-.7-.5-1.2-.5h-1.6v-2.5h-14.6v2.5h-1.5c-.5 0-.9.2-1.2.5s-.5.7-.5 1.2v8.3c0 .5.2.9.5 1.2s.7.5 1.2.5h2.3v5.9h13v-5.9h2.4c.5 0 .9-.2 1.2-.5s.5-.7.5-1.2v-8.3c0-.5-.2-.9-.5-1.2zm-3.6-2.1v1.6h-12.9v-1.6zm-13 7.4v4.9h-2.3c-.5 0-.8-.3-.8-.8v-8.2c0-.5.2-.7.8-.7h17.8c.5 0 .8.2.8.7v8.3c0 .5-.2.8-.8.8h-2.4v-5zm.9 10.9v-9.9h11.2v9.9z"></path>
                    </svg>
                    Print
                  </button>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Image Section */}
        <section className="w-[55%]">
          <Image
            width={960}
            height={636}
            src="/article-image.jpg"
            alt="Article Image"
          />
        </section>
      </article>
    </main>
  );
}
