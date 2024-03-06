import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
//import home from "../assets/home.jpg";
const Feature = () => {
  return (
    <>
    <div id="features" className="p-0.5 relative top-20 bg-[#82C047] border solid shadow-lg"></div>
      <div className="mt-24 flex">

        <div className="w-[2400px]">
          <div className="flex flex-col items-center justify-center m-4 pl-3 pr-3 py-12 h-[325px] bg-[#54B435] rounded-3xl shadow-lg shadow-slate-900">
            <h1 className="text-2xl text-white font-bold py-4">
              User Dashboard
            </h1>
            <h1 className="text-justify">
              The user dashboard provides a personalized hub for community
              gardeners and urban farmers, offering a snapshot of their
              activity, upcoming events, and connections within the network. It
              serves as a central space for users to manage their projects,
              access resources, and many more .
            </h1>
          </div>
        </div>

        <div className="w-[2400px]">
          <div className="flex flex-col items-center justify-center m-4 py-12 pl-3 pr-3 h-[325px] bg-[#54B435] rounded-3xl shadow-lg shadow-slate-900">
            <h1 className="text-2xl text-white font-bold py-4">
              Community Forum
            </h1>
            <h1 className="text-justify">
              The community forum is a vibrant space where users can engage in
              discussions, share experiences, and seek advice on all aspects of
              community gardening and urban farming. It fosters a supportive
              environment for knowledge exchange, collaboration, and building
              connections within the network.
            </h1>
          </div>
        </div>
        <div className="w-[2400px]">
          <div className="flex flex-col items-center justify-center m-4 py-24 pl-3 pr-3 h-[325px] bg-[#54B435] rounded-3xl shadow-lg shadow-slate-900">
            <h1 className="text-2xl text-white font-bold py-4">
              Resource Library
            </h1>
            <h1 className="text-justify">
              : A curated collection of articles, guides, and videos providing
              users with valuable insights and practical resources for community
              gardening and urban farming endeavors. It serves as a
              comprehensive knowledge hub,promoting sustainability and fostering
              innovation in agriculture
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-8 flex">
        <div className="w-[2400px]">
          <div className="flex flex-col items-center justify-center m-4 pl-3 pr-3 py-12 bg-[#54B435] rounded-3xl shadow-lg shadow-slate-900">
            <h1 className="text-2xl text-white font-bold py-4">
              Event Calender
            </h1>
            <h1 className="text-justify">
              Centralized platform for workshops, seminars, and volunteer
              opportunities in community gardening and urban farming. Users
              track events, RSVP, and network, fostering collaboration and
              skill-sharing.Supports sustainable agriculture initiatives through
              community engagement.
            </h1>
          </div>
        </div>

        <div className="w-[2400px]">
          <div className="flex flex-col items-center justify-center m-4 py-12 pl-3 pr-3 bg-[#54B435] rounded-3xl shadow-lg shadow-slate-900">
            <h1 className="text-2xl text-white font-bold py-4">
              Project Showcase
            </h1>
            <h1 className="text-justify">
              Curated platform highlighting diverse community gardening and
              urban farming initiatives. Users explore projects, connect with
              organizers, and gain inspiration, fostering collaboration and
              knowledge exchange within the community. Promotes sustainability
              and innovation in agriculture.
            </h1>
          </div>
        </div>
        <div className="w-[2400px]">
          <div className="flex flex-col items-center justify-center m-4 py-12 pl-3 pr-3 bg-[#54B435] rounded-3xl shadow-lg shadow-slate-900">
            <h1 className="text-2xl text-white font-bold py-4">Marketplace</h1>
            <h1 className="text-justify">
              A platform facilitating the exchange of gardening tools, seeds,
              and resources among community members. Users buy, sell, or
              exchange items, promoting sustainability and affordability in
              urban farming endeavors. Fosters a collaborative environment for
              resources and local gardening{" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
