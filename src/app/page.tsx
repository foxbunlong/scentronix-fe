import React from 'react';
import Link from 'next/link';
import TopMenu from './components/TopMenu';
import Image from 'next/image';
import Breadcrumb from './components/Breadcrumb';

export default function Home() {
  return (
    <main>
      <TopMenu />
      {/* Article Content */}
      <article className="flex mx-12 lg:ml-32 lg:mr-20">
        <section className="w-[47%] pr-20">
          <Breadcrumb />
          <h1 className="text-4xl font-semibold mt-6">
            Whole-Grain Banana Bread
          </h1>
          <div className="w-full mt-28">
            {/* Content Section */}
            <section>
              <p className="text-gray-600">
                This one-bowl banana bread —{' '}
                <a
                  className="underline underline-offset-2 decoration-2 decoration-gray-600"
                  href="#"
                >
                  our 2018 Recipe of the Year
                </a>{' '}
                — uses the simplest ingredients, but is incredibly moist and
                flavorful. While the recipe calls for a 50/50 mix of flours
                (all-purpose and whole wheat), we often make the bread 100%
                whole wheat, and honestly? No one can tell, it&apos;s that good!
                And not only is this bread delicious — it&apos;s versatile.
              </p>
              {/* Add more content here */}
            </section>
            <section>
              <div className="flex mt-8 items-start">
                <Image src={'/clock.svg'} width={40} height={40} alt="" />
                <div className="ml-4">
                  <div className="mb-1 text-xs font-semibold tracking-wider">
                    PREP
                  </div>
                  <span className="font-medium text-lg truncate">10 mins</span>
                </div>

                <div className="ml-8">
                  <div className="mb-1 text-xs font-semibold tracking-wider">
                    BAKE
                  </div>
                  <span className="font-medium text-lg truncate">
                    1 hr to 1 hr 15 mins
                  </span>
                </div>

                <div className="ml-4">
                  <div className="mb-1 text-xs font-semibold tracking-wider">
                    TOTAL
                  </div>
                  <span className="font-medium text-lg truncate">
                    1 hr 25 mins
                  </span>
                </div>
              </div>

              <hr className="mt-7" />

              <div className="flex mt-5 items-start">
                <Image src={'/yield.svg'} width={40} height={40} alt="" />
                <div className="ml-4">
                  <div className="mb-1 text-xs font-semibold tracking-wider">
                    YIELD
                  </div>
                  <span className="font-medium text-lg">
                    1 loaf, 12 generous servings
                  </span>
                </div>

                <div className="ml-2">
                  <a
                    href="#"
                    className="flex items-center border border-[#da1a32] py-1.5 px-4 space-x-2"
                    aria-label="Save Recipe: Whole Grain Banana Bread"
                    data-once="recipe-box-add"
                  >
                    <svg
                      width={20}
                      height={20}
                      enable-background="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m8 7v-7h-1v7h-7v1h7v7h1v-7h7v-1z"></path>
                    </svg>
                    <p className="font-semibold text-xs truncate">
                      SAVE RECIPES
                    </p>
                  </a>
                </div>

                <div className="ml-2">
                  <a
                    href="#"
                    className="flex items-center border border-[#da1a32] py-1.5 px-4 space-x-2"
                  >
                    <svg
                      width={20}
                      height={20}
                      enable-background="new 0 0 21.1 20.1"
                      viewBox="0 0 21.1 20.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m20.6 3c-.3-.3-.7-.5-1.2-.5h-1.6v-2.5h-14.6v2.5h-1.5c-.5 0-.9.2-1.2.5s-.5.7-.5 1.2v8.3c0 .5.2.9.5 1.2s.7.5 1.2.5h2.3v5.9h13v-5.9h2.4c.5 0 .9-.2 1.2-.5s.5-.7.5-1.2v-8.3c0-.5-.2-.9-.5-1.2zm-3.6-2.1v1.6h-12.9v-1.6zm-13 7.4v4.9h-2.3c-.5 0-.8-.3-.8-.8v-8.2c0-.5.2-.7.8-.7h17.8c.5 0 .8.2.8.7v8.3c0 .5-.2.8-.8.8h-2.4v-5zm.9 10.9v-9.9h11.2v9.9z"></path>
                    </svg>
                    <p className="font-semibold text-xs truncate">PRINT</p>
                  </a>
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
