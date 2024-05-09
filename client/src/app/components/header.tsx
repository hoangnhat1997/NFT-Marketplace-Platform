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
import exp from "constants";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../utils/address";

const Header = () => {
  const { ethereum }: any = typeof window !== "undefined" ? window : {};
  const { providers, utils }: any = ethers;

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
  return (
    <div className="flex justify-between mx-40 mt-8 items-center">
      <div className="flex flex-row justify-between items-center text-black">
        <div className="flex flex-row justify-center items-center">
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
  );
};

export default Header;
