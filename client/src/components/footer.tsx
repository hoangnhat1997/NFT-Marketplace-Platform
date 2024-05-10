"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faWallet,
  faHouse,
  faMagnifyingGlass,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="px-40 py-8 bg-gray-100 flex flex-row justify-between items-center py-6">
      <div className="flex flex-row">
        <p className="font-bold text-black">Lets find what you need</p>
        <div className=" w-1 mx-4 h-6 bg-gray-200 rounded-xl"></div>
        <p className="text-blue-400">How it works?</p>
      </div>
      <div className="flex flex-row">
        <p className="ml-8 font-bold">
          <span className="text-rose-400">01</span>
          <span className="ml-2 text-black">Category </span>
        </p>
        <div className="hover w-1 mx-4 h-6 bg-gray-200 rounded-xl"></div>
        <p className="font-bold">
          <span className="text-rose-400">02</span>
          <span className="ml-2 text-black">Platforms </span>
        </p>
        <div className=" w-1 mx-4 h-6 bg-gray-200 rounded-xl"></div>
        <p className="font-bold">
          <span className="text-rose-400">02</span>
          <span className="ml-2 text-black">Browse </span>
        </p>
      </div>
      <div className="flex flex-row">
        <div className="hover:bg-gray-400 bg-gray-200 rounded-3xl py-2 px-6 flex flex-row justify-center items-center">
          <FontAwesomeIcon fontSize={10} color="black" icon={faAngleLeft} />
          <p className="ml-2 text-black font-medium">Prev Step</p>
        </div>
        <div className="hover:bg-gray-400 ml-8 bg-gray-200 rounded-3xl py-2 px-6 flex flex-row justify-center items-center">
          <p className="text-black font-medium">Next Step</p>
          <FontAwesomeIcon
            className="ml-2"
            fontSize={10}
            color="black"
            icon={faAngleRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
