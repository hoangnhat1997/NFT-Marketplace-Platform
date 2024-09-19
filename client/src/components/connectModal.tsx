"use client";

import { CONTRACT_ABI } from "@/utils/address";
import { useSDK } from "@metamask/sdk-react";
import { ethers } from "ethers";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ConnectModalProps = {
  closeModal: () => void;
};

const ConnectModal = (props: ConnectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { sdk, connected, connecting, account } = useSDK();

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

  const connectMetaMask = async (amount: any) => {
    try {
      if (typeof window.ethereum === "undefined") {
        console.error("MetaMask is not installed");
        return;
      }

      await window.ethereum.request({ method: "eth_requestAccounts" });

      const web3Provider = new ethers.BrowserProvider(window.ethereum);

      const signer = await web3Provider.getSigner();

      const contract = new ethers.Contract(
        process.env.CONTRACT_ADDRESS!,
        CONTRACT_ABI,
        signer
      );

      const transaction = await contract.donate({
        value: utils.parseEther(amount),
      });
      await transaction.wait();
      console.log("Transaction successful");
    } catch (error) {
      console.error(
        "Error connecting to MetaMask or executing the transaction",
        error
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        props.closeModal();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [props, props.closeModal]);

  // const connectMetaMask = async () => {
  //   if (!sdk) {
  //     console.error("MetaMask SDK not initialized");
  //     return;
  //   }
  //   try {
  //     console.log("Attempting to connect to MetaMask...");
  //     await sdk.connect();
  //   } catch (err) {
  //     console.error("Error connecting to MetaMask", err);
  //   }
  // };

  const disconnectMetamask = () => {
    if (sdk) {
      sdk.terminate();
    }
  };

  return (
    <div
      ref={modalRef}
      className="absolute top-24 right-[160px] flex flex-col items-center justify-center z-30 bg-white p-6 rounded-xl w-80"
    >
      <p className="mb-4 text-xl text-black font-medium">Select a wallet</p>
      <p className="text-xs mb-4 text-center">
        <span className="text-gray-500">
          By connecting your wallet, you agree to our
        </span>
        <span className="text-black"> Terms of Service </span>
        <span className="text-gray-500"> and our </span>
        <span className="text-black"> Privacy Policy </span>
      </p>
      <div className="mb-2 py-2 text-white bg-blue-500 rounded w-full bg-white">
        <div className="flex flex-row items-center justify-between group">
          <div className="flex flex-row items-center">
            <div className=" w-1 mr-2 h-6 group-hover:bg-blue-500 rounded-xl"></div>
            <Image
              src={"/images/metamask.png"}
              width={40}
              height={40}
              alt="Picture"
            />
            <p className="ml-2 text-black"> MetaMask</p>
          </div>
          <button
            disabled={connecting}
            onClick={connected ? disconnectMetamask : connectMetaMask}
          >
            <p className="group-hover:text-blue-500">
              {connected ? "disconnect" : "connect"}
            </p>
          </button>
        </div>
      </div>

      <div className="mb-2 py-2 text-white bg-blue-500 rounded w-full bg-white">
        <div className="flex flex-row items-center justify-between group">
          <div className="flex flex-row items-center">
            <div className=" w-1 mr-2 h-6 group-hover:bg-blue-500 rounded-xl"></div>
            <Image
              src={"/images/coinbase.png"}
              width={40}
              height={40}
              alt="Picture"
            />
            <p className="ml-2 text-black">Coinbase Wallet</p>
          </div>
          <button onClick={() => alert("Connecting to Coinbase...")}>
            <p className="group-hover:text-blue-500">connect</p>
          </button>
        </div>
      </div>
      <div className="mb-2 py-2 text-white bg-blue-500 rounded w-full bg-white">
        <div className="flex flex-row items-center justify-between group">
          <div className="flex flex-row items-center">
            <div className=" w-1 mr-2 h-6 group-hover:bg-blue-500 rounded-xl"></div>
            <Image
              src={"/images/connectWallet.png"}
              width={40}
              height={40}
              alt="Picture"
            />
            <p className="ml-2 text-black">WalletConnect</p>
          </div>
          <button onClick={() => alert("Connecting to other wallet...")}>
            <p className="group-hover:text-blue-500">connect</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectModal;
