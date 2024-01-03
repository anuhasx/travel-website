// components/ChatBot.tsx

import React, { useState } from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      const userMessage = { text: userInput, isUser: true };
      setMessages([...messages, userMessage]);
  
      // Simulate a bot reply after a short delay
      setTimeout(() => {
        const botReply = { text: 'Auto-reply from bot', isUser: false };
        setMessages((prevMessages) => [...prevMessages, botReply]);
      }, 500);
  
      setUserInput('');
    }
  };
  return (
    <div className="w-full h-screen mx-auto pt-10 p-6 space-y-3">
      <div className="bg-green-500 p-5 rounded-2xl text-white font-bold text-center py-2  w-full">Chat Bot</div>
      <div className=" h-5/6 overflow-y-auto p-2 bg-gray-100">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.isUser ? ' text-green-600 font-semibold pr-10 w-3/4 justify-end' : 'bg-gray-200 pl-10 '
            } text-white p-2 rounded my-1`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          type="text"
          className="flex-1 p-2 border-none outline-none"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className="ml-2 p-2 bg-green-500 text-white border-none cursor-pointer"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
