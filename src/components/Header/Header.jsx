import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PhoneIcon from "@mui/icons-material/Phone";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <div className="bg-gray-100 w-10 flex justify-center items-center text-5xl p-1 rounded cursor-pointer">
          <ArrowBackIosNewIcon />
        </div>
        <h1 className="text-3xl font-bold">Basic Mathematics 101</h1>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-[#0087A1] rounded-full p-1">
            <PhoneIcon />
          </div>
          <p className="font-semibold">Call Teacher</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-orange-400 rounded-full p-1">
            <SupportAgentOutlinedIcon />
          </div>
          <p className="font-semibold">Support</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
