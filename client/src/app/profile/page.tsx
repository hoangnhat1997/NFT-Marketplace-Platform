"use client";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="w-screen bg-gray-100">
      <div className="relative h-auto w-screen bg-gray-200 flex justify-center items-center">
        <Image
          src={
            "https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2.png"
          }
          width={2000}
          height={1000}
          alt="cover"
        />
        <div className="absolute top-[200px] left-[20px] w-full flex">
          <div className="w-1/3 flex flex-col justify-center items-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex justify-center items-center">
              <Image
                src={
                  "https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2.png"
                }
                width={200}
                height={200}
                alt="profile"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="font-bold text-2xl mt-4">Alexander</p>
            <p className="text-gray-400">Software Engineer</p>
            <p className="text-gray-400">New York, NY</p>
            <p className="text-gray-400">Joined in 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
