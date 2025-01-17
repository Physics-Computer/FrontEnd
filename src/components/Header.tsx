import Image from "next/image"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const googleLoginPage = "https://accounts.google.com/o/oauth2/v2/auth?client_id=526903298668-in7ec446ogrb9ji9u5vendfcb433dp5d.apps.googleusercontent.com&redirect_uri=http://localhost:3000/oauth/callback/google&response_type=code&scope=email"
  //구글 OAuth2.0 소셜 로그인 제공 화면 url
  const router = useRouter();

  const handleGoolgleLogin = () => {
    console.log("구글 로그인 실행");
    router.push(googleLoginPage);
  }

  const handleGoogleLogout = () => {
    console.log("구글 로그아웃 실행");
    Cookies.remove("accessToken");
    Cookies.remove("userName");
    setIsLogin(false);
    router.push('/');
  }

  useEffect(() => {
    const token = Cookies.get("accessToken");
    const name = Cookies.get("userName");

    if (token) {
      setIsLogin(true);
      setUserName(name)
    } else {
      setIsLogin(false);
      setUserName("");
    }

    // const loginStatus = async () => {
    //   const token = Cookies.get("accessToken")
    //   if (token) {
    //     setIsLogin(true);
    //     console.log("로그인 확인됨");
    //   }
    //   else {
    //     setIsLogin(false);
    //     console.log("로그아웃 확인됨");
    //   }
    // };
    // loginStatus();
  }, [router.pathname]);

  return (
    <header className="bg-[#4b4b4b] flex justify-between items-center h-[36px]">
      <div className="text-white flex items-center py-[10px] px-[10px]">
        <h1 className="text-[15px] font-['Hakyo']"> 💌 </h1>
        <h1 className="text-[14px] font-['Hakyo']">연말 편지 우체통 </h1>
      </div>

      <div className="bg-[#FFFFFF] flex items-center w-[150px] h-[20px] rounded-[4px] pl-[1px] mr-[10px]">
        <Image src="/images/image.png" alt="google icon" width={20} height={20}></Image>

        {isLogin ? (
          <button onClick={handleGoogleLogout} className="text-[11px] justify-between items-center">
            로그아웃하기
          </button>
        ) : (
          <button onClick={handleGoolgleLogin} className="text-[11px] justify-between">
            Google 로그인하고 쓰기
          </button>
        )}

      </div>
    </header >
  );
};

export default Header;