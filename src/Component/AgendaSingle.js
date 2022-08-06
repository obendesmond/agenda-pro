import React, { forwardRef } from "react";
import { BiMessageSquareEdit } from "react-icons/bi";
import { IoMdTrash } from "react-icons/io";
import { deleteAgenda } from "../Store/actions/agendaActions";
import Icon from "./Icon";
import { useDispatch } from "react-redux";

const AgendaSingle = forwardRef(({ agenda }, ref) => {
  const dispatch = useDispatch();
  const { id, time, subject, description } = agenda;

  return (
    <div
      ref={ref}
      className="w-full mb-5 border-r-8 border-blueColor bg-white p-5 rounded-lg flex flex-col gap-5 text-left pr-10"
    >
      <div>
        <p className="text-xl text-black font-bold">
          {subject || "default subject"}
        </p>
        <p>{time || "111am - 222 am"}</p>
      </div>
      <div className="flex flex-row justify-between items-end">
        <div>
          <p className=" text-gray-600">Description</p>
          <p>{description || "default desc"}</p>
        </div>
        <div className="flex flex-row gap-5">
          <Icon Icon={IoMdTrash} onClick={() => dispatch(deleteAgenda(id))} />
          <Icon Icon={BiMessageSquareEdit} />
        </div>
      </div>
    </div>
  );
});

export default AgendaSingle;
