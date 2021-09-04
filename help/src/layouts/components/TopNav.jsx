import React from "react";

const TopNav = () => {
  return (
    <div className="w-full grid grid-cols-2 ">
      <div>
        <input type="text" placeholder="Search Here" />
      </div>

      <div className="flex justify-end">
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
