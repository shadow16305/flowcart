import clsx from "clsx";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <section
      className={clsx(
        "mx-auto lg:max-w-[1000px] xl:max-w-[1180px] 2xl:max-w-[1240px]",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Container;
