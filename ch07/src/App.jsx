import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { User1Component } from "./components/user1/User1Component";
import { User2Component } from "./components/user2/User2Component";

function App() {
  return (
    <>
      <h3>ch07 리액트 HTTP 통신</h3>
      <BrowserRouter>
        <User1Component />
        <User2Component />
      </BrowserRouter>
    </>
  );
}

export default App;
