import React, { useState } from "react";
export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <div style={{borderTop:"1px solid blue"}}>
      <form className="input-container" onSubmit={(event) => sendChat(event)} style={{ margin:"10px"}}>
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit" >
          Send
        </button>
      </form>
    </div>
  );
}
