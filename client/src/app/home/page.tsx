"use client";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import {
  faUserTie,
  faWallet,
  faHouse,
  faMagnifyingGlass,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import CategoryItem from "@/components/categoryItem";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="h-max w-full flex flex-col bg-gray-100 px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-center md:items-start mx-auto mt-10 md:mx-20">
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <div className="mb-4 bg-gray-200 rounded-2xl text-center md:text-left">
            <p className="p-2 text-black font-semibold">METAMARKET</p>
          </div>
          <p className="text-3xl md:text-5xl text-black font-bold text-center md:text-left">
            DISCOVER, COLLECT, AND SELL NFTS
          </p>
          <div className="mt-10 h-[100px] w-full md:w-[400px] bg-white rounded-xl p-6">
            <p className="font-bold">
              <span className="text-gray-500">0</span>
              <span className="text-rose-400">65, 234, 1</span>
              <span className="text-orange-500">99</span>
            </p>
            <p className="mt-2 text-gray-400">You can find over</p>
          </div>
        </div>
        <div className=" md:w-1/2 flex flex-col md:flex-row ">
          <Image
            src={
              "https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2.png"
            }
            width={700}
            height={500}
            alt="Picture"
          />
          <div className="mt-2 md:ml-4 flex flex-row md:flex-col justify-between">
            <FontAwesomeIcon
              className="hidden md:block"
              fontSize={20}
              color="black"
              icon={faAngleRight}
            />
            <FontAwesomeIcon
              className="md:hidden"
              fontSize={20}
              color="black"
              icon={faAngleLeft}
            />
            <div>
              <p className="font-bold">
                <span className="text-gray-800">2 </span>
                <span className="text-gray-200">OF 4</span>
              </p>
            </div>
            <FontAwesomeIcon
              className="hidden md:block"
              fontSize={20}
              color="black"
              icon={faAngleLeft}
            />
            <FontAwesomeIcon
              className="md:hidden"
              fontSize={20}
              color="black"
              icon={faAngleRight}
            />
          </div>
        </div>
      </div>
      <div className="md:mx-20 mt-20 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
        <p className="font-bold text-black text-2xl md:text-3xl">Categories</p>
        <div className="hidden md:block w-1 mx-10 h-6 bg-gray-200 rounded-xl"></div>
        <p className="font-medium text-gray-400 text-lg md:text-xl">
          Select your favourites
        </p>
      </div>
      <div className="md:mx-20 mt-10 grid grid-cols-2 md:grid-cols-4 md:gap-6">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
};
export default Home;
