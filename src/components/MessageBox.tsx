import { useState, useEffect } from "react";
import axios from "axios";

interface MessageBoxProps {
  user: string;
  content: string;
}

const MessageBox = ({ user, content }: MessageBoxProps) => {
  return (
    <div className="relative font-['Hakyo'] p-[5px] text-[13px] border-4 border-[#707070] flex-col w-[150px] h-[100px] bg-[#FFFFFF] rounded-[12px] items-center justify-center mt-[10px] mx-[5px]">
      <div>{content}</div>
      <button
          //onClick={writeButtonClick}
          className="right-[5px] top-[5px] text-[15px] absolute font-['Hakyo']">🗑️</button>
      <div className="absolute bottom-[5px] text-[10px]">from: {user} </div>
    
    </div>
  );
};


export default MessageBox;