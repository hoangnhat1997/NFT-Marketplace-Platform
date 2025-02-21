/* eslint-disable @next/next/no-img-element */
// components/ImageUpload.js
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Create a preview of the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully!");
      } else {
        alert("File upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file.");
    }
  };

  return (
    <div className="relative">
      <div
        className="absolute right-[50px] bottom-[20px] bg-white rounded-md justify-center items-center flex p-2 cursor-pointer"
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        <FontAwesomeIcon className="mx-2" color="black" icon={faCamera} />
        <p className="text-black font-semibold">Edit cover photo</p>
      </div>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {preview && (
        <div className="mt-4">
          <img
            src={typeof preview === "string" ? preview : undefined}
            alt="Selected Image"
            className="w-48 h-48 object-cover rounded-md"
          />
          <button
            onClick={handleSubmit}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Upload
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
