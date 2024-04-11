"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { motion } from "framer-motion";
import { Lamp } from "@/components/Lamp";

const fadeIn = {
  initial: {
    opacity: 0.5,
    y: 100,
    filter: "blur(20px)",
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: { delay: 0.05 * index },
  }),
};

export default function TracingBeamDemo() {
  return (
    <>
      <Lamp />
      <TracingBeam className="px-6 mt-10 ">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <motion.div
              variants={{ ...fadeIn }}
              initial="initial"
              whileInView={"animate"}
              custom={index}
              viewport={{ once: true }}
              key={`content-${index}`}
              className="mb-10"
            >
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p
                className={twMerge("", "text-xl mb-4 text-white font-semibold")}
              >
                {item.title}
              </p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

const dummyContent = [
  {
    title: "Soeuk Sophanit",
    description: (
      <>
        <p className="text-white tracking-wider leading-[1.6]">
          Hello, my name is “Soeuk Sophanit” and I am a fresh graduate who is
          passionate about learning computer science. I am excited to explore
          various areas in computer science, such as software development ,web
          development. I am currently focusing on improving my coding skills and
          expanding my knowledge in these areas through online courses and
          practical projects.
        </p>
        <p className="text-white tracking-wider leading-[1.6]">
          I believe that computer science has the potential to make a positive
          impact on society, and I am eager to contribute to this field in any
          way I can. I am open to new opportunities and challenges that will
          help me grow and develop as a computer science professional.
        </p>
      </>
    ),
    badge: "Owner",
    image: "/profile.JPG",
  },
];
