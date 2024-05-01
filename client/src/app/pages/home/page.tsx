"use client";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faWallet,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

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
          <div className=" w-1 mx-4 h-6 bg-[#F8FAFE] rounded-xl"></div>
          <p className="mx-4">Explore</p>
          <p className="mx-4">Discover</p>
          <p className="mx-4">Categories</p>
          <div className=" w-1 mx-4 h-6 bg-[#F8FAFE] rounded-xl"></div>
          <FontAwesomeIcon
            className="mx-4"
            color="black"
            icon={faMagnifyingGlass}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-row bg-[#F8FAFE] hover:bg-blue-400 hover:text-blue-900  justify-center items-center px-2 rounded-2xl mr-4">
            <FontAwesomeIcon color="black" icon={faWallet} />
            <button
              onClick={() => connect()}
              className="py-2 px-4 transition duration-200 ease-in-out transform hover:scale text-black font-weight-700"
            >
              Wallet
            </button>
          </div>
          <div className=" w-1 h-6 bg-[#F8FAFE] rounded-xl"></div>
          <div className="flex flex-row justify-center items-center px-2">
            <div className="h-12 w-12  flex justify-center items-center p-2">
              <FontAwesomeIcon color="black" icon={faUserTie} />
            </div>
            <p className="ml-2 text-black font-weight-700">Alexander</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row mx-40">
        <div className="flex flex-col">
          <p className="p-2 text-black font-weight-700 bg-[#F8FAFE] rounded-2xl">
            METAMARKET
          </p>
          <p className="text-4xl text-black font-bold">
            DISCOVER, COLLECT, AND SELL NFTS
          </p>
          <div className="h-[300px] w-1/4 bg-white"></div>
        </div>
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