import React from "react";
import Image from "next/image";
import cinemaImage from "../public/assets/undraw_home_cinema_l7yl.svg";

const HomePage = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto mt-2">
        <Image src={cinemaImage} layout="responsive" />
      </div>
      <p className="text-gray-500">Popular Movies And Films</p>
    </div>
  );
};

export default HomePage;
