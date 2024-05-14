import FlatformItem from "@/components/platformItem";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Flatform = () => {
  return (
    <div className="h-max w-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex justify-center items-center">
        <p className="text-3xl font-bold">
          <span className="text-black">PICK YOUR </span>
          <span className="text-rose-400">PLATFORM</span>
        </p>
      </div>
      <div className="my-4 flex bg-gray-200 rounded-2xl justify-center items-center">
        <p className="p-2 text-black font-weight-700">17 NFT Platforms</p>
      </div>
      <div className="w-[900px] flex flex-row items-center justify-center bg-gray-200 rounded-full text-gray-600 focus-within:text-gray-400">
        <FontAwesomeIcon
          className="ml-20"
          color="black"
          icon={faMagnifyingGlass}
        />
        <input
          className="p-2 bg-gray-200 rounded-full outline-none"
          type="text"
          placeholder="Search Platform"
        />
      </div>
      <div className="mt-8 grid grid-cols-4 gap-4">
        <FlatformItem />
        <FlatformItem />
        <FlatformItem />
        <FlatformItem />
        <FlatformItem />
        <FlatformItem />
        <FlatformItem />
        <FlatformItem />
      </div>
    </div>
  );
};
export default Flatform;
