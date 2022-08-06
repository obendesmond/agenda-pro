import React from "react";

export default function AgendaSingle({ agenda }) {
  const { time, subject, description } = agenda;

  return (
    <div className="w-full mb-5 border-r-8 border-blueColor bg-white p-5 rounded-lg flex flex-col gap-5 text-left pr-10">
      <div>
        <p className="text-xl text-black font-bold">
          {subject || "default subject"}
        </p>
        <p>{time || "111am - 222 am"}</p>
      </div>
      <div>
        <p className=" text-gray-600">Description</p>
        <p>{description || "default desc"}</p>
      </div>
    </div>
  );
}
