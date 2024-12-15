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
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-20 lg:px-40 py-8 bg-gray-100 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col sm:flex-row items-center mb-4 md:mb-0">
        <p className="font-bold text-black text-center sm:text-left">
          Lets find what you need
        </p>
        <div className="w-1 h-6 bg-gray-200 rounded-xl mx-0 sm:mx-4 my-2 sm:my-0"></div>
        <p className="text-blue-400 text-center sm:text-left">How it works?</p>
      </div>

      <div className="flex flex-row">
        <p
          className="ml-0 sm:ml-8 font-bold hover:text-sky-500 cursor-pointer text-center sm:text-left"
          onClick={() => router.push("categories")}
        >
          <span className="text-rose-400">01</span>
          <span className="ml-2 text-black">Category</span>
        </p>
        <div className="w-1 h-6 bg-gray-200 rounded-xl mx-4"></div>
        <p
          className="font-bold hover:text-sky-500 cursor-pointer text-center sm:text-left"
          onClick={() => router.push("platform")}
        >
          <span className="text-rose-400">02</span>
          <span className="ml-2 text-black">Platforms</span>
        </p>
        <div className="w-1 h-6 bg-gray-200 rounded-xl mx-4"></div>
        <p className="font-bold hover:text-sky-500 cursor-pointer text-center sm:text-left">
          <span className="text-rose-400">03</span>
          <span className="ml-2 text-black">Browse</span>
        </p>
      </div>

      <div className="flex flex-row items-center justify-around mt-3">
        <div className="hover:bg-gray-400 bg-gray-200 rounded-3xl py-2 px-6 mx-2 flex flex-row justify-center items-center cursor-pointer">
          <FontAwesomeIcon fontSize={10} color="black" icon={faAngleLeft} />
          <p className="ml-2 text-black font-medium">Prev Step</p>
        </div>
        <div className="hover:bg-gray-400 bg-gray-200 rounded-3xl py-2 px-6 mx-2 flex flex-row justify-center items-center cursor-pointer sm:mt-0 sm:ml-8">
          <p className="mr-2 text-black font-medium">Next Step</p>
          <FontAwesomeIcon fontSize={10} color="black" icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
