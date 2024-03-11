import { MouseEvent, useEffect , useState } from 'react';
import { io } from 'socket.io-client';


const socket = io("http://localhost:3000", {
  autoConnect: false,
  reconnection: false,
});
function Chat() {//Type Assertion
  const [Message, setMessage] = useState<string>('');
  useEffect(() => {
  
  return () => {
    socket.connect();
  };
}, []);//Done to execute only once(connection to the socket)
function handleClick(e: MouseEvent) {
  e.preventDefault(); //prevent refresh of the page
 
  socket.emit('chat message', Message);
  setMessage('');
  //empties the input field
}
  return (
    <>
      <input onChange={e => setMessage(e.target.value)} type='text' name="msg" value={Message}/>
      <button type='submit' onClick={handleClick}>Send</button>
    </>
  )
}

export default Chat;