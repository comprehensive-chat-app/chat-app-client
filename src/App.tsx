import React from 'react';
import './App.css';
import { MessageList } from './chat/MessageList/MessageList';
import { MessageInput } from './chat/MessageInput/MessageInput';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div
        style={{
          margin: '10px 25px',
        }}
      >
        <MessageList />
        <MessageInput />
      </div>
    </ChakraProvider>
  );
}

export default App;
