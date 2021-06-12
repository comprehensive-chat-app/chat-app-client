import { useEffect, useState } from 'react';
import axios from 'axios';
import { TMessage } from '../types';
import { MessageItem } from './MessageItem';
import { StackDivider, VStack } from '@chakra-ui/react';

const fetch = async () => {
  const response = await axios('http://localhost:3000/message/list?skip=0');
  return response.data;
};

export const MessageList = () => {
  const [messages, setMessages] = useState<TMessage[]>([]);

  useEffect(() => {
    fetch().then((data) => setMessages(data));
  }, []);

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
      style={{
        overflow: 'scroll',
        height: '87vh',
      }}
    >
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          text={message.text}
          nickname={message.user.nickname}
        />
      ))}
    </VStack>
  );
};
