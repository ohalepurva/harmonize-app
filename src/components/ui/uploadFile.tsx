"use client";

import React, { useRef, useState } from "react";
import { Upload } from "lucide-react";

const UploadFile = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        <Upload />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        className="hidden"
      />
      {fileName && (
        <span className="text-sm text-gray-600">Selected: {fileName}</span>
      )}
    </div>
  );
};

export default UploadFile;
