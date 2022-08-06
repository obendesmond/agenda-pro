import React from "react";
import Spinner from "react-spinkit";

export default function Button({ text, className }) {
  return (
    <div className="bg-blueColor w-full rounded-md text-white p-3 cursor-pointer text-center flex flex-row justify-center gap-20">
      {text}
      <Spinner name="circle" color="white" />
    </div>
  );
}
