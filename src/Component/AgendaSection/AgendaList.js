import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAgendaList } from "../../Store/actions/agendaActions";

export default function AgendaList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAgendaList()); // get agenda list
  });

  return <div className="flex-[0.4] w-full">AgendaList</div>;
}
