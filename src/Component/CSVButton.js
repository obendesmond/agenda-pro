import React, { useRef } from "react";
import Button from "./Button";
import { MdCloudUpload } from "react-icons/md";

export default function CSVButton({ icon }) {
  const fileUploadRef = useRef(null);
  // handle file upload
  const handleFileUpload = () => {
    fileUploadRef.current.click();
  };
  return (
    <Button
      text="Choose CSV File"
      onClick={handleFileUpload}
      Icon={icon ? MdCloudUpload : null}
      upload
      uploadInputRef={fileUploadRef}
    />
  );
}
