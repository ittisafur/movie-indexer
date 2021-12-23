import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopNav from "./components/TopNav";

const Default = (props) => {
  return (
    <div className="flex space-x-5 min-h-screen ">
      <div>
        <Navbar />
      </div>
      <main className="text-white flex-1 h-screen overflow-y-auto pr-5">
        <TopNav />
        {props.children}
        <Footer />
      </main>
    </div>
  );
};

export default Default;
