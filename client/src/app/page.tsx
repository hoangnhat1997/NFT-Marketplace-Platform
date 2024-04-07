"use client";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0xc2310811D515144585b7a7B92F05084f72Df9C78";
const CONTRACT_ABI: ethers.Interface | ethers.InterfaceAbi = []; // Your contract's ABI

function DonatePage() {
  // const [provider, setProvider] = useState(undefined);
  const { ethereum }: any = window;
  const { providers, utils }: any = ethers;

  useEffect(() => {
    if (ethereum) {
      // setProvider(new providers.Web3Provider(window));
    } else {
      console.log("Please install MetaMask!");
    }
  }, [ethereum]);

  async function donate(amount: any) {
    const provider = new providers.Web3Provider(ethereum);

    if (!provider) {
      return;
    }
    const signer = provider.getSigner();
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
    <div>
      <button onClick={() => donate("0.1")}>Donate 0.1 Ether</button>
    </div>
  );
}

export default DonatePage;
