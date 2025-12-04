"use client";
import React, { useState, useTransition, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

/* ============================================================
   IMAGE CAROUSEL — USING YOUR FOLDER: /images/ImageCarousel/
   ============================================================ */
const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  // Add your exact filenames from public/images/ImageCarousel/
  const images = [
    "/images/ImageCarousel/IMG_4022.JPG",
    "/images/ImageCarousel/IMG_6021.JPG",
    "/images/ImageCarousel/IMG_6052.JPG",
    "/images/ImageCarousel/20251006_160330000_iOS.jpg",
    "/images/ImageCarousel/20251006_160332000_iOS 1.jpg",
    "/images/ImageCarousel/20251006_160332000_iOS 4.jpg",
  ];

  // Auto-slide every 3 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, 3000);

  return () => clearInterval(interval);
}, [images.length]);


  return (
    <div className="relative w-full h-[450px] overflow-hidden rounded-xl bg-black">
      {/* IMAGES */}
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={`About Image ${i}`}
          fill
          className={`object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-white scale-110" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

/* ============================================================
   REUSABLE CARDS
   ============================================================ */
const SkillCard = ({ title, skills, color }: any) => (
  <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#232323] transition-all duration-300">
    <h3 className={`text-xl font-semibold mb-2 text-${color}-400`}>{title}</h3>
    <ul className="list-none space-y-2">
      {skills.map((skill: any, index: any) => (
        <li key={index} className="text-gray-300">{skill}</li>
      ))}
    </ul>
  </div>
);

const HobbyCard = ({ icon, text, color }: any) => (
  <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#232323] transition-colors">
    <div className="flex items-center space-x-2">
      <div className={`text-${color}-400`}>{icon}</div>
      <span className="text-gray-200">{text}</span>
    </div>
  </div>
);

/* ============================================================
   TAB DATA — SKILLS / EDUCATION / HOBBIES
   ============================================================ */
const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <SkillCard
          title="Electrical Engineering"
          skills={[
            "Circuit Design",
            "Breadboard Prototyping",
            "Sensors & Modules",
            "Oscillators",
            "Troubleshooting"
          ]}
          color="cyan"
        />

        <SkillCard
          title="Programming"
          skills={[
            "C++",
            "Python",
            "JavaScript"
          ]}
          color="green"
        />

        <SkillCard
          title="Hardware"
          skills={[
            "Arduino",
            "Microcontrollers",
            "Embedded Systems"
          ]}
          color="purple"
        />
      </div>
    ),
  },

  {
    id: "education",
    title: "Education",
    content: (
      <div className="bg-[#181818] p-6 rounded-lg border border-gray-800 space-y-6">

        <div>
          <h3 className="text-xl font-bold text-white">Major: Electrical Engineering</h3>
          <p className="text-gray-300">University of Texas Rio Grande Valley</p>
          <p className="text-gray-400 text-sm mt-1">Focus: Circuits, hardware, electronics</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">Minor: Computer Science</h3>
          <p className="text-gray-300">University of Texas Rio Grande Valley</p>
          <p className="text-gray-400 text-sm mt-1">Experience: C++, programming fundamentals</p>
        </div>

      </div>
    ),
  },

  {
    id: "hobbies",
    title: "Hobbies",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {/* Electronics */}
        <HobbyCard
          text="Electronics & Circuit Building"
          color="cyan"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0a4 4 0 10-8 0 4 4 0 008 0z" /></svg>}
        />

        {/* Arduino */}
        <HobbyCard
          text="Arduino Projects"
          color="green"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m5-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />

        {/* Soccer */}
        <HobbyCard
          text="Playing Soccer"
          color="yellow"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth={2}/></svg>}
        />

        {/* Drawing */}
        <HobbyCard
          text="Drawing & Sketching"
          color="pink"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={2} d="M3 21h6m-6 0l14-14l3 3L6 24H3z"/></svg>}
        />

        {/* Cars */}
        <HobbyCard
          text="Working on Cars"
          color="red"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={2} d="M3 13l2-5h14l2 5M5 16h14" /></svg>}
        />

        {/* Anime */}
        <HobbyCard
          text="Watching Anime"
          color="blue"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="16" height="12" x="4" y="6" strokeWidth={2}/></svg>}
        />

      </div>
    ),
  },
];

/* ============================================================
   ABOUT SECTION MAIN COMPONENT
   ============================================================ */
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => setTab(id));
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-10 items-center py-12 px-6 xl:px-20">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I'm <span className="text-white font-semibold">Israel Correa</span>,
            an Electrical Engineering major with a Computer Science minor at UTRGV.
            I enjoy working with circuits, Arduino projects, hands-on hardware,
            and constantly learning more about electronics and engineering.
          </p>

          {/* TABS */}
          <div className="relative mt-10 mb-6 p-2 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 flex gap-2">
            {TAB_DATA.map((item) => (
              <TabButton
                key={item.id}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE CAROUSEL */}
        <div className="w-full">
          <ImageCarousel />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
