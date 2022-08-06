import React from "react";

export default function TextArea({ text, setText, placeholder }) {
  return (
    <textarea
      rows="4"
      className="border-myGrey border-2 py-2 px-3 rounded-md w-full"
      placeholder={placeholder || "Enter Text"}
      value={text}
      onChange={e => setText(e.target.value)}
    ></textarea>
  );
}
