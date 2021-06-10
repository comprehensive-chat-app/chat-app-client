import { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';
import axios from 'axios';
import { Textarea } from '@chakra-ui/react';

export const AddNewMessage = () => {
  const [text, setText] = useState('');

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = async (
    e,
  ) => {
    if (e.key === 'Enter') {
      await axios.post('http://localhost:3000/message/add', { text });
      setText('');
    }
  };

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setText(e.target.value);
  };

  return (
    <Textarea
      value={text}
      placeholder="Write a message..."
      onKeyDown={handleKeyDown}
      onChange={handleChange}
    />
  );
};
