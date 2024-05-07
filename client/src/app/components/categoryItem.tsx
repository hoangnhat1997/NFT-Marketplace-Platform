const CategoryItem = () => {
  return (
    <div className="flex flex-col bg-blue-200 rounded-xl p-10">
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold text-black text-xl">Art</p>
        <p className="font-bold">
          <span className="text-gray-800">29,456,79</span>
          <span className="text-gray-200">NFTs</span>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default CategoryItem;
