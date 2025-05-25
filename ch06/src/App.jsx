import "./App.css";
import { ContextParentComponent } from "./components/ContextParentComponent";
import { ContextUserComponent } from "./components/ContextUserComponent";
import { ContextUserRegistComponent } from "./components/ContextUserRegistComponent";

/* 
  날짜 : 2025/05/15
  이름 : 오재영
  내용 : 리액트 상태관리 실습
*/

function App() {
  return (
    <>
      <h3>ch06 리액트 상태관리</h3>

      <h4>Context API 실습</h4>
      <ContextParentComponent />
      <ContextUserComponent />
      <ContextUserRegistComponent />
      <h4>Redux 실습</h4>
    </>
  );
}

export default App;
