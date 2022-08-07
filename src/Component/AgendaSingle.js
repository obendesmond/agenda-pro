import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { MdModeEditOutline } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { deleteAgenda, updateAgenda } from "../Store/actions/agendaActions";
import Icon from "./Icon";

const AgendaSingle = forwardRef(({ agenda }, ref) => {
  const dispatch = useDispatch();
  const { id, time, subject, location, description } = agenda;

  return (
    <div
      ref={ref}
      className="w-full mb-5 border-l-[15px] border-blueColor bg-white p-5 rounded-2xl flex flex-col gap-2"
    >
      <div className="flex flex-row items-center justify-between">
        <p className="text-xl text-black font-bold">{subject}</p>
        <Icon
          Icon={MdModeEditOutline}
          onClick={() => dispatch(updateAgenda(id))}
        />
      </div>
      <div className=" w-[90%]">
        <p className=" text-gray-600">{description}</p>
      </div>
      <div className="flex flex-row justify-between items-end">
        <div>
          <p className=" text-gray-600 text-[12px]">{time}</p>
          <p className=" text-gray-600 text-[10px]">{location}</p>
        </div>
        <Icon Icon={IoMdTrash} onClick={() => dispatch(deleteAgenda(id))} />
      </div>
    </div>
  );
});

export default AgendaSingle;
