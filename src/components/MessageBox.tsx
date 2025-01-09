import { useState, useEffect } from "react";
import axios from "axios";

interface MessageBoxProps {
  user: string;
  content: string;
}

const MessageBox = ({ user, content }: MessageBoxProps) => {
  return (
    <div className="p-[5px] text-[10px] border-4 border-[#707070] flex-col w-[150px] h-[200px] bg-[#FFFFFF] rounded-[12px] items-center justify-center mt-[10px] mx-[5px]">
      <div>From: {user} </div>
      <div>내용: {content}</div>
    </div>
  );
};


export default MessageBox;