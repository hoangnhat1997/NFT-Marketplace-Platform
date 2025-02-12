"use client";

import { useState } from "react";
import Image from "next/image";

export default function Collections() {
  const [blockchain, setBlockchain] = useState("Ethereum");

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const src = URL.createObjectURL(file);
      setImageSrc(src);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-2xl font-bold">
          First, you’ll need to create a collection for your NFT
        </h1>
        <p className="text-sm">
          You’ll need to deploy an ERC-1155 contract on the blockchain to create
          a collection for your NFT.{" "}
          <a href="#" className="text-blue-400 hover:underline">
            What is a contract?
          </a>
        </p>
        <label className="text-black text-md mb-2 ">Logo image *</label>
        <label
          htmlFor="file-upload-collection"
          className="p-6 border border-gray-300 rounded-xl grid grid-cols-3 cursor-pointer"
        >
          <div className="col-span-1 flex items-center justify-center border-dashed border border-gray-600 rounded-lg mx-12">
            <div className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto"
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
          </div>
          <div className="col-span-2 flex flex-col text-gray-400">
            <p className="text-black font-bold text-xs">
              Drag and drop or click to upload
            </p>
            <p className="text-gray-500 text-xs py-2">
              You may change this after deploying your contract.
            </p>
            <p className="text-gray-500 text-xs">
              Recommended size: 350 x 350. File types: JPG, PNG, SVG, or GIF
            </p>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload-collection"
          />
        </label>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <label
              htmlFor="collection"
              className="block text-sm font-medium mb-2"
            >
              Contract Name *
            </label>
            <button className="w-full p-4 rounded-lg border border-gray-700 text-gray-400 text-left">
              My Collection Name
            </button>
          </div>

          <div className="col-span-1">
            <label
              htmlFor="collection"
              className="block text-sm font-medium mb-2"
            >
              Token symbol *
            </label>
            <button className="w-full p-4 rounded-lg border border-gray-700 text-gray-400 text-left">
              Create a new collection
            </button>
          </div>
        </div>

        <div>
          <label className="text-gray-300 text-sm">Blockchain</label>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <button
              className={`p-4 rounded-lg ${
                blockchain === "Ethereum"
                  ? "border-black border-2"
                  : "border-gray-400 border"
              } bg-white flex flex-col items-start`}
              onClick={() => setBlockchain("Ethereum")}
            >
              <Image
                src={"/images/ethereum-logo.png"}
                width={40}
                height={40}
                alt="Picture"
              />
              <p className="text-black font-bold">Ethereum</p>
              <p className="text-xs text-gray-400 font-bold">Most popular</p>
              <p className="text-xs text-gray-500">
                Estimated cost to deploy contract:
              </p>
            </button>

            <button
              className={`p-4 rounded-lg  ${
                blockchain === "Base"
                  ? "border-black border-2"
                  : "border-gray-400 border"
              } bg-white flex flex-col items-start`}
              onClick={() => setBlockchain("Base")}
            >
              <p className="text-black font-bold">Base</p>
              <p className="text-xs text-gray-400 font-bold">Cheaper</p>
              <p className="text-xs text-gray-500">
                Estimated cost to deploy contract: $0.00
              </p>
            </button>

            <button className="p-4 rounded-lg border border-black bg-white text-gray-400 text-center">
              See more options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
