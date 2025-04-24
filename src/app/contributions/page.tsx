"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const contributions = [
  {
    projectName: "Ghostfolio",
    issue: "https://github.com/ghostfolio/ghostfolio/issues/3845",
    pr: "https://github.com/ghostfolio/ghostfolio/pull/4080",
    description:
      "Feature/Extract historical market data editor to @ghostfolio/ui ",
  },
  {
    projectName: "Ghostfolio",
    issue: "https://github.com/ghostfolio/ghostfolio/issues/3729",
    pr: "https://github.com/ghostfolio/ghostfolio/pull/4157",
    description: "Feature/Split scraper configuration into sub form",
  },
  {
    projectName: "Ghostfolio",
    issue: "https://github.com/ghostfolio/ghostfolio/issues/4127",
    pr: "https://github.com/ghostfolio/ghostfolio/pull/4281",
    description:
      "Feature/Extend holding detail dialog by historical market data editor",
  },
  {
    projectName: "Ghostfolio",
    issue: "https://github.com/ghostfolio/ghostfolio/issues/3941",
    pr: "https://github.com/ghostfolio/ghostfolio/pull/4031",
    description: "Feature/Extend assistant by selector for holdings",
  },
  {
    projectName: "Ghostfolio",
    issue: "https://github.com/ghostfolio/ghostfolio/issues/3972",
    pr: "https://github.com/ghostfolio/ghostfolio/pull/4043",
    description:
      "Feature/Change slider to range slider in rule settings dialog",
  },
  {
    projectName: "Ghostfolio",
    issue: "https://github.com/ghostfolio/ghostfolio/issues/3932",
    pr: "https://github.com/ghostfolio/ghostfolio/pull/3974",
    description:
      "Bugfix/X-Axis of investment chart component does not adapt on date range change",
  },
  {
    projectName: "Ghostfolio",
    issue: "https://github.com/ghostfolio/ghostfolio/issues/4065",
    pr: "https://github.com/ghostfolio/ghostfolio/pull/4118",
    description: "Bugfix/Holdings are fetched in assistant for each change",
  },
  {
    projectName: "Apollusia",
    issue: "https://github.com/Morphclue/apollusia/issues/194",
    pr: "https://github.com/Morphclue/apollusia/pull/197",
    description: "Bug/Sum row doesn't update as we make changes to the poll",
  },
  {
    projectName: "Hacktoberfest-projects",
    issue:
      "https://github.com/max-programming/hacktoberfest-projects/issues/228",
    pr: "https://github.com/max-programming/hacktoberfest-projects/pull/230",
    description: "Bug/Pagination does not reset when updating search params",
  },
  {
    projectName: "Hacktoberfest-projects",
    issue:
      "https://github.com/max-programming/hacktoberfest-projects/issues/223",
    pr: "https://github.com/max-programming/hacktoberfest-projects/pull/226",
    description: "Star-range reset when selecting a new language",
  },
];

function ContributionsList() {
  const router = useRouter();
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 bg-gray-700/20 min-h-screen">
        <div className="flex justify-start">
          <button
            type="button"
            className="text-white  hover:underline font-medium  text-sm px-5 text-center inline-flex items-center"
            onClick={() => router.push("/")}
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
                d="m15 19-7-7 7-7"
              />
            </svg>
            Back
          </button>
          <h1 className="font-bold text-5xl my-6">Contributions</h1>
        </div>

        <div className="flex flex-wrap justify-center">
          {contributions.map((item) => (
            <div className="max-w-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-black dark:border-gray-700 mx-2 my-4">
              <div className="flex justify-end">
                <Link
                  href={item.issue}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none  "
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
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.projectName}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-[14px] text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
                <div className="flex justify-end">
                  <Link
                    href={item.pr}
                    className="inline-flex items-center   text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none  "
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContributionsList;
