import React,{useState} from 'react';
import './App.css';
import Home from "./Home";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./Chatbot/ActionProvider";
import MessageParser from "./Chatbot/MessageParser";
import config from "./Chatbot/config";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
// import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

function App() {
  const [chat, setchat] = useState(false);
  function HandelChaticon(){
    if(chat){
      setchat(false);
    }else{
      setchat(true);
    }
  }
  return (
    <>
    <Home />
    <div className="chat-setup">
    <div onClick={HandelChaticon} className="chat-icon">
       <ChatBubbleIcon />
    </div>
    <div className="chatbot">
      { chat
      ? <div> <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} /> </div>
      : null
      }
    </div>
    </div>
    </>
  );
}

export default App;
