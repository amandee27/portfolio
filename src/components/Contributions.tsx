"use client";
import Link from "next/link";

import { useRouter } from "next/navigation";
import React from "react";

const ContributionsMain = [
  {
    project: "Ghostfolio",
    description:
      "Feature/Extract historical market data editor to @ghostfolio/ui",
    pr: "https://github.com/ghostfolio/ghostfolio/pull/4080",
    issue: "https://github.com/ghostfolio/ghostfolio/issues/3845",
  },
  {
    project: "Ghostfolio",
    description: "Feature/Split scraper configuration into sub form",
    pr: "https://github.com/ghostfolio/ghostfolio/pull/4157",
    issue: "https://github.com/ghostfolio/ghostfolio/issues/3729",
  },
  {
    project: "Ghostfolio",
    description:
      "Feature/Extend holding detail dialog by historical market data editor",
    pr: "https://github.com/ghostfolio/ghostfolio/pull/4281",
    issue: "https://github.com/ghostfolio/ghostfolio/issues/4127",
  },
];

function Contributions() {
  const router = useRouter();

  return (
    <div>
      <div className="text-center my-12">
        <h1 className="text-5xl mb-2">Contributions</h1>
        <h5>Open-source contributions and community involvement.</h5>
      </div>

      <div className="flex flex-wrap justify-center ">
        {ContributionsMain.map((item) => (
          <div
            key={item.pr}
            className="max-w-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-black dark:border-gray-700 mx-6 my-4"
          >
            <div className="grid grid-cols-6">
              <div className="col-span-5">
                <a href="#">
                  <h5 className="p-5 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                    Ghostfolio
                  </h5>
                </a>
              </div>
              <div>
                <div className="flex justify-end">
                  <Link
                    href={item.issue}
                    className="inline-flex items-center px-3 pt-5 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none  "
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* <a href="#">
             <img
               className="rounded-t-lg"
               src="/docs/images/blog/image-1.jpg"
               alt=""
             />
           </a> */}

            <div className="px-5">
              <p className="mb-2 font-normal  text-[14px] text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </div>
            <div className="flex justify-end">
              <Link
                href={item.pr}
                className="inline-flex items-center mr-3 mb-3 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none  "
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 0h-1a5 5 0 0 1-5-5v-.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center my-6">
        <button
          type="button"
          className="text-white bg-none hover:bg-gray-800 border-2 focus:ring-1 focus:outline-none focus:ring-white font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
          onClick={() => router.push("/contributions")}
        >
          View More
          <svg
            className="w-4 h-4 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Contributions;
