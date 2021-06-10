import React from 'react';
import './App.css';
import { MessageList } from './message/MessageList';
import { AddNewMessage } from './message/AddNewMessage';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div>
        <MessageList />
        <AddNewMessage />
      </div>
    </ChakraProvider>
  );
}

export default App;
