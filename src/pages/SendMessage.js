import { useRouter } from "next/router";
import { useState } from 'react'

export default function SendMessagepage() {
  const [message, setMessage] = useState("");
  const [fromName, setFromName] = useState("");
  const [toName, setToName] = useState("");
  const router = useRouter();

  const homeButtonClick = () => {
    router.push('/index');
  };

  const sendButtonClick = async (e) => {
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
    <main className="bg-[#FFDDE3] flex flex-col items-center min-h-screen">
      <div className="pt-[147px]">
        <h1 className="text-[120px] font-['Hakyo'] pb-[40px]">편지 보내기</h1>
      </div>

      <div className="bg-[#FFFFFF] flex flex-col w-[1000px] h-[500px] border-[9px] border-solid border-[#CB0000] rounded-[37px] shadow-[0_4px_4px_#00000040] p-[20px]">
        <label htmlFor="title" className="text-[20px] font-semibold mb-[10px] text-[30px]">
          받는 사람:
        </label>
        <input
          id="title"
          type="text"
          placeholder="받는 사람을 입력하세요"
          value={toName}
          onChange={(e) => setToName(e.target.value)}
          className="w-full h-[50px] border-[2px] border-gray-300 rounded-[8px] px-[10px] mb-[20px] focus:outline-none focus:border-[#CB0000]"
        />
        <label htmlFor="title" className="text-[20px] font-semibold mb-[10px] text-[30px]">
          보내는 사람:
        </label>
        <input
          type="text"
          placeholder="보내는 사람"
          value={fromName}
          onChange={(e) => setFromName(e.target.value)}
        />
        {/* 편지 내용 */}
        <label htmlFor="content" className="text-[30px] font-semibold mb-[10px]">
          편지 내용:
        </label>
        <textarea
          id="content"
          placeholder="내용을 입력하세요"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-[400px] border-[2px] border-gray-300 rounded-[8px] px-[10px] py-[10px] resize-none focus:outline-none focus:border-[#CB0000]"
        ></textarea>
      </div>



      <div className="relative flex items-center justify-center mt-[58px]">
        <button
          onClick={sendButtonClick}
          className="flex w-[678px] h-[93px] bg-[#B61111] rounded-[12px] text-white text-[36px] font-['Hakyo'] px-[20px] items-center justify-center mx-[58px]">
          편지 보내기
        </button>

        <button
          onClick={homeButtonClick}
          className="absolute right-[-90px] text-[60px] font-['Hakyo'] flex items-center justify-center mr-[20px]"
        >
          🏠
        </button>
      </div>


    </main>

  );

}