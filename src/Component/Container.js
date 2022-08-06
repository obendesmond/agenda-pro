import React from "react";

export default function Container({ children, className }) {
  return (
    <div className={`container mx-auto pt-10 ${className}`}>{children}</div>
  );
}
