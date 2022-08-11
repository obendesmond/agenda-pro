import React from "react";
import Spinner from "react-spinkit";
import CircularIcon from "./CircularIcon";

export default function Button({
  text,
  onClick,
  upload,
  uploadInputRef,
  Icon,
  color,
}) {
  return (
    <div
      onClick={onClick}
      className={`${
        color || "bg-blueColor"
      } flex flex-row gap-5 rounded-full px-5 py-2 items-center justify-between cursor-pointer drop-shadow-md`}
    >
      <p
        className={`text-white ${!upload ? "p-2" : ""} ${
          !Icon && "text-center"
        }`}
      >
        {text}
      </p>

      {Icon && <CircularIcon Icon={Icon} />}
      {/* <Spinner name="circle" color="white" /> */}

      {upload && uploadInputRef && (
        <input
          ref={uploadInputRef}
          onChange={onClick}
          type="file"
          style={{ display: "none" }}
        />
      )}
    </div>
  );
}
