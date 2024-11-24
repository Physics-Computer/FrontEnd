import { useState, useEffect } from "react";
import axios from "axios";
export default function MessageBox() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080/messages?name=김민수");
        setMessages(res.data); 
      } catch (error) {
        console.error("불러오기 실패", error);
      }
    };
    fetchMessages(); 
  }, []);  

  return (
    <div className="message-container">
      {messages.length > 0 ? (
        messages.map((message, index) => (
          <div key={index} className="message-box">
            <p>받는 사람: {message.toName}</p>
            <p>보낸 사람: {message.fromName}</p>
            <p>메시지: {message.message}</p>
          </div>
        ))
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  );
}

