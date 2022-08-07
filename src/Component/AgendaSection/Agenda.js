import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import { IoMdTrash } from "react-icons/io";
import { getAgendaList } from "../../Store/actions/agendaActions";
import AgendaSingle from "../AgendaSingle";
import Icon from "../Icon";
import Button from "../Button";

export default function Agenda() {
  const fileUploadRef = useRef(null);
  const dispatch = useDispatch();
  const { agendaList } = useSelector(state => state.agenda);

  useEffect(() => {
    dispatch(getAgendaList()); // get agenda list
  }, [dispatch]);

  // handle file upload
  const handleFileUpload = () => {
    fileUploadRef.current.click();
  };

  return (
    <div className="flex-[0.5] w-full bg-greyColor">
      {/* agenda header */}
      <div className="bg-white top-0 sticky z-50 drop-shadow-md py-3 w-full flex flex-row justify-end gap-2 pr-2">
        <Icon
          Icon={IoMdTrash}
          onClick={() => alert("deleting all...")}
          size={25}
        />
        <Button
          text="Choose CSV File"
          upload
          onClick={handleFileUpload}
          uploadInputRef={fileUploadRef}
        />
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
