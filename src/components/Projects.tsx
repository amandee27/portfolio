import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <div>
      <h1 className="text-center text-5xl my-12">Projects</h1>
      <div className="grid grid-cols-3 gap-4 justify-center">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-6 my-4">
          <div className="grid grid-cols-6">
            <div className="col-span-5">
              <a href="/projects/workout-tracker">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Workout Tracker
                </h5>
              </a>
            </div>
            <div>
              <Link
                href="https://workout-tracker-84ig76xyz-amandee27s-projects.vercel.app/login"
                className="inline-flex items-center mt-1  text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none  "
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

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            This fitness web application is your personal digital workout
            companion — designed to help users plan, track, and stay consistent
            with their fitness goals.
          </p>
          <div className="flex flex-wrap">
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[10px] rounded-full px-3 mx-2 my-2"
            >
              React
            </button>
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[10px] rounded-full px-3 mx-2 my-2"
            >
              Javascript
            </button>
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[10px] rounded-full px-3 mx-2 my-2"
            >
              AntD
            </button>
          </div>
          <div className="flex justify-end">
            <Link
              href="/projects/workout-tracker"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-200 focus:ring-2  focus:bg-white"
            >
              Read more
              <svg
                className="w-4 h-4 text-gray-800 dark:text-gray-800"
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
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-6 my-4">
          <div className="grid grid-cols-6">
            <div className="col-span-5">
              <a href="/projects/conduit-blog">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Conduit-Blog App
                </h5>
              </a>
            </div>
            <div>
              <Link
                href="https://workout-tracker-84ig76xyz-amandee27s-projects.vercel.app/login"
                className="inline-flex items-center mt-1 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none  "
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

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            This web application is a streamlined, user-friendly platform built
            to help writers, bloggers, and content creators craft and publish
            blog articles with ease.
          </p>
          <div className="flex flex-wrap">
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[10px] rounded-full px-3 mx-2 my-2"
            >
              Angular
            </button>
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[10px] rounded-full px-3 mx-2 my-2"
            >
              Typescript
            </button>
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[10px] rounded-full px-3 mx-2 my-2"
            >
              Bootstrap
            </button>
          </div>
          <div className="flex justify-end">
            <Link
              href="/projects/conduit-blog"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-200 focus:ring-2  focus:bg-white"
            >
              Read more
              <svg
                className="w-4 h-4 text-gray-800 dark:text-gray-800"
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
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-6 my-4">
          <div className="grid grid-cols-6">
            <div className="col-span-5">
              <a href="/projects/portfolio">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Portfolio
                </h5>
              </a>
            </div>
            <div>
              <Link
                href="https://workout-tracker-84ig76xyz-amandee27s-projects.vercel.app/login"
                className="inline-flex items-center mt-1 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none  "
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
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            This portfolio web application is a sleek platform designed to
            showcase your projects, skills, and project contributions online
          </p>
          <div className="flex flex-wrap">
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[10px] rounded-full px-3 mx-2 my-2"
            >
              NextJS
            </button>
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[10px] rounded-full px-3 mx-2 my-2"
            >
              Typescript
            </button>
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[10px] rounded-full px-3 mx-2 my-2"
            >
              Tailwind CSS
            </button>
          </div>
          <div className="flex justify-end">
            <Link
              href="/projects/portfolio"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-200 focus:ring-2  focus:bg-white"
            >
              Read more
              <svg
                className="w-4 h-4 text-gray-800 dark:text-gray-800"
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
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
