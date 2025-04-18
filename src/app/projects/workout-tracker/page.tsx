"use client";
import Header from "@/components/layout/Header";
import React from "react";
import LoginPage from "../../../shared/LoginPage.png";
import SignInPage from "../../../shared/SignInPage.png";
import MyWorkoutPage from "../../../shared/MyWorkoutPage.png";
import LogWorkoutPage from "../../../shared/LogWorkoutPage.png";
import EditWorkoutPage from "../../../shared/EditWorkoutPage.png";
import ExercisesPage from "../../../shared/ExercisePage.png";
import CalendarPage from "../../../shared/CalendarPage.png";
import { useRouter } from "next/navigation";

function WorkoutTracker() {
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
        <h1 className="font-bold text-5xl my-6">Workout Tracker</h1>
        <h2 className="font-bold text-3xl my-4">Tech Stack</h2>
        <div className="flex flex-wrap">
          <button
            type="button"
            className="hover:bg-black border border-white text-white text-[14px] rounded px-3 mx-2 my-2"
          >
            React
          </button>
          <button
            type="button"
            className="hover:bg-black border border-white text-white text-[14px] rounded px-3 mx-2 my-2"
          >
            Javascript
          </button>
          <button
            type="button"
            className="hover:bg-black border border-white text-white text-[14px] rounded px-3 mx-2 my-2"
          >
            AntD
          </button>
          <button
            type="button"
            className="hover:bg-black border border-white text-white text-[14px] rounded px-3 mx-2 my-2"
          >
            Firebase
          </button>
        </div>
        <h2 className="font-bold text-3xl my-5">Description</h2>
        <h2 className="font-bold text-3xl">Page Info</h2>
        <h2 className="font-bold text-xl my-6">Login Page</h2>
        <img
          className="h-auto max-w-5xl mx-auto shadow-lg ring-2"
          src={LoginPage.src}
          alt="image description"
        ></img>
        <h2 className="font-bold text-xl my-6">SignIn Page</h2>
        <img
          className="h-auto  max-w-5xl mx-auto shadow-lg ring-2"
          src={SignInPage.src}
          alt="image description"
        ></img>
        <h2 className="font-bold text-xl my-6">
          My Workouts Page/ Landing Page
        </h2>
        <img
          className="h-auto  max-w-5xl mx-auto shadow-lg ring-2"
          src={MyWorkoutPage.src}
          alt="image description"
        ></img>
        <h2 className="font-bold text-xl my-6">Log Workout Page</h2>
        <img
          className="h-auto  max-w-5xl mx-auto shadow-lg ring-2"
          src={LogWorkoutPage.src}
          alt="image description"
        ></img>
        <h2 className="font-bold text-xl my-6">Edit Workout Page</h2>
        <img
          className="h-auto  max-w-5xl mx-auto shadow-lg ring-2"
          src={EditWorkoutPage.src}
          alt="image description"
        ></img>
        <h2 className="font-bold text-xl my-6">Exercises Page</h2>
        <img
          className="h-auto  max-w-5xl mx-auto shadow-lg ring-2"
          src={ExercisesPage.src}
          alt="image description"
        ></img>
        <h2 className="font-bold text-xl my-6">Calendar</h2>
        <img
          className="h-auto  max-w-5xl mx-auto shadow-lg ring-2"
          src={CalendarPage.src}
          alt="image description"
        ></img>
      </div>
    </div>
  );
}

export default WorkoutTracker;
