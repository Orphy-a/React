import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CounterContextProvider } from "./contexts/CounterContext.jsx";
import { UserContextProvider } from "./contexts/UserContext.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* contextProvider로 감싸서 App 하위 모든 컨포넌트에 컨텍스트를 제공 */}

    <Provider store={store}>
      <UserContextProvider>
        <CounterContextProvider>
          <App />
        </CounterContextProvider>
      </UserContextProvider>
    </Provider>
  </StrictMode>
);
