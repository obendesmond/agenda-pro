import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import { IoMdTrash } from "react-icons/io";
import { BsQuestionCircleFill } from "react-icons/bs";
import { BiHide } from "react-icons/bi";
import { MdCloudDownload } from "react-icons/md";
import {
  deleteAllAgenda,
  getAgendaList,
} from "../../Store/actions/agendaActions";
import AgendaSingle from "../AgendaSingle";
import Icon from "../Icon";
import CircularIcon from "../CircularIcon";
import { ExportToCsv } from "export-to-csv";

const options = {
  fieldSeparator: ",",
  quoteStrings: '"',
  decimalSeparator: ".",
  showLabels: true,
  showTitle: false,
  useTextFile: false,
  useBom: true,
  useKeysAsHeaders: true,
  filename: "my-agenda-pro",
  // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
};

export default function Agenda() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const { agendaList } = useSelector(state => state.agenda);
  const csvExporter = new ExportToCsv(options);

  useEffect(() => {
    dispatch(getAgendaList()); // get agenda list
  }, [dispatch]);

  const handleDeleteAll = () => {
    if (window.confirm("Are you sure you want to delete all agenda")) {
      dispatch(deleteAllAgenda());
    }
  };

  const handleDownloadCsv = () => {
    // loop through and take out id
    const agenda = agendaList.map(a => {
      delete a.id;
      return a;
    });
    csvExporter.generateCsv(agenda);
  };

  return (
    <div className="flex-[0.5] w-full bg-greyColor">
      {/* agenda header */}
      <div className="bg-white top-0 sticky z-50 drop-shadow-md py-3 w-full flex flex-row justify-end gap-2 pr-10">
        <Icon
          Icon={show ? BiHide : BsQuestionCircleFill}
          onClick={() => setShow(!show)}
          color={show ? "red" : "blue"}
          size={25}
        />
        <Icon Icon={IoMdTrash} onClick={() => handleDeleteAll()} size={25} />
        <CircularIcon onClick={handleDownloadCsv} Icon={MdCloudDownload} />
      </div>
      <div className="container mx-auto p-10 ">
        {show ? (
          <>
            <p className="text-4xl mb-5">Agenda-Pro Instructions</p>
            <ul>
              <li>
                Using the form, you can add an agenda by entering atleast a
                subject and time
              </li>
              <br />
              <li>You can delete all agenda with the trash icon above</li>
              <br />
              <li>
                Your csv should have the "subject", "time", "location" and
                "description" as columns, seperated by commas
              </li>{" "}
              <br />
              <li>
                Click the "Choose csv File" button and choose a ".csv" (comma
                seperated values) file
              </li>
              <br />
              <li>
                Then click the "Upload ... to agenda" green button to upload to
                agenda
              </li>
              <br />
              <li>All previous agenda will be completely replaced</li>
            </ul>
          </>
        ) : (
          <>
            <p className="text-4xl mb-5">
              {agendaList.length > 0 ? "All My Agenda" : "No Agenda, Add Some."}
            </p>
            <FlipMove>
              {agendaList?.map(agenda => (
                <AgendaSingle key={agenda.id} agenda={agenda} />
              ))}
            </FlipMove>
          </>
        )}
      </div>
    </div>
  );
}
