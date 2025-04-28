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
          <div className="flex justify-start">
            <button
              type="button"
              className="cursor-pointer text-white hover:underline font-medium  text-sm pr-5 my-9 text-center inline-flex items-center"
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
          <div className="ml-25 flex flex-wrap">
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
            }))}
          ></LightGalleryComponent>
        </div>
      </div>
    </div>
  );
}

export default WorkoutTracker;
