import Image from "next/image";

const FlatformItem = () => {
  return (
    <div className="flex flex-col justify-between items-center p-12 rounded-xl bg-white">
      <Image
        className="rounded-xl"
        src={
          "https://assets-prd.ignimgs.com/2022/07/21/cloud-ff7-25th-anniversary-figure-1658396648566.jpg"
        }
        width={70}
        height={70}
        alt="Category"
      />
      <p className="mt-8 text-black text-xl font-medium">Foundation</p>
    </div>
  );
};

export default FlatformItem;
