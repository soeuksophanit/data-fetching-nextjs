"use client";

import { Tabs } from "@/components/ui/tabs";

export function Navbar() {
  const tabs = [
    {
      title: "Home",
      value: "Home",
      link: "/",
    },
    {
      title: "Movies",
      value: "Movies",
      link: "/movies",
    },

    {
      title: "About",
      value: "About",
      link: "/about",
    },
  ];

  return (
    <div className="relative b flex flex-col max-w-5xl mx-auto w-fit  items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}
