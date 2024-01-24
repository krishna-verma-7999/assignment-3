import Header from "./components/header";
import Form from "./components/form";
import { useAuth } from "./hooks/use-auth";
import Home from "./components/home";

function App() {
  const { authenticated, logoutHandler } = useAuth();

  // if (authenticated === false) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div style={{ height: "100%" }}>
      <Header isAuthorized={authenticated} logoutHandler={logoutHandler} />

      {authenticated ? <Home /> : <Form />}
    </div>
  );
}

export default App;
