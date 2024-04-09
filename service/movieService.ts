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
  const response = await fetch("https://movie-api-295p.vercel.app/api");
  const { payload }: ResponseApi<Movie[]> = await response.json();
  return payload;
};
