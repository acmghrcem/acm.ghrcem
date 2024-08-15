"use client";
import React from "react";
import { SparklesCore } from "../components/sparkles";
import logo from '@/public/acmlogo.svg';
import { Spotlight } from "@/components/ui/spotlight";
import Image from 'next/image';
import { motion } from "framer-motion";
import ContactPage from "@/components/Contact";

export default function SparklesPreview() {
  return (
    <div>
      <div>
      <div className="h-[40rem] w-full bg-black flex flex-col items-center mt-20 justify-center overflow-hidden rounded-md">
      <motion.div
          className=""
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-blue-500 relative z-20">
            GHRCEM ACM
          </h2>
      <h2 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
        Students Chapter
      </h2>
      </motion.div>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={1}
          maxSize={2}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
    </div>
    <div>
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
      <div className=" p-4 max-w-7xl mt-10 flex justify-content flex-col  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl text-center md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          ABOUT US<br />
        </h1>
        <h5 className="mt-4 font-normal text-base text-neutral-300 max-w-2xl mx-auto">
        ACMGHRCEM, we see a future where tech enthusiasts and innovators make a real impact on the world.
        Our goal is to support you in your journey through computing by offering valuable exposure,
        expert mentorship, a strong network, and the resources you need to turn your ideas into reality. 
        We aim to build a thriving community where creativity, technical skills, and ethical practices 
        come together to drive positive change and shape the future of technology
        </h5>
      </div>
      <div className="justify-content md:justify-end mt-8 md:mr-40 hidden sm:flex mr-40  ">
      <Image
        src={logo}
        width={500}
        height={500}
        alt="Picture of the author"
        className="hidden md:block"
      />
      </div>
     </div>
     <ContactPage />
    </div>
    </div>
  );
}
