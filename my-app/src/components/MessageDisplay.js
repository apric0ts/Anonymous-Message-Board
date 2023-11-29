import React from "react";

const MessageDisplay = ({ data }) => {
    const { Date, Message, Time } = data;
  
    return (
      <div>
        <p class="message-text">{Message}</p>
        <p class="date-text">{Date}, {Time}</p>
        
      </div>
    );
  };

  



  export default MessageDisplay;