import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Logo from "../assets/logo.png"
import userAvatar  from "../assets/avatar.png"  
import aiAvatar  from "../assets/Aichat.png"
import SendBtn from "../assets/btn.png"

const ChatUser = () => {

    const [userChatMessages, setuserChatMessages] = useState(() => {
        const storeData = localStorage.getItem("messagesStore");
        return storeData ? JSON.parse(storeData) : [];
    });

    const [userInput, setUserInput] = useState("");

    const userImg = {userAvatar};
    const aiImg = {aiAvatar}

    useEffect(() => {
        localStorage.setItem("messagesStore", JSON.stringify(userChatMessages));
    }, [userChatMessages]);

    const sendMessage = (text) => {
        const newMessages = [
            ...userChatMessages,
            { sender: "User", text, avatar: userImg.userAvatar },
            { sender: "AI", text: "Hi! I am Default AI Chat Bot, and I'm here to answer all your questions", avatar: aiImg.aiAvatar }
        ];
        setuserChatMessages(newMessages);
        setUserInput("");
    };

    return (
        <>
            <div className=" bg-linear-to-t from-[#FEF8FB] to-[#ffffff] mb-2 rounded-md px-6 py-6 border border-slate-200">
                <div className="bg-white rounded-md">
                    <div><img src={Logo} alt="" /></div>
                </div>
                <div className="flex flex-col mb-10 mt-1 h-60 pb-5 overflow-y-auto">
                    {userChatMessages.map((messageShow, index) => (
                        <div key={index} className={`flex items-center my-1 ${messageShow.sender === "User" ? "justify-end" : "justify-start"}`}>
                            {messageShow.sender === "AI" && (
                                <img src={messageShow.avatar} alt="" className="h-10 w-10 rounded-full" />
                            )}
                            <div className={`bg-slate-200 mx-4 p-2 rounded-md`} >{messageShow.text}</div>
                            {messageShow.sender === "User" && (
                                <img src={messageShow.avatar} alt="" className="h-8 w-8 bg-slate-100 rounded-full" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex gap-8 justify-end flex-col lg:flex-row">
                    <div className="flex items-center mb-5 bg-white px-6 py-2 rounded-full border border-slate-200 text-sm">
                        What are the future benefits of choosing PCM in 11th?
                        <FiArrowUpRight className='ms-4' />
                    </div>
                    <div className="flex items-center mb-5 bg-white px-6 py-2 rounded-full border border-slate-200 text-sm">
                        How to balance board exams and competitive prep?
                        <FiArrowUpRight className='ms-4' />
                    </div>
                </div>

                <div className="w-full flex items-center">
                    <div className="relative w-full">
                        <textarea placeholder="Type your specific question here..." className="w-full rounded-md bg-white border border-slate-200 h-20 px-5 py-4 focus:outline-none" value={userInput} onChange={(e) => setUserInput(e.target.value)}  />
                        <div className="flex items-center justify-center absolute inset-y-0 right-2 cursor-pointer">
                            <img src={SendBtn} alt="" onClick={() => sendMessage(userInput)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatUser;