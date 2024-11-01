// 아래의 import문으로 next/image의 Image 컴포넌트를 사용할 수 있습니다.
import Image from "next/image"

// 아래의 import문으로 MessageBox 컴포넌트를 사용할 수 있습니다.
import MessageBox from "@/components/MessageBox";

export default function Home() {
  const mainstyle = {
    backgroundColor: '#FFDDE3',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    alignItems: 'center', 
  };

  const titleStyle = {
    padding: '147px 0px 0px 0px',
  };

  const sentenceStyle = {
    padding: '58px',
  };

  const buttonStyle = {
    display: 'flex',
    width: '678px',
    height: '93px',
    backgroundColor: '#B61111',
    borderRadius: '12px',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  };



  return (
    <main style={mainstyle}>
      <div style={titleStyle}>
        <h1 className="text-[120px] font-['Changwon']">연말 편지 우체통</h1>
      </div>

      <div style={sentenceStyle}>
        <h2 className="text-[36px] font-['Hakgyoansim']">💌  김민수님의 연말 편지 우체통으로 00건의 편지가 도착했어요!</h2>
      </div>

      <div style={buttonStyle}>
        <h2 className="text-[36px] font-['Hakgyoansim']">편지 쓰러 가기</h2>
      </div>

    </main>
  );
}
