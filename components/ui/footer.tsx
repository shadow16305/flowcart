"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    pathname !== "/sign-in" &&
    pathname !== "/sign-up" && (
      <footer className="mx-auto mt-8 pb-2 text-center text-black lg:w-[1000px] xl:w-[1180px] 2xl:w-[1240px]">
        <p>2024 Flowcart. All rights reserved.</p>
      </footer>
    )
  );
};

export default Footer;
