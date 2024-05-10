import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Flatform = () => {
  return (
    <div className="h-max w-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="flex justify-center items-center">
        <p className="text-3xl font-bold">
          <span className="text-black">PICK YOUR </span>
          <span className="text-rose-400">PLATFORM</span>
        </p>
      </div>
      <div className="my-4 bg-gray-200 rounded-xl">
        <p className="p-2 text-black font-weight-700 ">17 NFT Platforms</p>
      </div>

      <div className="mx-40 w-full flex items-center justify-center bg-gray-200 rounded-full text-gray-600 focus-within:text-gray-400">
        <FontAwesomeIcon
          className="mx-4"
          color="black"
          icon={faMagnifyingGlass}
        />
        <input
          className="p-2 bg-gray-200 rounded-full outline-none"
          type="text"
          placeholder="Search Platform"
        />
      </div>
    </div>
  );
};
export default Flatform;
