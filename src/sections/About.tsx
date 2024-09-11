"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import MongoIcon from "@/assets/icons/mongo.svg";
import PostgresIcon from "@/assets/icons/postgres.svg";
import WordPressIcon from "@/assets/icons/wp.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PythonIcon from "@/assets/icons/python.svg";
import mapImage from "@/assets/images/maps.jpg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Typescript",
    iconType: TypescriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: NextIcon,
  },
  {
    title: "Git & Github",
    iconType: GithubIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoIcon,
  },
  {
    title: "SQL Databases",
    iconType: PostgresIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "WordPress",
    iconType: WordPressIcon,
  },
];

const hobbies = [
  {
    title: "Communication",
    emoji: "📞",
    left: "5%",
    top: "5%",
  },
  {
    title: "Leadership",
    emoji: "👨‍💼",
    left: "50%",
    top: "5%",
  },
  {
    title: "SEO",
    emoji: "🔍",
    left: "10%",
    top: "35%",
  },
  {
    title: "Analytics",
    emoji: "📈",
    left: "35%",
    top: "35%",
  },
  {
    title: "Problem Solving",
    emoji: "🧩",
    left: "60%",
    top: "35%",
  },

  {
    title: "Creativity",
    emoji: "🎨",
    left: "10%",
    top: "70%",
  },
  {
    title: "Time Management",
    emoji: "⏳",
    left: "35%",
    top: "70%",
  },
  {
    title: "Teamwork",
    emoji: "🤝",
    left: "72%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrown="About Me"
          title="What can I do?"
          description="Learn more about who I am and what I can do for you."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-3 lg:col-span-5">
              <CardHeader
                title="My technical skills"
                description="Here are some of the tools and technologies I use on a daily basis."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                description="Explore my soft skills, and professional skills."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-purple-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
