import React from "react";

export default function Header() {
  return (
    <div className="flex flex-row justify-between py-5 z-40 sticky top-0 px-10 bg-blueColor text-white drop-shadow-md">
      <p>Agenda-Pro</p>
      <button>Login</button>
    </div>
  );
}
