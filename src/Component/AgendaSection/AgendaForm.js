import React, { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";
import { useDispatch, useSelector } from "react-redux";
import { addAgenda } from "../../Store/actions/agendaActions";
import bgImage from "../../Assets/agenda_bg.jpeg";
import { MdAdd } from "react-icons/md";
import CSVButton from "../CSVButton";

export default function AgendaForm() {
  const dispatch = useDispatch();
  const { currentAgendaEdit } = useSelector(state => state.agenda);
  const [time, setTime] = useState("");
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentAgendaEdit.id) {
      const { time, subject, location, description } = currentAgendaEdit;
      setTime(time);
      setSubject(subject);
      setLocation(location);
      setDescription(description);
    }
  }, [currentAgendaEdit]);

  // handle form submission
  const handleOnClick = () => {
    const agenda = { time, subject, location, description };
    if (!time || !subject) return alert("Atleast enter a subject and time");
    if (currentAgendaEdit.id) agenda.id = currentAgendaEdit.id; // add id if it's to edit
    dispatch(addAgenda(agenda));
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
    <div
      className="w-full h-[100vh] flex-[0.5] top-0 sticky z-50"
      style={{
        background: `url(${bgImage})`,
        backgroundPosition: "top right",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full gap-10">
        <p className="text-white text-4xl">Keep Track Of Your Day</p>
        <div className=" bg-white  p-10 w-[412px] h-[551px] flex flex-col gap-5 rounded-2xl">
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
          <Button onClick={handleOnClick} text="Add Agenda" Icon={MdAdd} />
          <p className="text-center">or</p>
          <CSVButton icon />
        </div>
      </div>
    </div>
  );
}
