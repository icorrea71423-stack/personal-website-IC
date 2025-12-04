"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">

        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />

            {/* ANIMATED TITLES — MATCHES YOU */}
            <TypeAnimation
              sequence={[
                "Israel Correa",
                1500,
                "Electrical Engineering Major",
                1500,
                "Computer Science Minor",
                1500,
                "Arduino & Circuit Builder",
                1500,
                "Hands-On Engineer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          {/* YOUR QUOTE */}
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            “What you can’t build, you don’t understand.” — Richard Feynman
          </p>

        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative overflow-hidden">
          <Image
  src="/images/hero/picture.png"
  alt="Israel Correa"
  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
  width={350}
  height={350}
/>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
