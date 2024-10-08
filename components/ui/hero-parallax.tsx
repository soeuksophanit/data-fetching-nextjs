"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/service/movieService";

export const HeroParallax = ({ movies }: { movies: Movie[] }) => {
  const firstRow = movies.slice(0, 5);
  const secondRow = movies.slice(5, 10);
  const thirdRow = movies.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-x-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((movie, idx) => (
            <ProductCard movie={movie} translate={translateX} key={idx} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product, idx) => (
            <ProductCard
              movie={product}
              translate={translateXReverse}
              key={idx}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, idx) => (
            <ProductCard movie={product} translate={translateX} key={idx} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const fadeRight = {
  initial: {
    x: -20,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const fadeUp = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

export const Header = () => {
  return (
    <div className=" relative z-[9] mx-auto py-20 md:py-40 px-[5%] w-full  left-0 top-0">
      <motion.h1
        initial="initial"
        animate="animate"
        variants={fadeRight}
        className="text-2xl md:text-7xl font-bold  text-white"
      >
        Watch the latest <br /> movies in the world
      </motion.h1>
      <motion.p
        initial="initial"
        animate="animate"
        variants={fadeUp}
        className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200"
      >
        We build beautiful movie website with the latest update and incoming
        movies. We are a team of passionate people and movies's lover that love
        to watch the amazing film.
      </motion.p>
    </div>
  );
};

export const ProductCard = ({
  movie,
  translate,
}: {
  movie: Movie;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={movie.movie_title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={"/movies/detail/" + movie.movie_id}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          priority
          src={movie.image ? movie.image : "/img.jpg"}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={movie.movie_title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {movie.movie_title}
      </h2>
    </motion.div>
  );
};
