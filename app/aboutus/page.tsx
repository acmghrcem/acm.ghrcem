import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/spotlight";
import Image from 'next/image';
import logo from '@/public/acmlogo.svg'; 

export default function SpotlightPreview() {
  return (
    <div>
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl mt-10 flex justify-content flex-col  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl text-center md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          ABOUT US<br />
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-2xl mx-auto">
        ACMGHRCEM, we see a future where tech enthusiasts and innovators make a real impact on the world.
        Our goal is to support you in your journey through computing by offering valuable exposure,
        expert mentorship, a strong network, and the resources you need to turn your ideas into reality. 
        We aim to build a thriving community where creativity, technical skills, and ethical practices 
        come together to drive positive change and shape the future of technology.
        </p>
      </div>
      <div className=" justify-content md:justify-end mt-8 md:mr-40 hidden sm:flex mr-40 ">
      <Image
        src={logo}
        width={500}
        height={500}
        alt="Picture of the author"
        className="hidden md:block"
      />
      </div>
     </div>
    </div>
  );
}
