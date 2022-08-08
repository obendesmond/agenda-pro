import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import { IoMdTrash } from "react-icons/io";
import {
  deleteAllAgenda,
  getAgendaList,
} from "../../Store/actions/agendaActions";
import AgendaSingle from "../AgendaSingle";
import Icon from "../Icon";
import CSVButton from "../CSVButton";

export default function Agenda() {
  const dispatch = useDispatch();
  const { agendaList } = useSelector(state => state.agenda);

  useEffect(() => {
    dispatch(getAgendaList()); // get agenda list
  }, [dispatch]);

  const handleDeleteAll = () => {
    if (window.confirm("Are you sure you want to delete all agenda")) {
      dispatch(deleteAllAgenda());
    }
  };

  return (
    <div className="flex-[0.5] w-full bg-greyColor">
      {/* agenda header */}
      <div className="bg-white top-0 sticky z-50 drop-shadow-md py-3 w-full flex flex-row justify-end gap-2 pr-2">
        <Icon Icon={IoMdTrash} onClick={() => handleDeleteAll()} size={25} />
        <CSVButton />
      </div>
      <div className="container mx-auto p-10 ">
        <p className="text-4xl mb-5">
          {agendaList.length > 0 ? "All My Agenda" : "No Agenda, Add Some."}
        </p>
        <FlipMove>
          {agendaList?.map(agenda => (
            <AgendaSingle key={agenda.id} agenda={agenda} />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}
