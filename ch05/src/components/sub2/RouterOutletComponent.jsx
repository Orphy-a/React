import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Child1Component } from "./Child1Component";
import { Child2Component } from "./Child2Component";
import { ParentComponent } from "./parentComponent";

export const RouterOutletComponent = () => {
  return (
    <div className="RouterOutletComponent">
      <h4>중첩 라우팅</h4>
      <p>
        <Link to={"/parent"}>parent</Link>&nbsp;
        <Link to={"/parent/child1"}>child1</Link>&nbsp;
        <Link to={"/parent/child2"}>child2</Link>&nbsp;
      </p>
      <Routes>
        <Route path="/parent" element={<ParentComponent />}>
          <Route path="child1" element={<Child1Component />}></Route>
          <Route path="child2" element={<Child2Component />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
