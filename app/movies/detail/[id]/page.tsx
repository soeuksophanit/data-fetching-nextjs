import { fetchCurrentMovie } from "@/service/movieService";
import Image from "next/image";

interface Props {
  params: { id: string };
}

const DetailPage = async ({ params: { id } }: Props) => {
  const currentMovie = await fetchCurrentMovie(id);
  return (
    <section className="grid h-[570px] w-[90%] mx-auto gap-6 mt-[124px] grid-cols-[1fr_400px] max-[1000px]:grid-cols-1">
      <div>
        <Image
          alt={"picture of movie"}
          height="1000"
          width="1000"
          priority
          src={
            currentMovie?.image && currentMovie.image !== undefined
              ? currentMovie.image
              : "/img.jpg"
          }
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-white flex flex-col gap-10">
        <div>
          <p className="font-black text-gray-200 text-xl">
            {currentMovie?.director != undefined
              ? currentMovie.director
              : "Director Teacher ot dak name oy XD"}
          </p>
          <p className="text-[12px]">
            {currentMovie?.runtime ? currentMovie.runtime : "NA"} minutes
          </p>
          <p className="italic text-[12px]">{currentMovie?.genre}</p>
          <div className="flex gap-1">
            {Array.from({ length: Math.round(currentMovie?.rating) }).map(
              (star) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="w-[14px]"
                >
                  <path
                    fill="#FFD43B"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  />
                </svg>
              )
            )}
          </div>
        </div>
        <div>
          <p className="font-black text-gray-200 text-xl">
            {currentMovie?.movie_title
              ? currentMovie.movie_title
              : "Rg Ng ot dg dak name ey"}
          </p>
          <p className="text-[14px] leading-[1.5] text-gray-300">
            {currentMovie?.description
              ? currentMovie.description
              : "Description dak ey k ban"}
          </p>
        </div>
        <p className="text-[14px] leading-[1.5] text-gray-300">
          {currentMovie?.posted_at?.toString()
            ? new Date(String(currentMovie?.posted_at)).toDateString()
            : "Release year : jam sur cher "}
        </p>
      </div>
    </section>
  );
};

export default DetailPage;
