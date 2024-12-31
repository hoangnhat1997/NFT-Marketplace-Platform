"use client";
import {
  faUserTie,
  faWallet,
  faHouse,
  faMagnifyingGlass,
  faAngleRight,
  faAngleLeft,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { ethers } from "ethers";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CONTRACT_ABI } from "../utils/address";
import { useState } from "react";
import ConnectModal from "./connectModal";
import { useRouter } from "next/navigation";

const Header = () => {
  const { ethereum }: any = typeof window !== "undefined" ? window : {};
  const { providers, utils }: any = ethers;
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

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
    <div className="w-screen bg-gray-100">
      <div className="w-full py-8 bg-white lg:px-40 flex justify-center md:justify-between items-center mx-auto w-auto">
        <div className="hidden md:flex flex-row justify-between items-center text-black">
          <div className="flex flex-row justify-center items-center">
            <FontAwesomeIcon color="black" icon={faHouse} />
            <p className="mr-0 ml-4">Meta Market</p>
          </div>
          <div className=" w-1 mx-4 h-6 bg-gray-200 rounded-xl"></div>
          <p
            className="mx-4 hover:text-sky-500 cursor-pointer"
            onClick={() => router.push("/explore")}
          >
            Explore
          </p>
          <p
            className="mx-4 hover:text-sky-500 cursor-pointer"
            onClick={() => router.push("discover")}
          >
            Discover
          </p>
          <p
            className="mx-4 hover:text-sky-500 cursor-pointer"
            onClick={() => router.push("categories")}
          >
            Categories
          </p>
          <div className="w-1 mx-4 h-6 bg-gray-200 rounded-xl"></div>
          <FontAwesomeIcon
            className="mx-4"
            color="black"
            icon={faMagnifyingGlass}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-row bg-gray-200  hover:bg-blue-400 hover:text-blue-900  justify-center items-center px-2 rounded-2xl mr-4">
            <FontAwesomeIcon color="black" icon={faWallet} />
            <button
              onClick={() => {}}
              className="py-2 px-4 transition duration-200 ease-in-out transform hover:scale text-black font-weight-700"
            >
              Wallet
            </button>
          </div>
          <button className="mr-4 hover" onClick={() => {}}>
            <FontAwesomeIcon fontSize={30} color="black" icon={faSquarePlus} />
          </button>
          <div className=" w-1 h-6 bg-gray-200 rounded-xl"></div>
          <div className="flex flex-row justify-center items-center px-2">
            <div className="h-12 w-12  flex justify-center items-center p-2">
              <FontAwesomeIcon color="black" icon={faUserTie} />
            </div>
            <p className="ml-2 text-black font-weight-700">Alexander</p>
          </div>
          <button
            className="md:ml-4 h-8 md:h-10 px-2 bg-blue-600 hover:bg-blue-400 cursor-pointer rounded-3xl flex justify-center items-center"
            onClick={openModal}
          >
            <div className="text-[12px]">Connect Wallet</div>
          </button>
          {isOpen && <ConnectModal closeModal={closeModal} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
