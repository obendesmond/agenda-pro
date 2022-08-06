import React from "react";
import AgendaForm from "./AgendaForm";
import Agenda from "./Agenda";

export default function AgendaSection() {
  return (
    <div className="flex flex-col md:flex-row border">
      <AgendaForm />
      <Agenda />
    </div>
  );
}
