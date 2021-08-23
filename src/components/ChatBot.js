import React from "react";
import bot from '../assets/images/bot.png';


const ChatBot = () => {
  const showChatBot = () => {
    document.querySelector(".overlay").classList.add("active");
  };

  const displayChatBot = () => {
    if (document.querySelector(".overlay").classList.contains("active")) {
      document.querySelector(".active").addEventListener("click", () => {
        document.querySelector(".overlay").classList.remove("active");
      });
    }
  };

  return (
    <React.Fragment>
      <div
        className="overlay"
        onClick={() => {
          displayChatBot();
        }}
      >
        <iframe
          className="iframeBot"
          width="350"
          height="430"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/fce27d5e-6917-4ae2-9c92-856a79a249b9"
        ></iframe>
      </div>

      <div className="divBot" onClick={() => showChatBot()}>
        <img src={bot} width={80} height={80} alt="COBOT" />
      </div>
    </React.Fragment>
  );
};

export default ChatBot;
