export type ResponseApi<T> = {
  status: number;
  message: string;
  payload: T;
};

export type Movie = {
  movie_id: string;
  movie_title: string;
  released_year: number;
  director: string;
  genre: string;
  description: string;
  rating: number;
  runtime: number;
  posted_at?: string;
  image: string;
};

export const fetchApi = async () => {
  const response = await fetch(
    "https://movie-api-get-only-bmc3.vercel.app/api",
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const { payload: movies }: ResponseApi<Movie[]> = await response.json();
  const allGenre = Array.from(new Set(movies.map((movie) => movie.genre)));
  return { movies, allGenre };
};

export function filterMovie(movies: Movie[], genre: string) {
  return movies.filter(
    (movie) => movie.genre.toLocaleLowerCase() === genre.toLocaleLowerCase()
  );
}
