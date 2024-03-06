import React from "react";
// import { Link } from "react-router-dom";
import One from "../../assets/one.png";
import Two from "../../assets/two.jpg";

const Showcase = () => {
  return (
    <>
      <div
        id="project"
        className="p-0.5 relative top-8 bg-[#82C047] border solid shadow-lg"
      ></div>

      <div className="flex mt-20">
        <div className="w-[5000px]">
          <a href="https://seewhatgrows.org/unique-urban-community-gardens-inspire-future-generations/#:~:text=4%20Examples%20of%20Urban%20and%20Community%20Garden%20%2F,...%204%204.%20GrowUp%20Box%20Upcycled%20Aquaponics%20">
            <div className="flex flex-col items-center justify-center m-4 pl-3 pr-3 py-12 h-[300px] bg-[#FFFFFF] rounded-3xl shadow-lg shadow-slate-900">
              <h1 className="text-2xl text-[#379237] font-bold py-4 hover:underline">
                The Floating Urban Forest
              </h1>
              {/* <h1>Click <Link to ="/projectone">here</Link> to see details</h1> */}
              <img src={One} className="w-[350px] pr-4" />
            </div>
          </a>
        </div>

        <div className="w-[5000px]">
          <a href="https://seewhatgrows.org/unique-urban-community-gardens-inspire-future-generations/#:~:text=4%20Examples%20of%20Urban%20and%20Community%20Garden%20%2F,...%204%204.%20GrowUp%20Box%20Upcycled%20Aquaponics%20">
            <div className="flex flex-col items-center justify-center m-4 pl-3 pr-3 py-12 h-[300px] bg-[#FFFFFF] rounded-3xl shadow-lg shadow-slate-900">
              <h1 className="text-2xl text-[#379237] font-bold py-4 hover:underline">
                Brooklyn Grange Rooftop Farming
              </h1>
              {/* <h1>Click <Link to ="/projectone">here</Link> to see details</h1> */}
              <img src={Two} className="w-[350px] pr-4" />
            </div>
          </a>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Showcase;
