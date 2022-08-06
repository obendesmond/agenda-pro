import React from "react";

export default function Icon({ Icon, className, onClick }) {
  return (
    Icon && (
      <Icon
        size={20}
        className={`text-blueColor cursor-pointer ${className}`}
        onClick={onClick}
      />
    )
  );
}
