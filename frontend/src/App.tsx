import { MouseEvent, useEffect , useState} from 'react';
import { Socket, io } from 'socket.io-client';
import './App.css'

function App() {//Type Assertion
  const [Message, setMessage] = useState('');
  var socket: Socket;
  useEffect(() => {
  socket = io("http://localhost:3000", {
    autoConnect: false,
    reconnection: false,
  });
  
  return () => {
    socket.connect();
  };
}, []);//Done to execute only once(connection to the socket)
function handleClick(e: MouseEvent<HTMLButtonElement, Event>) {
  e.preventDefault(); //prevent refresh of the page
 
  socket.emit('chat message', Message);
  setMessage('');
  //empties the input field
}
  return (
    <>
      <input onChange={e => setMessage(e.target.value)} type='text' name="msg" value={Message ?? ''}/>
      <button type='submit' onClick={handleClick}>Send</button>
    </>
  )
}


export default App;
