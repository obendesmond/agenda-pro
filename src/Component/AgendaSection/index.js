import React from "react";
import Container from "../Container";
import AgendaForm from "./AgendaForm";
import Agenda from "./Agenda";

export default function AgendaSection() {
  return (
    <div className="bg-greyColor py-10 w-full min-h-[100vh]">
      <Container className="flex flex-col px-5 md:flex-row gap-20">
        <AgendaForm />
        <Agenda />
      </Container>
    </div>
  );
}
