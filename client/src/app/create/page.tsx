"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Create = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:3000/image/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("File uploaded successfully:", data);
        // Redirect or update the UI as required
        router.push("/success");
      } else {
        console.error("File upload failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <div className="w-full mx-40 p-6 bg-white rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Create an NFT</h1>
        <p className="text-gray-400 mb-8">
          Once your item is minted you will not be able to change any of its
          information.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-6"
        >
          {/* Left Section */}
          <label
            htmlFor="file-upload"
            className="flex-1 mr-20 border-dashed border-2 border-gray-600 rounded-lg p-6 flex items-center justify-center flex-col text-center cursor-pointer"
          >
            <div className="text-gray-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 12l8-8m0 0l8 8m-8-8v16"
                />
              </svg>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              // htmlFor="file-upload"
              className="text-gray-400 cursor-pointer"
            >
              Drag and drop media or{" "}
              <span className="text-blue-500">Browse files</span>
            </label>
            <p className="text-xs text-gray-600 mt-2">
              Max size: 50MB <br />
              JPG, PNG, GIF, SVG, MP4
            </p>
          </label>

          {/* Right Section */}
          <div className="flex-1 ml-20">
            {/* Collection */}
            <div className="mb-4">
              <label
                htmlFor="collection"
                className="block text-sm font-medium mb-2"
              >
                Collection *
              </label>
              <button className="w-full p-4 rounded-lg border border-gray-700 text-gray-400 text-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Create a new collection
              </button>
              <p className="text-xs text-gray-600 mt-2">
                Not all collections are eligible.{" "}
                <a href="#" className="text-blue-500">
                  Learn more
                </a>
              </p>
            </div>

            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-lg border border-gray-700 text-white placeholder-gray-600"
                placeholder="Name your NFT"
              />
            </div>

            {/* Supply */}
            <div className="mb-4">
              <label
                htmlFor="supply"
                className="block text-sm font-medium mb-2"
              >
                Supply *
              </label>
              <input
                type="number"
                id="supply"
                className="w-full p-3 rounded-lg border border-gray-700 text-white placeholder-gray-600"
                placeholder="1"
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                className="w-full p-3 rounded-lg border border-gray-700 text-white placeholder-gray-600"
                placeholder="Enter a description"
                rows={4}
              ></textarea>
            </div>

            {/* Create Button */}
            <button
              type="submit"
              className="w-full p-4 bg-blue-600 rounded-lg text-white font-bold hover:bg-blue-700 transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
