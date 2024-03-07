"use client";
import React from "react";

import "./../css/style.css";

import Image from "next/image";
import { SparklesCore } from "./UI/sparkles";
import { Button } from "./UI/moving-border";
import { MaskContainer } from "./UI/svg-mask-effect";
const HomePage = () => {
  return (
    <>
      {/* <div className="bg-black flex flex-col h-[100vh] items-center justify-center">
        <div className="slide">
          <p className="">Hello World !</p>
        </div>
        <div className=" ">
          <div className="relative animate-text  bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black text-white">
            Welcome to my World &nbsp; !
            <div className="absolute -bottom-3 -right-16 w-28 h-28 rounded-full border-2 text-white flex justify-center items-center text-3xl  border-gradient-to-r from-teal-500 via-purple-500 to-orange-500 border-clip-text rotate-90 pb-4 slides">
              <p>2024</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="h-[100vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md ">
        <div className="w-full  inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={60}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="absolute font-bold text-center text-white  z-20">
          <div className="slide">
            <p className="">Hello World !</p>
          </div>
          {/* 
          <div className="w-full flex items-center justify-center  overflow-hidden">
            <MaskContainer
              revealText={
                <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
                  Welcome to my World &nbsp; !
                </p>
              }
              className=" h-[40rem] border rounded-md"
            >
              Welcome to Anup Kasula World &nbsp; !
            </MaskContainer>
          </div>
        </div> */}

          <div>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Hello World !
            </Button>
          </div>

          <div className=" animate-text  bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black text-white">
            Welcome to my World &nbsp; 
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
