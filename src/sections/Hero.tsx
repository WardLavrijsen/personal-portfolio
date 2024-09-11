"use client";

import memojiImage from "@/assets/images/small.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 ">
        {/* imagen de grano */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        {/* círculos */}
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
  orbitDuration?: string; */}

        {/* Stars */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-purple-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-purple-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-purple-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-purple-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-purple-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-purple-300" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-purple-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s">
          <SparkleIcon className="size-14 text-purple-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-purple-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-purple-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Person peeking from behind laptop"
            className="w-[200px] rounded-full mb-7"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-purple-500 size-2.5 rounded-full relative">
              <div className="bg-purple-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Full-Stack Software Engineer
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto z-50">
        <h1 className="text-3xl md:text-6xl font-bold text-center mt-8 tracking-wide">
          Hi, I&apos;m Ward Lavrijsen
        </h1>
        <p className="mt-4 text-center text-white/60 md:text-lg z-50">
          I&apos;m a Full-Stack Software Engineer with a passion for building
          beautiful and functional web applications.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 z-50">
        <button
          onClick={() => {
            const divID = document.getElementById("projects-section");
            divID?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-50"
        >
          <span className="font-semibold">See projects</span>
          <ArrowDown className="size-4" />
        </button>
        <a
          href="mailto:info@wardlavrijsen.com"
          className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-50"
        >
          <span className="">🖐</span>
          <span className="font-semibold">Let&apos;s Connect</span>
        </a>
      </div>
    </div>
  );
};
