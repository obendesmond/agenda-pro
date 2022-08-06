import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";

export default function AgendaForm() {
  const [time, setTime] = useState("");
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-white rounded-md w-full flex-[0.6] flex flex-col p-10 gap-5">
      <Input />
      <Input />
      <Input />
      <TextArea />
      <Button text="Add Agenda" />
    </div>
  );
}
