import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";

export default function AgendaForm() {
  const [time, setTime] = useState("");
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  // handle form submittion
  const handleOnClick = () => {
    if (!time || !subject) return console.log("Enter time and subject");
    console.log({ time, subject, location, description });
    reset();
  };

  //   reset form
  const reset = () => {
    setTime("");
    setSubject("");
    setLocation("");
    setDescription("");
  };

  return (
    <div className="bg-white rounded-md w-full flex-[0.6] flex flex-col p-10 gap-5">
      <Input
        text={time}
        setText={setTime}
        placeholder="Enter Time *: 8:30 am"
      />
      <Input
        text={subject}
        setText={setSubject}
        placeholder="Enter Subject *: Breakfast with Desmond"
      />
      <Input
        text={location}
        setText={setLocation}
        placeholder="Enter Location (Optional): Omni Caffe"
      />
      <TextArea
        text={description}
        setText={setDescription}
        placeholder="Enter Description (optional)"
      />
      <Button onClick={handleOnClick} text="Add Agenda" />
    </div>
  );
}
