import Chat from "./Chat";
import Login from "./Login";

function Home(props: { LoggedIn: boolean }) {
  return props.LoggedIn ? <Chat /> : <Login />;
}
export default Home;
