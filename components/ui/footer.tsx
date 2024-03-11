"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    pathname !== "/sign-in" &&
    pathname !== "/sign-up" && (
      <footer className="mx-auto mt-8 rounded-t-2xl bg-neutral-800 py-6 text-center text-white lg:w-[1000px] xl:w-[1180px] 2xl:w-[1240px]">
        <p>2024 Flowcart. All rights reserved.</p>
      </footer>
    )
  );
};

export default Footer;
