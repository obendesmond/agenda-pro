import React from "react";
import Container from "../Container";
import AgendaForm from "./AgendaForm";
import AgendaList from "./AgendaList";

export default function AgendaSection() {
  return (
    <div className="bg-greyColor w-full h-[100vh]">
      <Container className="flex flex-col px-5 md:flex-row justify-center gap-20">
        <AgendaForm />
        <AgendaList />
      </Container>
    </div>
  );
}
