import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Option from "./options/Option";
import LinkList from "./Linklist/LinkList";

const config={
    botName:"Ateen",
    initialMessages:[createChatBotMessage("Hi I'm Ateen."),
    createChatBotMessage(
        "How can I Help You.",
        {
          withAvatar: false,
          delay: 100,
          widget:"Options"
        }
      ),
   
],
widgets:[
  // ----------------Initial Options-------------
  {
    widgetName: "Options",
   widgetFunc: (props) => <Option {...props} />,
  },
  // --------------------Find Doctors---------------
  {
    widgetName: "Game",
   widgetFunc: (props) => <LinkList {...props} />,
   props: {
    options: [
      {
        text: "Infectious diseases",
        url:
          "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
        id: 1,
      },
      {
        text: "Hereditary diseases",
        url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        id: 2,
      },
      {
        text: "Deficiency diseases",
        url: "https://frontendmasters.com", 
        id: 3,
      },  {
        text: "Physiological diseases",
        url: "https://frontendmasters.com",  
        id: 4,
      },
    ],
  },
  },
  // ----------------Follow Ateen Studio-----------
  {
    widgetName: "Follow",
    widgetFunc: (props)=> <LinkList {...props} />,
    props:{
      options: [
        {
          text: "Infectious diseases",
          url:
            "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
          id: 1,
        },
        {
          text: "Hereditary diseases",
          url:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
          id: 2,
        },
        {
          text: "Deficiency diseases",
          url: "https://frontendmasters.com", 
          id: 3,
        },  {
          text: "Physiological diseases",
          url: "https://frontendmasters.com",  
          id: 4,
        },
      ],
    }
  },
  //----------------Contact Us--------------------
  {
    widgetName:"Contact",
    widgetFunc: (props)=> <LinkList {...props} />,
    props:{
      options:[
        {
          text:"123456789",
          url:"https://chat.whatsapp.com/HPyGhfZW2Cz8nWSXMYLtq3",
          id:1,
        }]
      }
  }
],

    
}

export default config;