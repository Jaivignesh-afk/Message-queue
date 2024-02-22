
import { io } from 'socket.io-client';
import './App.css'

function App() {

  const socket = io("http://localhost:3000",{
    autoConnect: false
  });
  socket.connect();
  return (
    <>
      <p>hello</p>
    </>
  )
}

export default App
