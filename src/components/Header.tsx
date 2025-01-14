import Image from "next/image"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
//import Cookies from "js-cookie";

const Header = () => {
  const [isLogin, setIsLogin] = useState([false]);
  const googleLoginPage = "https://accounts.google.com/o/oauth2/v2/auth?client_id=526903298668-in7ec446ogrb9ji9u5vendfcb433dp5d.apps.googleusercontent.com&redirect_uri=http://localhost:3000/oauth/callback/google&response_type=code&scope=email"
  //구글 OAuth2.0 소셜 로그인 제공 화면 url
  const router = useRouter();

  const handleGoolgleLogin = () => {
    router.push(googleLoginPage);
  }

  // useEffect(() => {
  //   setIsLogin(Boolean(Cookies.get("accessToken")));
  // });

  return (
    <header className="bg-[#4b4b4b] flex justify-between items-center h-[36px]">
      <div className="text-white flex items-center py-[10px] px-[10px]">
        <h1 className="text-[15px] font-['Hakyo']"> 💌 </h1>
        <h1 className="text-[14px] font-['Hakyo']">연말 편지 우체통 </h1>
      </div>

      <div className="bg-[#FFFFFF] flex items-center w-[150px] h-[20px] rounded-[4px] pl-[1px] mr-[10px]">
        <Image src="/images/image.png" alt="google icon" width={20} height={20}></Image>
        <button onClick={handleGoolgleLogin} className="text-[11px] justify-between">Google 로그인하고 쓰기 </button>
      </div>
    </header>
  );
};

export default Header;