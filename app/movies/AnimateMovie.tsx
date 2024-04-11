"use client";

import { Movie } from "@/service/movieService";
import { motion } from "framer-motion";
import Image from "next/image";
import Description from "./Description";

const AnimateMovie = ({ movie }: { movie: Movie }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          filter: "blur(5px)",
        },
        animate: {
          filter: "blur(0px)",
          transition: {
            delay: 0.3,
          },
        },
      }}
      className="hero text-white relative after:absolute after:inset-0 after:bg-blend-overlay  after:top-0"
    >
      <Image
        alt={
          movie?.movie_title != undefined
            ? movie.movie_title
            : "picture of moive"
        }
        height="1000"
        width="1000"
        src={
          movie?.image && movie.image !== undefined ? movie.image : "/img.jpg"
        }
        className="w-full h-full object-cover"
      />
      <Description movie={movie} />
    </motion.div>
  );
};

export default AnimateMovie;
