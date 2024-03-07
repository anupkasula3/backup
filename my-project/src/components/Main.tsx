"use client";
import React from "react";
import { Button } from "./UI/moving-border";
import "./../css/style.css";


const Main = () => {
  return (
    <>
      <div className="h-[100vh]  w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="h-[100vh] w-full  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Backgrounds
          </p> */}
          <div className="items-center flex h-[100vh] flex-col justify-center">
            <div>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Hello World !
              </Button>
            </div>

            <div className="p-2 animate-text  bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black text-white">
              Welcome to my World &nbsp;
            </div>

            <div className="mx-auto flex w-1/2 max-w-lg items-center justify-center">
              <div className="relative z-10 flex w-1/2 cursor-pointer items-center overflow-hidden rounded-xl border border-white p-[1.5px]">
                <div className="animate-rotate absolute inset-0 h-full w-1/2 rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
                <div className="relative z-20 flex w-full rounded-[0.60rem] bg-dot-transparent p-6">
                  <span className="relative z-50 block w-full text-center text-sm text-white shadow-2xl transition duration-200 ">
                    @nUp KaSuL@
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
