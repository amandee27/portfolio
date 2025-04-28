"use client";
import React from "react";
import LoginPage from "../../../shared/LoginPage.png";
import SignInPage from "../../../shared/SignInPage.png";
import MyWorkoutPage from "../../../shared/MyWorkoutPage.png";
import LogWorkoutPage from "../../../shared/LogWorkoutPage.png";
import EditWorkoutPage from "../../../shared/EditWorkoutPage.png";
import ExercisesPage from "../../../shared/ExercisePage.png";
import CalendarPage from "../../../shared/CalendarPage.png";
import { useRouter } from "next/navigation";
import type { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { useRef } from "react";
import { image } from "framer-motion/m";

const images = [
  { srcName: LoginPage.src, id: "Login Page" },
  { srcName: SignInPage.src, id: "Sign In Page" },
  { srcName: MyWorkoutPage.src, id: "My Workout Page" },
  { srcName: LogWorkoutPage.src, id: "Log Workout Page" },
  { srcName: EditWorkoutPage.src, id: "Edit Workout Page" },
  { srcName: ExercisesPage.src, id: "Exercises Page" },
  { srcName: CalendarPage.src, id: "Calendar Page" },
];

function WorkoutTracker() {
  const router = useRouter();
  const lightBoxRef = useRef<LightGallery | null>(null);
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
            <h1 className="font-bold text-5xl mt-6">Workout Tracker</h1>
          </div>
          <div className="ml-10 flex flex-wrap">
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[11px] rounded px-3 mx-2 my-2"
            >
              React
            </button>
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[11px] rounded px-3 mx-2 my-2"
            >
              Javascript
            </button>
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[11px] rounded px-3 mx-2 my-2"
            >
              AntD
            </button>
            <button
              type="button"
              className="hover:bg-black border border-white text-white text-[11px] rounded px-3 mx-2 my-2"
            >
              Firebase
            </button>
          </div>
          <div className="my-6">
            <p>
              Workout Tracker is a web-based application designed to help
              fitness enthusiasts and casual gym goers efficiently track, log,
              and analyze their workouts. The app provides a user-friendly
              interface for creating customized workout routines, logging
              exercise data in real-time and monitoring progress.
            </p>
            <p className="my-6">
              With features like historical workout logs, personalized fitness
              goals <b>Workout Tracker</b> empowers users to stay consistent and
              improve their performance over time. The app is ideal for
              individuals training with weights, bodyweight exercises, cardio,
              or a mix of fitness activities.{" "}
            </p>
            <h4 className="font-bold text-xl">Core Features</h4>
            <ul className="mx-8 my-4">
              <li>
                <b>Exercise Logging: </b>Log exercises with sets, reps, weight,
                and notes.
              </li>
              <li>
                <b>Logged exercises: </b>View your logged workouts with clean,
                beautiful table
              </li>
              <li>
                <b>Workout Calendar: </b>Plan and schedule future workouts.
              </li>
              <li>
                <b>Exercise List: </b>List of exercises such as weightlifting,
                cardio, HIIT & more
              </li>
            </ul>
          </div>
          <div className="flex justify-start">
            <div className="px-6">
              <a
                href="https://workout-tracker-84ig76xyz-amandee27s-projects.vercel.app/login"
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
                href="https://github.com/amandee27/workout-tracker"
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
          <div className="grid grid-cols-3 gap-4 my-6">
            {images.map((imageSrc, idx) => (
              <div key={imageSrc.srcName} className="relative">
                <img
                  className="h-auto max-w-full rounded-lg cursor-pointer"
                  src={imageSrc.srcName}
                  alt="image description"
                  data-tip="test"
                />
                <div
                  className="absolute h-full w-full bg-black/30 flex items-center justify-center -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    lightBoxRef.current?.openGallery(idx);
                  }}
                >
                  <p className="text-white">{imageSrc.id}</p>
                </div>
              </div>
            ))}
          </div>
          <LightGalleryComponent
            onInit={(ref) => {
              if (ref) {
                lightBoxRef.current = ref.instance;
              }
            }}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            dynamic
            dynamicEl={images.map((image) => ({
              src: image.srcName,
              thumb: image.srcName,
              subHtml: `<div class="lightGallery-captions">
                    <h4>${image.id}</h4>
                </div>`,
            }))}
          ></LightGalleryComponent>
        </div>
      </div>
    </div>
  );
}

export default WorkoutTracker;
