import React from "react";
import home from "../../assets/home.jpg";
const Home = () => {
  return (
    <div>
      <div className="mt-32 space-y-2 pl-28">
        <h1 className="text-[80px] font-bold leading-none">Community</h1>
        <h1 className="text-[62px] font-bold text-[#82C047] leading-none">
          Garden
        </h1>
        <h1 className="text-[44px] font-bold leading-none">and</h1>
        <h1 className="text-[62px] font-bold text-[#82C047] leading-none">
          Urban Farming
        </h1>
        <h1 className="text-[80px] font-bold leading-none">Network</h1>
      </div>
      <div className="absolute right-28 top-32">
        <img src={home} className=" h-[470px]" />
      </div>
    </div>
  );
};

export default Home;
