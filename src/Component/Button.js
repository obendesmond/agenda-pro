import React from "react";
import Spinner from "react-spinkit";

export default function Button({
  text,
  onClick,
  upload,
  uploadInputRef,
  Icon,
}) {
  return (
    <div
      onClick={onClick}
      className="bg-blueColor flex flex-row gap-5 rounded-full px-5 py-2 items-center justify-between cursor-pointer drop-shadow-md"
    >
      <p className={`text-white ${!upload ? "p-2" : ""}`}>{text}</p>

      {Icon && (
        <span className="bg-white p-2 rounded-full drop-shadow-md">
          <Icon size="25" />
        </span>
      )}
      {/* <Spinner name="circle" color="white" /> */}

      {upload && uploadInputRef && (
        <input ref={uploadInputRef} type="file" style={{ display: "none" }} />
      )}
    </div>
  );
}
