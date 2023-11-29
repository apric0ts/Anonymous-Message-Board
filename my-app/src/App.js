import './App.css';
import React, { useState } from "react";

import AppHome from "./components/AppHome";
import MessageSender from "./components/MessageSender";
import MessageDisplay from "./components/MessageDisplay"

function App() {

  // const [messages, setMessages] = useState([]);
  

  // const handleSendMessage = (data) => {
  //   console.log("Message sent:", data);

  // };
  const [messages, setMessages] = useState([]);

  const sendMessage = (messageData) => {
    // Logic to send a message, for example, making an API request
    console.log('Sending message:', messageData);

    // Assuming the messageData is in the format of your messages
    const newMessage = messageData;

    // Update the state to include the new message
    setMessages([...messages, newMessage]);
  };

  

  return (
    <div className="App">
      <div className="App-header">
        <AppHome />
      </div>
      
      {/* Creates the message displays */}
      <section className="Scrollable-section">

        {messages.map((message, index) => (
        <MessageDisplay key={index} data={message} />
        ))}
      </section>
      
      <MessageSender sendMessageFunction={sendMessage}/>

      </div> 
  );
}

export default App;
