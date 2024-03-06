import React from "react";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="p-0.5 relative top-20 bg-[#82C047] border solid shadow-lg"
      ></div>
      <div className="flex mt-32">
        <div className="flex flex-col items-center justify-center m-4 pl-3 pr-3 py-12 h-[325px] bg-[#000000] rounded-3xl shadow-lg shadow-slate-900">
          <h1 className="text-2xl text-[#54b435] font-bold py-4">VISION</h1>
          <h1 className="text-justify text-white">
            Our vision is to empower communities worldwide by fostering a
            culture of sustainable agriculture, creating a greener and healthier
            future for generations to come. Through our platform, we aim to
            facilitate connections, provide resources, and promote education in
            community gardening and urban farming, driving positive change and
            resilience in urban ecosystems across the globe
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center m-4 py-12 pl-3 pr-3 h-[325px] bg-[#000000] rounded-3xl shadow-lg shadow-slate-900">
          <h1 className="text-2xl text-[#54b435] font-bold py-4">MISSION</h1>
          <h1 className="text-justify text-white">
            Our mission is to build a global network of community gardeners and
            urban farmers, providing them with the tools, resources, and support
            they need to grow and thrive. We are committed to promoting
            sustainable agriculture, fostering community engagement, and
            empowering individuals to take an active role in shaping a greener
            and more sustainable future.
          </h1>
        </div>
      </div>
    </>
  );
};

export default About;
