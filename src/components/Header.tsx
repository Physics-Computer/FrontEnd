// Header component
import Image from "next/image"
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#A60606] flex justify-between items-center h-[106px]">
      <div className="text-white flex items-center py-[35px] px-[94px]">
        <h1 className="text-[55px] font-['Hakyo']"> 💌 </h1>
        <h1 className="text-[32px] font-['Changwon']">연말 편지 우체통 </h1>
      </div>

      <div className="bg-[#FFFFFF] flex items-center w-[368px] h-[69px] rounded-[9px] mr-[119px]">
        <Image src="/images/image.png" alt="google icon" width={68} height={50}></Image>
        <h1 className="text-[26px] ">Google 로그인하고 쓰기 </h1>
      </div>
    </header>
  );
};

export default Header;