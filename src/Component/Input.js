import React from "react";

export default function Input({ text, setText, placeholder }) {
  return (
    <input
      value={text}
      onChange={e => setText(e.target.value)}
      type="text"
      className="border-myGrey border-2 py-2 px-3 rounded-lg w-full"
      placeholder={placeholder || "Enter text"}
    />
  );
}
