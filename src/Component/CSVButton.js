import React, { useRef, useState } from "react";
import Papa from "papaparse";
import { MdCloudUpload } from "react-icons/md";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addAgenda, deleteAllAgenda } from "../Store/actions/agendaActions";

const ALLOWED_EXTENSIONS = ["csv"];

export default function CSVButton({ icon }) {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const fileUploadRef = useRef(null);

  // handle file upload
  const handleFileChange = e => {
    fileUploadRef.current.click(); // triger click
    const input_file = e.target.files[0];
    // check if user chosed a file
    if (input_file) {
      const fileExt = input_file.type.split("/")[1];
      if (!ALLOWED_EXTENSIONS.includes(fileExt))
        alert("Wrong file extension, choose csv");
      else setFile(input_file);
    }
  };

  const handleFileUpload = () => {
    // check if file is uploaded first
    if (!file) return alert("Enter a valid file");

    // initialize file reader
    const reader = new FileReader();

    // Event listener on reader when the file loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      dispatch(deleteAllAgenda()); // empty previous agenda List
      // recursively add agenda
      parsedData.forEach(x => {
        dispatch(addAgenda(x));
      });
      // reset file
      setFile(null);
    };
    reader.readAsText(file);
  };

  return (
    <Button
      text={file ? `Upload "${file.name}" to agenda` : "Choose CSV File"}
      onClick={file ? handleFileUpload : handleFileChange}
      color={file ? "bg-green-500" : null}
      Icon={icon ? MdCloudUpload : null}
      upload
      uploadInputRef={fileUploadRef}
    />
  );
}
