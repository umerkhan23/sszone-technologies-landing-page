import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landingpage";
// import AdminPanel from "./components/AdminPanel";
// import ManageUser from "./components/AdminPanel/ManageUser";
// import ModerateContent from "./components/AdminPanel/ModerateContent";
// import PlatformOperations from "./components/AdminPanel/PlatformOperations";
// import Dashboard from "./components/Dashboard/dashboard";
// import EventCalender from "./components/Dashboard/EventCalender";
// import MarketPlace from "./components/Dashboard/MerketPlace";
// import Profile from "./components/Dashboard/profile";
// import Resources from "./components/Dashboard/Resources";
// import CreateUser from "./components/AdminPanel/ManageUser/CreateUser";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/ManageUser" element={<ManageUser />} />
          <Route path="/ModerateContent" element={<ModerateContent />} />
          <Route path="/PlatformOperations" element={<PlatformOperations />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/eventcalender" element={<EventCalender />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resourses" element={<Resources />} />
          <Route path="/ManageUser/CreateUser" element={<CreateUser />} /> */}
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
