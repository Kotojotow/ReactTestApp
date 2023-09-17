import React, { useState } from 'react';

function ChatWindow() {
  const [messages, setMessages] = useState([]); // Tablica wiadomości
  const [inputMessage, setInputMessage] = useState(''); // Stan dla wprowadzania wiadomości

  // Funkcja obsługująca wysyłanie wiadomości
  const sendMessage = () => {
    if (inputMessage.trim() === '') return; // Sprawdzamy, czy wiadomość nie jest pusta

    const newMessage = {
      text: inputMessage,
      timestamp: new Date().toLocaleTimeString(), // Dodajemy znacznik czasu
    };

    setMessages([...messages, newMessage]); // Dodajemy nową wiadomość do listy
    setInputMessage(''); // Czyścimy pole wprowadzania wiadomości
  };

  return (
    <div className="chat-window">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <span className="timestamp">{message.timestamp}</span>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Wpisz wiadomość..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Wyślij</button>
      </div>
    </div>
  );
}

export default ChatWindow;