import React from "react";

export default function CircularIcon({ Icon, onClick }) {
  return (
    <span
      onClick={onClick}
      className="bg-white p-2 rounded-full cursor-pointer hover:drop-shadow-md"
    >
      <Icon size="25" />
    </span>
  );
}
