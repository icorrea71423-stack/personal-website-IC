"use client";
import React from "react";
import GithubIcon from "/public/github-icon.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
        from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg 
        absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">
      </div>
      
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>

        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Feel free to reach out! I&apos;m always open to talk about engineering,
          coding, projects, or anything you&apos;re curious about. I&apos;ll try
          to respond as soon as I can.
        </p>

        <div className="flex flex-row gap-2 mb-4">
          <Link href="https://github.com/icorrea71423-stack" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>

          <Link href="https://www.linkedin.com/in/israel-correa-9b2010384" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>

        {/* Email Button */}
        <Link 
          href="mailto:icorrea71423@gmail.com"
          className="inline-block mt-2 px-6 py-3 bg-gradient-to-r 
            from-purple-600 to-cyan-500 text-white font-semibold 
            rounded-lg hover:opacity-90 transition-all duration-200"
        >
          Message Me
        </Link>
      </div>
    </section>
  );
};

export default Contact;
