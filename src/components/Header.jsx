// Header component
import Image from "next/image"

const Header = () => {
  const headerStyle = {
    height: '106px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#A60606',
  };

  const leftContainerStyle = {
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    padding: '35px 94px',
  };

  const rightContainerStyle = {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: '368px',
    height: '69px',
    borderRadius: '9px',
    marginRight: '119px',
  };

  return (
    <header style={headerStyle}>
      <div style={leftContainerStyle}>
        <h1 className="text-[55px] font-['Hakgyoansim']"> 💌 </h1>
        <h1 className="text-[32px] font-['Changwon']">연말 편지 우체통 </h1>
      </div>

      <div style={rightContainerStyle}>
        <Image src="/images/image.png" alt="google icon" width={68} height={50}></Image>
        <h1 className="text-[26px] ">Google 로그인하고 쓰기 </h1>
      </div>
    </header>
  );



};


export default Header;