import React from "react";
import CommunicationForm from "./LandingPage/communicationForm";
import Features from "./LandingPage/features";
import Footer from "./LandingPage/footer";
import Home from "./LandingPage/home";
import Navbar from "./LandingPage/navbar";
import About from "./LandingPage/about";
import Showcase from "./LandingPage/showcase";

const LandingPage = () => {
  return (
    <div>
      
      <Navbar />
      <Home />
      <About/>
    <Features />
   <Showcase/>
      <CommunicationForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
