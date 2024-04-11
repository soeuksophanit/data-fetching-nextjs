import { fetchApi, filterMovie } from "@/service/movieService";
import React from "react";
import AnimateMovie from "./AnimateMovie";
import Image from "next/image";
import Link from "next/link";

const MoviePage = async () => {
  const { movies, allGenre } = await fetchApi();
  console.log("Genre", allGenre);

  const random = Math.floor(Math.random() * movies.length) + 1;
  return (
    <div>
      <AnimateMovie movie={movies[random]} />
      <section
        id="wrapper-card"
        className="w-[90%] mx-auto my-6 flex flex-col gap-6"
      >
        {allGenre.map((genre) => (
          <>
            <div className="section-genre-card text-white flex flex-col gap-3">
              <div className="title-genre text-xl font-black">{genre}</div>
              <div className="grid gap-4 grid-flow-col auto-cols-[350px] overflow-x-auto">
                {filterMovie(movies, genre).map((movie) => (
                  <Link
                    href={"/movies/detail/" + movie.movie_id}
                    className="transition-all group"
                  >
                    <div className="inline-block overflow-hidden">
                      <Image
                        alt={movie.movie_title}
                        height="1000"
                        width="1000"
                        src={
                          movie?.image && movie.image !== undefined
                            ? movie.image
                            : "/img.jpg"
                        }
                        className="h-[250px] object-cover group-hover:scale-125 transition-all duration-300"
                      />
                    </div>
                    <div className="py-2 flex flex-col gap-2">
                      <p className="text-[18px] font-medium">
                        {movie.movie_title.length < 40
                          ? movie.movie_title
                          : movie.movie_title.substring(0, 35) + "..."}
                      </p>
                      <p className="line-clamp-2 text-sm">
                        {movie.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        ))}
      </section>
    </div>
  );
};

export default MoviePage;
