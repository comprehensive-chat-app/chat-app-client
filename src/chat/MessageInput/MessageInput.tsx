import { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';
import axios from 'axios';
import { Button, Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import * as Styled from './Styles';

export const MessageInput = () => {
  const [text, setText] = useState('');

  const executeSendMessage = async () => {
    await axios.post('http://localhost:3000/message/add', { text });
    setText('');
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      executeSendMessage();
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  return (
    <Styled.Root>
      <InputGroup>
        <Input
          value={text}
          placeholder="Write a message..."
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
        <InputRightAddon>
          <Button colorScheme="teal" onClick={executeSendMessage}>
            Send
          </Button>
        </InputRightAddon>
      </InputGroup>
    </Styled.Root>
  );
};
