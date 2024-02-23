import { useEffect } from 'react';
import { io } from 'socket.io-client';
import './App.css'

function App() {
  useEffect(() => {
  const socket = io("http://localhost:3000", {
    autoConnect: false,
  });
  return () => {
    socket.connect();
  };
}, []);

  return (
    <>
      <p>hello</p>
    </>
  )
}

export default App
