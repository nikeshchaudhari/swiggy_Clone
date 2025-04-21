import React from "react";

const Header = () => {
  return (
    <>
      <header className="p-[15px] shadow-xl bg-red-500">
        <div className="max-w [1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img
              src={require("../image/Swiggy_logo.png")}
              alt="Logo"
              className=""
            />
          </div>
          <div className="">
            kathmandu,Nepal

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
