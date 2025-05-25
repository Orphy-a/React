import "./App.css";
import { UseCallbackComponent } from "./components/UseCallbackComponent";
import { UseCustomhookComponent } from "./components/UseCustomComponent";
import { UseEffectComponent } from "./components/UseEffectComponent";
import { UseMemoComponent } from "./components/UseMemoComponent";
import { UseRefComponent } from "./components/UseRefComponent";
import { UserReducerComponent } from "./components/UserReducerComponent";
import { UseStateComponent } from "./components/UseStateComponent";

/* 
  날짜 : 2025/05/13
  이름 : 오재영
  내용 : 4장 리액트 Hooks 실습
*/

function App() {
  return (
    <>
      <h3>4장 리액트 Hooks</h3>

      {/* useRef hook */}
      <UseRefComponent />
      <UseRefComponent />

      {/* useState hook */}
      <UseStateComponent />

      {/* useReducer hook */}
      <UserReducerComponent />

      {/* useEffect hook */}
      <UseEffectComponent />

      {/* useMemo hook */}
      <UseMemoComponent />

      {/* useCallback hook */}
      <UseCallbackComponent />

      {/* useCustom hook */}
      <UseCustomhookComponent />
    </>
  );
}

export default App;
