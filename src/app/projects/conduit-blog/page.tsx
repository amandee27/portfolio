"use client";
import React from "react";
import { useRouter } from "next/navigation";

function ConduitBlog() {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-wrap justify-end my-6">
        <button
          type="button"
          className="text-white  hover:bg-gray-400 rounded focus:ring-1  font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center   me-2 mb-2"
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
      </div>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 bg-gray-700/20 min-h-screen">
        <h1>Conduit Blog</h1>
      </div>
    </div>
  );
}

export default ConduitBlog;
