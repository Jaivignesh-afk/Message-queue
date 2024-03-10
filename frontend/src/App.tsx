import Chat from './components/Chat';
import Login from './components/Login';
import './App.css';

function App(props: {LoggedIn: boolean}) {
  return props.LoggedIn ? <Chat /> : <Login />;
}

export default App;
