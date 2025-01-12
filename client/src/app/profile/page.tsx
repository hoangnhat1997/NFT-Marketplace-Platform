"use client";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="w-screen h-screen relative bg-gray-100">
      <div className="absolute top-0 w-full h-2/5 bg-gray-200 flex justify-center items-center">
        <Image
          src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2.png"
          layout="fill" // This ensures the image fills the container
          objectFit="cover" // Makes sure the image covers the container without stretching
          alt="cover"
        />
      </div>
      <div className="absolute top-[250px] left-[10px] w-full flex">
        <div className="w-1/3 flex flex-col justify-center items-center">
          <div className="w-32 h-32 rounded-full bg-gray-200 flex justify-center items-center overflow-hidden">
            <Image
              src={
                "https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2.png"
              }
              width={200}
              height={200}
              alt="profile"
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="font-bold text-2xl mt-4 text-black">Alexander</p>
          <p className="text-gray-700">Software Engineer</p>
          <p className="text-gray-700">New York, NY</p>
          <p className="text-gray-700">Joined in 2027</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
