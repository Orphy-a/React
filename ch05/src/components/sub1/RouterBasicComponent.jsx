import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { HelloComponent } from "./HelloComponent";
import { GreetingComponent } from "./GreetingComponent";
import { WelcomeComponent } from "./welcomeComponent";

export const RouterBasicComponent = () => {
  return (
    <div className="RouterBasicComponent">
      <h4>RouterBasicComponent</h4>

      <p>
        <Link to={"/hello"}>hello</Link>
        <br />
        <Link to={"/welcome"}>welcome</Link>
        <br />
        <Link to={"/greeting"}>greeting</Link>
      </p>

      <Routes>
        <Route path="/hello" element={<HelloComponent />} />
        <Route path="/welcome" element={<WelcomeComponent />} />
        <Route path="/greeting" element={<GreetingComponent />} />
      </Routes>
    </div>
  );
};
