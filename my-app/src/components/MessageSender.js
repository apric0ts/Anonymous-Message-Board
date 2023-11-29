import React, { useState } from "react";

function MessageSender({ sendMessageFunction }) {
    const [messageText, setMessageText] = useState("");
  
    const handleInputChange = (event) => {
        setMessageText(event.target.value);
    };
  
    const sendMessage = () => {
      // Make a POST request to your Flask backend
      fetch("http://127.0.0.1:5000/api/send-message", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messageText }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server
          console.log(data);

          // Call the function from the main app
            sendMessageFunction(data);

        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    
    return (
      <div className="message-sender">
        <div class="input-container">
        <input
          type="text"
          class="wider-input"
          placeholder="Enter an anonymous message"
          value={messageText}
          onChange={handleInputChange}
        />
        </div>
        
        <div>
            <button onClick={sendMessage}>Send Message</button>
        </div>
        

      </div>
    );
  }
  
  export default MessageSender;