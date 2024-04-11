import { Movie } from "@/service/movieService";
import Link from "next/link";

const Description = ({ movie }: { movie?: Movie }) => {
  return (
    <div className="w-[90%] flex justify-start z-30 absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] ">
      <div className="text-black w-[400px] text-start flex flex-col gap-3">
        <div className="text-start">
          <div className="flex flex-col items-start justify-start gap-2 text-white">
            <p className=" font-semibold text-[44px]">
              {movie?.movie_title ? movie.movie_title : "Rg ng ot mean title"}
            </p>
            <div className="text-xs flex gap-2 items-center">
              <p className="flex gap-1 items-center">
                <span className="bg-yellow-400 rounded-sm py-1 px-3 text-[#393939]  font-semibold">
                  Rate
                </span>
                <span>{movie?.rating ? movie.rating : "NA"}</span>
              </p>
              <span className="w-[1px] bg-white h-[10px]"></span>
              <span>{movie?.released_year ? movie.released_year : "NA"}</span>
              <span className="w-[1px] h-[10px] !bg-white"></span>
              <span>{movie?.genre ? movie.genre : "NA"}</span>
            </div>
            <p className="text-start line-clamp-4 text-white font-light">
              {movie?.description ? movie.description : "NA"}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link
            href={"/movies/detail/" + movie?.movie_id}
            className="text-white font-semibold border rounded-sm py-2 px-4 flex items-center"
          >
            Watch Trailer
          </Link>
          <Link
            href={"/movies/detail/" + movie?.movie_id}
            className="text-black font-semibold bg-yellow-400 rounded-sm py-2 px-4 flex items-center"
          >
            Watch Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Description;
