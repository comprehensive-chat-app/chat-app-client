import React from 'react';
import './App.css';
import {MessageList} from "./message/MessageList";
import {AddNewMessage} from "./message/AddNewMessage";

function App() {

  const handleSubmit = (text: string) => {
    console.log(text);
  };

  return (
    <div>
      <MessageList />
      <AddNewMessage onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
