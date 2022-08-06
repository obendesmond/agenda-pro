import React, { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";
import { useDispatch, useSelector } from "react-redux";
import { addAgenda } from "../../Store/actions/agendaActions";

export default function AgendaForm() {
  const dispatch = useDispatch();
  const { currentAgendaEdit } = useSelector(state => state.agenda);
  const [time, setTime] = useState("");
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentAgendaEdit.id) {
      const { id, time, subject, location, description } = currentAgendaEdit;
      setTime(time);
      setSubject(subject);
      setLocation(location);
      setDescription(description);
    }
  }, [currentAgendaEdit]);

  // handle form submittion
  const handleOnClick = () => {
    const agenda = { time, subject, location, description };
    if (!time || !subject) return alert("Enter time and subject");
    if (currentAgendaEdit.id) agenda.id = currentAgendaEdit.id; // add id if it's to edit
    dispatch(addAgenda(agenda));
    reset();
  };

  const handleFileUpload = () => {};

  //   reset form
  const reset = () => {
    setTime("");
    setSubject("");
    setLocation("");
    setDescription("");
  };

  return (
    <div className="w-full flex-[0.4]">
      <div className="top-20 sticky bg-white p-10 flex flex-col gap-5 rounded-md">
        <Input
          text={subject}
          setText={setSubject}
          placeholder="Enter Subject *: Breakfast with Desmond"
        />
        <Input
          text={time}
          setText={setTime}
          placeholder="Enter Time *: 8:30 am - 9:45 am"
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
        <p className="text-center">or</p>
        <Button onClick={handleFileUpload} text="Upload Agenda" />
      </div>
    </div>
  );
}
