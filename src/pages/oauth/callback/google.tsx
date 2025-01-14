import instance from "@/api/instance";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";

const googleLogin = () => {
  const router = useRouter();
  const { code } = router.query

  const googleToken = async () => {
    if (!code) return;

    try {
      const response = await instance.get(
        `/oauth/callback?code=${code}&provider=google`
      );
      if (response.status == 200) {
        Cookies.set("accessToken", response.data.access_token, {
          expires: 1,
        });
        const name = response.data.name;
        Cookies.set("userName", name || "익명", { expires: 1 });
        router.push("/");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
      router.push("/");
    }
  };

  useEffect(() => {
    googleToken();
  }, [code]);

  return <div className="bg-back w-full h-screen">구글 로그인 처리중...</div>;
};


export default googleLogin;