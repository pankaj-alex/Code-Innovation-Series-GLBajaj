class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage
    }
  
    handleDoctorList = () => {
      const message = this.createChatBotMessage(
        "List of Doctors Based On Disease:",
        {
          widget: "Game",
        }
      );
  
      this.updateChatbotState(message);
    };

    updateChatbotState(message) {  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
    
    handleDisease =() =>{
      const message = this.createChatBotMessage(
        "Here is Our social Media Accounts Follows us !:",
        {
          widget: "Follow",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleContact =() =>{
      const message = this.createChatBotMessage(
        "Share Your Experience With Other Patient",
        {
          widget: "Contact",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleMessageParser = () => {
      const messages = this.createChatBotMessage(
        "The message parser controls how the bot reads input and decides which action to invoke.",
        { widget: "messageParser", withAvatar: true }
      );
  
      this.addMessageToBotState(messages);
    };
  
    handleDefault = () => {
      const message = this.createChatBotMessage("How can I help?", {
        withAvatar: true,
      });
  
      this.addMessageToBotState(message)
    };
  
    addMessageToBotState = (messages) => {
      if (Array.isArray(messages)) {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, ...messages],
        }));
      } else {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, messages],
        }));
      }
    };
  }
  
  export default ActionProvider;