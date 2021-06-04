import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {TMessage} from "./types";

const fetch = async () => {
  const response = await axios('http://localhost:3000/message/list');
  return response.data;
}

export const MessageList = () => {
  const [messages, setMessages] = useState<TMessage[]>([]);

  useEffect(() => {
    fetch().then((data) => setMessages(data));
  }, []);

  return (
    <div>
      {messages.map((message) => <Fragment key={message.id}>{message.text}</Fragment>)}
    </div>
  );
};