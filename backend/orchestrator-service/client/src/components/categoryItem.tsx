import Image from "next/image";

const CategoryItem = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl p-4">
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold text-black">Art</p>
        <p className="font-bold">
          <span className="text-gray-800">29,456,79</span>
          <span className="text-gray-200"> NFTs</span>
        </p>
      </div>
      <div className="mt-4 flex flex-row justify-center">
        <Image
          className="rounded-xl"
          src={
            "https://assets-prd.ignimgs.com/2022/07/21/cloud-ff7-25th-anniversary-figure-1658396648566.jpg"
          }
          width={70}
          height={70}
          alt="Category"
        />
        <Image
          className="mx-2 rounded-xl"
          src={
            "https://assets-prd.ignimgs.com/2022/07/21/cloud-ff7-25th-anniversary-figure-1658396648566.jpg"
          }
          width={70}
          height={70}
          alt="Category"
        />
        <Image
          className="rounded-xl"
          src={
            "https://assets-prd.ignimgs.com/2022/07/21/cloud-ff7-25th-anniversary-figure-1658396648566.jpg"
          }
          width={70}
          height={70}
          alt="Category"
        />
      </div>
    </div>
  );
};

export default CategoryItem;
