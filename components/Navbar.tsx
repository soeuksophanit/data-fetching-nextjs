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
    <div className="relative flex flex-col   w-fit  items-center justify-between">
      <Tabs tabs={tabs} />
    </div>
  );
}
