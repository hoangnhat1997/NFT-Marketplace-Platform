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
import CategoryItem from "@/app/components/categoryItem";

const CONTRACT_ADDRESS = "0xc2310811D515144585b7a7B92F05084f72Df9C78";
const CONTRACT_ABI: ethers.Interface | ethers.InterfaceAbi = []; // Your contract's ABI
const Home = () => {
  const [provider, setProvider] = useState<any>();

  const { ethereum }: any = typeof window !== "undefined" ? window : {};
  const { providers, utils }: any = ethers;

  useEffect(() => {
    if (ethereum) {
      // setProvider(new providers.Web3Provider(window));
    } else {
      console.log("Please install MetaMask!");
    }
  }, [ethereum]);

  async function connect() {
    const web3Provider = new ethers.BrowserProvider(ethereum);

    if (!web3Provider) {
      return;
    }
    const signer = await web3Provider.getSigner();
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    );
  }

  async function donate(amount: any) {
    const web3Provider = new ethers.BrowserProvider(ethereum);

    if (!web3Provider) {
      return;
    }
    const signer = await web3Provider.getSigner();
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    );
    // const transaction = await contract.donate({
    //   value: utils.parseEther(amount),
    // });
    // await transaction.wait();
  }
  return (
    <div className="h-screen w-screen flex flex-col bg-[#FDFEFF]">
      <div className="flex  justify-around m-8 items-center">
        <div className="flex flex-row justify-between items-center text-black">
          <div className="flex flex-row justify-center items-center mx-4">
            <FontAwesomeIcon color="black" icon={faHouse} />
            <p className="ml-2">Meta Market</p>
          </div>
          <div className=" w-1 mx-4 h-6 bg-gray-200 rounded-xl"></div>
          <p className="mx-4">Explore</p>
          <p className="mx-4">Discover</p>
          <p className="mx-4">Categories</p>
          <div className=" w-1 mx-4 h-6 bg-gray-200 rounded-xl"></div>
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
              onClick={() => connect()}
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
        </div>
      </div>
      <div className="flex flex-row mx-40 mt-10">
        <div className="flex flex-col items-start w-1/2">
          <div className="mb-4 bg-gray-200 rounded-2xl">
            <p className="p-2 text-black font-weight-700 ">METAMARKET</p>
          </div>
          <p className="text-5xl text-black font-bold">
            DISCOVER, COLLECT, AND SELL NFTS
          </p>
          <div className="mt-10 h-[100px] w-[400px] bg-blue-100 rounded-xl p-6">
            <p className="font-bold">
              <span className="text-gray-500">0</span>
              <span className="text-rose-300">65, 234, 1</span>
              <span className="text-orange-500">99</span>
            </p>
            <p className="mt-2 text-gray-400">You can find over</p>
          </div>
        </div>
        <div className="ml-10 w-1/2 flex flex-row">
          <Image
            src={
              "https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2.png"
            }
            width={500}
            height={500}
            alt="Picture"
          />
          <div className="ml-4 flex flex-col justify-between">
            <FontAwesomeIcon fontSize={20} color="black" icon={faAngleRight} />
            <div>
              <p className="font-bold">
                <span className="text-gray-800">2 </span>
                <span className="text-gray-200">OF 4</span>
              </p>
            </div>
            <FontAwesomeIcon fontSize={20} color="black" icon={faAngleLeft} />
          </div>
        </div>
      </div>
      <div className="mx-40 mt-20 flex flex-row items-center">
        <p className="font-bold text-black text-3xl">Categories</p>
        <div className=" w-1 mx-10 h-6 bg-gray-200 rounded-xl"></div>
        <p className="font-bold text-gray-400 text-xl">
          Select your favourites
        </p>
      </div>
      <div className="mx-40 mt-10 grid grid-cols-4 gap-10">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
      {/* <div className="h-[80%] flex flex-col justify-center items-center">
        <div className="w-1/4 flex flex-col justify-center border rounded-xl px-4 py-8">
          <p className="mb-2 flex">Please input your money</p>
          <input
            type="text"
            className="w-full bg-emerald-800 border-green-400 border-2 p-2 rounded-2xl"
          />
          <input
            type="text"
            className="w-full mt-4 bg-emerald-800 border-green-400 border-2 p-2 rounded-2xl"
          />
        </div>
        <button className="mt-4" onClick={() => donate("0.1")}>
          Donate
        </button>
      </div> */}
    </div>
  );
};
export default Home;
