import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SendMessagepage() {
  const [message, setMessage] = useState<string>("");
  const [fromName, setFromName] = useState<string>("");
  const [toName, setToName] = useState<string>("");
  const router = useRouter();

  const homeButtonClick = () => {
    router.push('/');
  };

  const sendButtonClick = async (e) => {
    router.push('/');
    e.preventDefault();
    try {
      const res =
        await axios.post('http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080/messages',
          {
            message,
            toName,
            fromName
          });
      console.log('편지 전송 성공:', res.data);
      
    } catch (error) {
      console.error('편지 전송 실패:', error);
    }
  }

  return (
    <main className="bg-[#f1f1f1] flex flex-col items-center min-h-screen">
      <div className="pt-[30px]">
        <h1 className="text-[40px] font-['Changwon'] pb-15px]">편지 보내기</h1>
      </div>

      <div className="
      p-[5px] border-4 border-[#707070] flex-col w-[500px] h-[250px] bg-[#FFFFFF] rounded-[12px] items-center justify-center mt-[10px] mx-[5px] shadow-[0_4px_4px_#00000040]">
        <label htmlFor="title" className="text-[15px] font-semibold mb-[10px]">
          받는 사람:
        </label>
        <input
          id="title"
          type="text"
          placeholder="받는 사람을 입력하세요"
          value={toName}
          onChange={(e) => setToName(e.target.value)}
          className="text-[13px] w-full h-[25px] border-[2px] border-gray-300 rounded-[8px] px-[10px] mb-[5px] focus:outline-none focus:border-[#CB0000]"
        />

        <label htmlFor="content" className="text-[15px] font-semibold mb-[10px]">
          편지 내용:
        </label>
        <textarea
          id="content"
          placeholder="내용을 입력하세요"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="text-[13px] w-full h-[100px] border-[2px] border-gray-300 rounded-[8px] px-[10px] py-[10px] resize-none focus:outline-none focus:border-[#CB0000]"
        ></textarea>

        <label htmlFor="title" className="text-[15px] font-semibold mb-[10px]">
          보내는 사람:
        </label>
        <input
          type="text"
          placeholder="보내는 사람을 입력하세요"
          value={fromName}
          onChange={(e) => setFromName(e.target.value)}
          className="text-[13px] w-full h-[25px] border-[2px] border-gray-300 rounded-[8px] px-[10px] focus:outline-none focus:border-[#CB0000]"
        />
      </div>

      <div className="relative flex items-center justify-center mt-[10px]">
        <button
          onClick={sendButtonClick}
          className="flex w-[150px] h-[30px] bg-[#666666] rounded-[12px] text-white text-[15px] font-['Hakyo'] px-[20px] items-center justify-center mx-[58px]">
          편지 보내기
        </button>

        <button
          onClick={homeButtonClick}
          className="absolute right-[0px] text-[20px] flex items-center justify-center mr-[20px]"
        >
          🏠
        </button>
      </div>
    </main>
  );
}