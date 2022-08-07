import React from "react";

export default function Icon({ Icon, size, onClick, className }) {
  return (
    Icon && (
      <div className="hover:bg-greyColor bg-transparent p-2 rounded-full cursor-pointer">
        <Icon size={size || 20} className={className} onClick={onClick} />
      </div>
    )
  );
}
