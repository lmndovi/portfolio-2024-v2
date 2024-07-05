"use client";

import Image from "next/image";
import profilepic from "@/public/smile.jpg";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import About from "./About";
import Contact from "./Contact";
import BackgroundCircles from "./BackgroundCircles";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      `Hey, I'm Lu Ndovi.`,
      "SalsaDancer-Athlete-PlantDad.tsx",
      "<ButMainlyJustACoder/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <main>
      <section className="h-screen snap-y snap-mandatory flex flex-col items-center justify-center text-center">
        <BackgroundCircles />
        <article className="relative h-72 w-72  flex items-center justify-center">
          <Image
            src={profilepic}
            alt="Lu Ndovi"
            fill
            className="rounded-full object-cover"
          />
        </article>
        <article className="py-5 space-y-1">
          <h2 className="uppercase text-sm tracking-[10px]">
            Software Engineer
          </h2>
          <h1 className="text-2xl font-semibold max-w-80">
            <span>{text}</span>
          </h1>
        </article>
      </section>
      <section className="h-screen snap-y snap-mandatory flex flex-col items-center justify-center text-center">
        <About />
      </section>
      <section className="h-screen snap-y snap-mandatory flex flex-col items-center justify-center text-center">
        <Contact />
      </section>
    </main>
  );
};

export default Hero;
