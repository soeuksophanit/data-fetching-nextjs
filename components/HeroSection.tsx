// "use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Movie, fetchApi } from "@/service/movieService";

export async function Hero() {
  const { movies } = await fetchApi();
  return <HeroParallax movies={movies} />;
}
