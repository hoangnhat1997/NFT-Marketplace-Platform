"use client";
import { useState } from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Profile = () => {
  const [file, setFile] = useState<string | null>(null);

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(URL.createObjectURL(selectedFile));

    const reader = new FileReader();

    handleSubmit(e);

    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setFile(reader.result);
      }
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
    <div className="w-screen h-screen relative bg-gray-100">
      <div className="relative top-0 w-full h-2/5 bg-gray-200 flex justify-center items-center">
        <Image
          src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2.png"
          layout="fill"
          objectFit="cover"
          alt="cover"
        />
        <div
          className="absolute right-[50px] bottom-[20px] cursor-pointer bg-white rounded-md justify-center items-center flex p-2 z-10"
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
      </div>

      <div className="absolute top-[270px] md:top-[200px] left-[30px] md:left-[70px] w-full flex">
        <div className="flex flex-col justify-center items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-200 flex justify-center items-center overflow-hidden">
            <Image
              src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2.png"
              width={200}
              height={200}
              alt="profile"
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="font-bold text-2xl mt-4 text-black">Alexander</p>
          <p className="text-gray-700">Software Engineer</p>
          <p className="text-gray-700">New York, NY</p>
          <p className="text-gray-700">Joined in 2027</p>
        </div>
        <div className="w-8 h-8 absolute rounded-full left-[100px] md:left-[140px] bottom-[125px] bg-gray-500 flex justify-center items-center">
          <FontAwesomeIcon className="mx-4" color="white" icon={faCamera} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
