import { useState } from "react";
import axios from "axios";

export default function MessageBox() {
  const [message, setMessage] = useState("");
  const [toName, setToName] = useState("");
  const [fromName, setFromName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080/messages?name=김민수", {
        message,
        toName,
        fromName,
      });
      console.log("편지 전송 성공:", res.data);
    } catch (error) {
      console.error("편지 전송 실패:", error);
    }
  };

  
}