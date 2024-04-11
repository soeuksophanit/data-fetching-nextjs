"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = {
  title: string;
  value: string;
  link: string;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
}) => {
  const path = usePathname();
  console.log(path);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
  };

  return (
    <>
      <motion.div
        initial={{
          y: -100,
        }}
        animate={{
          y: 0,
          transition: {
            type: "spring",
            delay: 0.2,
          },
        }}
        className={cn(
          "flex flex-row items-center bg-white  backdrop-blur-sm rounded-full p-1 justify-start relative overflow-auto sm:overflow-visible no-visible-scrollbar w-fit",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <Link
            href={tab.link}
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            className={cn("relative px-4 py-2 rounded-full ", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {path === tab.link && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  `absolute inset-0 bg-[#010F1D] rounded-full `,
                  activeTabClassName
                )}
              />
            )}

            <span
              className={`relative block font-medium ${
                path === tab.link ? "text-white" : ""
              }`}
            >
              {tab.title}
            </span>
          </Link>
        ))}
      </motion.div>
    </>
  );
};
