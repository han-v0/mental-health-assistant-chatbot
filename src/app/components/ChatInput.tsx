"use client";
import React from "react";
import SendButton from "./SendButton";

export default function ChatInput() {
  const [message, setMessage] = React.useState("");
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMessage(event.target.value);
  }

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        placeholder="Type your message here..."
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <SendButton message={message} />
    </div>
  );
}
