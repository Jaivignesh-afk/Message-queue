import { MouseEvent, useEffect , useRef } from 'react';
import { io } from 'socket.io-client';
import './App.css'

function App() {
  const message = useRef<HTMLInputElement>(null); //Type Assertion
  useEffect(() => {
  const socket = io("http://localhost:3000", {
    autoConnect: false,
    reconnection: false,
  });
  
  return () => {
    socket.connect();
  };
}, []);//Done to execute only once(connection to the socket)
function handleClick(e: MouseEvent<HTMLButtonElement, Event>) {
  e.preventDefault(); //prevent refresh of the page
 
  console.log(message.current!.value);
  
  e.currentTarget.value = ''; //empties the input field
}
  return (
    <>
      <input ref={message} type='text' name="msg" value=""/>
      <button type='submit' onClick={handleClick}>Send</button>
    </>
  )
}


export default App
