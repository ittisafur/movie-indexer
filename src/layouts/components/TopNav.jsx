import React from "react";

const TopNav = () => {
  return (
    <div className="w-full grid md:grid-cols-2 grid-cols-1 mt-2">
      <div>
        <input
          className="md:px-5 md:py-1 lg:px-5 lg:py-1 px-1 py-1 font-pop text-dark-250 
          rounded-full border border-transparent focus:outline-none focus:ring-2 
          focus:border-transparent focus:text-dark-250 w-full md:w-8/12 lg:w-8/12"
          type="text"
          placeholder="Search Here"
        />
      </div>

      <div className="flex md:justify-end lg:justify-end justify-center mt-2 md:mt-0 lg:mt-0">
        <ul>
          <li className="inline-block mr-3">
            <a>IMDBPro</a>
          </li>
          <li className="inline-block">
            <a>ittisafur</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
