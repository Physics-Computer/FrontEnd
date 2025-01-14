import Image from "next/image"
import { useEffect, useState } from "react";
import axios from "axios";
import MessageBox from "@/components/MessageBox";
import instance from "@/api/instance";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  const writeButtonClick = () => {
    router.push('/SendMessage');
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await instance.get('/messages?name=김민수');
        setMessages(res.data);


        if (res.data.length > 0) {
          setUserName(res.data[0].toName);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    console.log("받아와짐");
    fetchMessages();
  }, []);

  return (
    <main className="bg-[#f1f1f1] flex flex-col items-center min-h-screen">
      <div className="pt-[50px]">
        <h1 className="text-[50px] font-['Changwon']">연말 편지 우체통</h1>
      </div>

      <div className="pt-[25px]">
        <h2 className="text-[20px] font-['Hakyo']">💌 {userName}님의 연말 편지 우체통으로 {messages.length}건의 편지가 도착했어요!</h2>
      </div>

      <div className="flex w-[200px] h-[30px] bg-[#666666] rounded-[12px] text-white items-center justify-center mt-[20px]">
        <button
          onClick={writeButtonClick}
          className="text-[15px] font-['Hakyo']">편지 쓰러 가기</button>
      </div>

      <div className="grid grid-cols-4 gap-[5px] pt-[30px]">
        {messages.map((message, index) => (
          <MessageBox
            key={index}
            user={message.fromName}
            content={message.message}
          />
        ))}
      </div>

    </main>
  );
}