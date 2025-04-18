"use client";
import React from "react";
import profileImage from "../shared/ProfileImage3.jpg";
import Image from "next/image";

function AboutMe() {
  const loadResume = () => {
    console.log("Load Resume");
  };
  const loadGithub = () => {
    console.log("Load Github");
  };
  const loadContact = () => {
    console.log("Load Contact");
  };
  return (
    <div className="bg-slate-800/60">
      <div className=" flex flex-col items-center mt-2 mb-8 ">
        <img
          className=" size-40 rounded-full outline-4"
          src={profileImage.src}
          alt=""
        />
      </div>
      <div className="mb-8">
        <h1 className="text-center text-6xl">Amandee Ellawala</h1>
        <h2 className="text-center text-3xl">Frontend Engineer</h2>
      </div>

      <div className="flex flex-wrap justify-center my-6">
        <a
          type="button"
          className="cursor-pointer text-black bg-white hover:hover:bg-gray-200  focus:ring-4 focus:outline-none focus:ring-[white]/50 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  mx-3 mb-2"
          // onClick={loadResume}
          href="#"
        >
          <svg
            className="w-4 h-4 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
              clipRule="evenodd"
            />
          </svg>
          Resume
        </a>
        <a
          className="cursor-pointer  text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-[white]/50 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  mx-3 mb-2"
          href="https://github.com/amandee27"
        >
          <svg
            className="w-4 h-4 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clipRule="evenodd"
            />
          </svg>
          Github
        </a>
        {/* <button
          type="button"
          className="cursor-pointer  text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-[white]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center   mx-8 mb-2"
          onClick={loadContact}
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"
              clipRule="evenodd"
            />
          </svg>
          Contact
        </button> */}
      </div>
    </div>
  );
}

export default AboutMe;
