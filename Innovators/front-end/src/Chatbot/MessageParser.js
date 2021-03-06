
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state
    }
  
    parse = (message) => {
      const lowerCase = message.toLowerCase();
  
      if (
        lowerCase.includes("messageparser") ||
        lowerCase.includes("parse") ||
        lowerCase.includes("parser") ||
        lowerCase.includes("message parser")
      ) {
        return this.actionProvider.handleMessageParser();
      }else{
      return this.actionProvider.handleDefault();
      }
    };
  }
  
  export default MessageParser;