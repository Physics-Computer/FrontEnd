import Image from "next/image"
import { useEffect, useState } from "react";
import axios from "axios";
import MessageBox from "@/components/MessageBox";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const writeButtonClick = () => {
    router.push('/SendMessage');
  };

  // useEffect(() => {
  //   const fetchMessages = async () => {
  //     const res = await axios.get("http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080/messages?name=김민수");
  //     setMessages(res.data);
  //   };
  //   fetchMessages();
  // }, []);



  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080/messages?name=김민수");
        setMessages(res.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    console.log("받아와짐");
    fetchMessages();
  }, []);

  return (
    <main className="bg-[#FFDDE3] flex flex-col items-center min-h-screen">
      <div className="pt-[147px]">
        <h1 className="text-[120px] font-['Changwon']">연말 편지 우체통</h1>
      </div>

      <div className="pt-[58px]">
        <h2 className="text-[36px] font-['Hakyo']">💌  김민수님의 연말 편지 우체통으로 00건의 편지가 도착했어요!</h2>
      </div>

      <div className="flex w-[678px] h-[93px] bg-[#B61111] rounded-[12px] text-white items-center justify-center mt-[58px]">
        <button
          onClick={writeButtonClick}
          className="text-[36px] font-['Hakyo']">편지 쓰러 가기</button>
      </div>

      <div className="grid grid-cols-4 gap-[30px] pt-[70px]">
        {messages.map((message, index) => (
          <div key={index}>
            <MessageBox message={message} />
          </div>

        ))}
      </div>

    </main>
  );
}