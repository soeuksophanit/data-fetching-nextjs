// "use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Movie, fetchApi } from "@/service/movieService";

export async function Hero() {
  const heroMovie = await fetchApi();
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Blade Runner",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/t6jVlbPMtZOJoAOfeoR4yQmnjXM.jpg",
  },
  {
    title: "Kong x Godzilla",
    link: "https://cursor.so",
    thumbnail:
      "https://image.tmdb.org/t/p/original/xf1rEQRi9pZxoN8HfggVnhjOaBb.jpg",
  },
  {
    title: "Parasyte",
    link: "https://userogue.com",
    thumbnail:
      "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/o25js6DbhDa9KtMKUiGOEPVSnaP.jpg",
  },

  {
    title: "Dune",
    link: "https://editorially.org",
    thumbnail:
      "https://media.themoviedb.org/t/p/w440_and_h660_face/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  },
  {
    title: "Barbie",
    link: "https://editrix.ai",
    thumbnail:
      "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/tTfnd2VrlaZJSBD9HUbtSF3CqPJ.jpg",
  },
  {
    title: "Spider Man",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/kGWpZewzInbzTuaIHcy0bFgzXuM.jpg",
  },

  {
    title: "Barbie",
    link: "https://editrix.ai",
    thumbnail:
      "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/tTfnd2VrlaZJSBD9HUbtSF3CqPJ.jpg",
  },
  {
    title: "Spider Man",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/kGWpZewzInbzTuaIHcy0bFgzXuM.jpg",
  },
  {
    title: "Barbie",
    link: "https://editrix.ai",
    thumbnail:
      "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/tTfnd2VrlaZJSBD9HUbtSF3CqPJ.jpg",
  },
  {
    title: "Spider Man",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/kGWpZewzInbzTuaIHcy0bFgzXuM.jpg",
  },
  {
    title: "Barbie",
    link: "https://editrix.ai",
    thumbnail:
      "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/tTfnd2VrlaZJSBD9HUbtSF3CqPJ.jpg",
  },
  {
    title: "Spider Man",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/kGWpZewzInbzTuaIHcy0bFgzXuM.jpg",
  },
  {
    title: "Barbie",
    link: "https://editrix.ai",
    thumbnail:
      "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/tTfnd2VrlaZJSBD9HUbtSF3CqPJ.jpg",
  },
  {
    title: "Spider Man",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/kGWpZewzInbzTuaIHcy0bFgzXuM.jpg",
  },
  {
    title: "Barbie",
    link: "https://editrix.ai",
    thumbnail:
      "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/tTfnd2VrlaZJSBD9HUbtSF3CqPJ.jpg",
  },
];
