import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAgendaList } from "../../Store/actions/agendaActions";
import AgendaSingle from "../AgendaSingle";
import FlipMove from "react-flip-move";

export default function Agenda() {
  const dispatch = useDispatch();
  const { agendaList } = useSelector(state => state.agenda);

  useEffect(() => {
    dispatch(getAgendaList()); // get agenda list
  }, [dispatch]);

  return (
    <div className="flex-[0.5] w-full bg-greyColor">
      <div className="bg-white top-0 sticky z-50 drop-shadow-md py-7 w-full"></div>
      <div className="container mx-auto p-10 ">
        <p className="text-4xl mb-5">All My Agenda</p>
        <FlipMove>
          {agendaList?.map(agenda => (
            <AgendaSingle key={agenda.id} agenda={agenda} />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}
