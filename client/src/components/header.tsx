"use client";
import {
  faUserTie,
  faWallet,
  faHouse,
  faMagnifyingGlass,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { ethers } from "ethers";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CONTRACT_ABI } from "../utils/address";
import { useState } from "react";
import ConnectModal from "./connectModal";

const Header = () => {
  const { ethereum }: any = typeof window !== "undefined" ? window : {};
  const { providers, utils }: any = ethers;
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
    console.log("open modal");
  };

  async function connect() {
    const web3Provider = new ethers.BrowserProvider(ethereum);

    if (!web3Provider) {
      return;
    }
    const signer = await web3Provider.getSigner();
    const contract = new ethers.Contract(
      process.env.CONTRACT_ADDRESS!,
      CONTRACT_ABI,
      signer
    );
  }
  return (
    <div className="px-40 py-8 bg-gray-100 flex justify-between items-center">
      <div className="flex flex-row justify-between items-center text-black">
        <div className="flex flex-row justify-center items-center">
          <FontAwesomeIcon color="black" icon={faHouse} />
          <p className="mr-0 ml-4">Meta Market</p>
        </div>
        <div className=" w-1 mx-4 h-6 bg-gray-200 rounded-xl"></div>
        <p className="mx-4">Explore</p>
        <p className="mx-4">Discover</p>
        <p className="mx-4">Categories</p>
        <div className="w-1 mx-4 h-6 bg-gray-200 rounded-xl"></div>
        <FontAwesomeIcon
          className="mx-4"
          color="black"
          icon={faMagnifyingGlass}
        />
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-row bg-gray-200 hover:bg-blue-400 hover:text-blue-900  justify-center items-center px-2 rounded-2xl mr-4">
          <FontAwesomeIcon color="black" icon={faWallet} />
          <button
            onClick={() => {}}
            className="py-2 px-4 transition duration-200 ease-in-out transform hover:scale text-black font-weight-700"
          >
            Wallet
          </button>
        </div>
        <div className=" w-1 h-6 bg-gray-200 rounded-xl"></div>
        <div className="flex flex-row justify-center items-center px-2">
          <div className="h-12 w-12  flex justify-center items-center p-2">
            <FontAwesomeIcon color="black" icon={faUserTie} />
          </div>
          <p className="ml-2 text-black font-weight-700">Alexander</p>
        </div>
        <button
          className="ml-4 h-10 px-4 bg-blue-600 hover:bg-blue-400 rounded-3xl flex justify-center items-center"
          onClick={openModal}
        >
          Connect Wallet
        </button>
        {isOpen && <ConnectModal closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default Header;
