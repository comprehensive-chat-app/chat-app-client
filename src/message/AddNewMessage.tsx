import {ChangeEventHandler, KeyboardEventHandler, useState} from "react";
import axios from "axios";

export const AddNewMessage = () => {
  const [text, setText] = useState('');

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = async (e) => {
    if (e.key === "Enter") {
      await axios.post("http://localhost:3000/message/add", { text });
      setText('');
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  return <input type="text" value={text} onKeyDown={handleKeyDown} onChange={handleChange} />
};