import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`mx-auto max-w-4xl w-full bg-black ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};
