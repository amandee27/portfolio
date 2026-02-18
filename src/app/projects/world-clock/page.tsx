"use client";
import React from "react";
import { useRouter } from "next/navigation";

function WorldClock() {
  const router = useRouter();
  return (
    <div>
      <div className="max-w-full py-6 sm:px-6 lg:px-8 bg-gray-700/20 min-h-screen">
        <div className="mx-8">
          <div className="flex justify-start items-end">
            <button
              type="button"
              className="cursor-pointer text-white hover:underline font-medium  text-sm pr-5 mb-3 text-center inline-flex items-center"
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
                  d="M5 12h14M5 12l4-4m-4 4 4 4"
                />
              </svg>
            </button>
            <h1 className="font-bold text-5xl mt-6">World Clock Portal</h1>
          </div>
          <div className="ml-10 flex flex-wrap">
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[11px] rounded px-3 mx-2 my-2"
            >
              React 19
            </button>
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[11px] rounded px-3 mx-2 my-2"
            >
              TypeScript
            </button>
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[11px] rounded px-3 mx-2 my-2"
            >
              Redux
            </button>
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[11px] rounded px-3 mx-2 my-2"
            >
              Context API
            </button>
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[11px] rounded px-3 mx-2 my-2"
            >
              Tailwind CSS
            </button>
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[11px] rounded px-3 mx-2 my-2"
            >
              Node.js
            </button>
          </div>
          <div className="my-6">
            <p className="my-6">
              A React 19 + TypeScript dashboard for real-time multi-timezone
              tracking, built with a focus on performance, accessibility, and a
              highly interactive user interface. Users can monitor multiple
              cities, customize their layout, and manage clocks through an
              intuitive, responsive dashboard.
            </p>
            <h4 className="font-bold text-xl">Core Features</h4>
            <ul className="mx-8 my-4">
              <li>
                <b>Real-Time Multi-Timezone Clock Display: </b>Shows live time
                for multiple cities at a glance.
              </li>
              <li>
                <b>Drag-and-Swap Clocks: </b>Reorder clocks via drag-and-drop
                for a personalized dashboard.
              </li>
              <li>
                <b>Customizable Themes: </b>Switch between light and dark modes.
              </li>
              <li>
                <b>Responsive Layout: </b>Works seamlessly on desktop, tablet,
                and mobile devices.
              </li>
              <li>
                <b>Interactive Dashboard: </b>Intuitive interface for adding and
                removing clocks.
              </li>
              <li>
                <b>City Search UI: </b>Quick search to find and add new cities.
              </li>
            </ul>
            <h4 className="font-bold text-xl">Performance Optimizations</h4>
            <ul className="mx-8 my-4">
              <li>
                Efficient global state management using <b>Redux Toolkit</b>.
              </li>
              <li>Optimized real-time updates for smooth UI rendering.</li>
            </ul>
            <h4 className="font-bold text-xl">Accessibility</h4>
            <ul className="mx-8 my-4">
              <li>Semantic HTML structure for better screen reader support.</li>
              <li>Keyboard-friendly interactions for drag and controls.</li>
              <li>High-contrast theme support for improved readability.</li>
            </ul>
          </div>
          <div className="flex justify-start">
            <div className="px-6">
              <a
                href="https://world-clock-portal.vercel.app/"
                className="inline-flex items-center mt-1  text-sm font-medium text-center text-white focus:outline-none  "
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="pr-1 text-xs">Demo</p>
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
                    d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                  />
                </svg>
              </a>
            </div>
            <div className="px-6">
              <a
                href="https://github.com/amandee27/world-clock-portal"
                className="inline-flex items-center mt-1  text-sm font-medium text-center text-white focus:outline-none  "
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="pr-1 text-xs">Github</p>
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div className="w-full max-w-5xl mt-6 mx-auto border-1 border-amber-50">
              <video className="w-full shadow-lg" controls muted autoPlay loop>
                <source src="/shared/world-clock-portal.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldClock;
