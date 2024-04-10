"use client";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0xc2310811D515144585b7a7B92F05084f72Df9C78";
const CONTRACT_ABI: ethers.Interface | ethers.InterfaceAbi = []; // Your contract's ABI

function DonatePage() {
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
    const transaction = await contract.donate({
      value: utils.parseEther(amount),
    });
    await transaction.wait();
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-zinc-700 ">
      <div className="flex justify-end m-8">
        <button>Connect</button>
      </div>
      <div className="h-[80%] flex flex-col justify-center items-center">
        <input
          type="text"
          className="w-[20%] bg-emerald-800 border-green-400 border-2 p-2 rounded-2xl"
        />
        <button className="mt-4" onClick={() => donate("0.1")}>
          Donate
        </button>
      </div>
    </div>
  );
}

export default DonatePage;
