import Image from "next/image"
import { useEffect, useState } from "react";

const Header = () => {
  return (
    <header className="bg-[#4b4b4b] flex justify-between items-center h-[36px]">
      <div className="text-white flex items-center py-[10px] px-[10px]">
        <h1 className="text-[15px] font-['Hakyo']"> 💌 </h1>
        <h1 className="text-[14px] font-['Hakyo']">연말 편지 우체통 </h1>
      </div>

      <div className="bg-[#FFFFFF] flex items-center w-[150px] h-[20px] rounded-[4px] pl-[1px] mr-[10px]">
        <Image src="/images/image.png" alt="google icon" width={20} height={20}></Image>
        <button className="text-[11px] justify-between">Google 로그인하고 쓰기 </button>
      </div>
    </header>
  );
};

export default Header;