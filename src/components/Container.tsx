import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`
        w-full
        max-w-7xl
        mx-auto
        px-5 sm:px-9 md:px-12
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
