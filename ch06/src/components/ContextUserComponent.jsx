import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { ContextUserRegistComponent } from "./ContextUserRegistComponent";

export const ContextUserComponent = () => {
  const { users, setUsers } = useContext(UserContext);

  return (
    <div className="ContextUserComponent">
      <h4>User List</h4>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.uid}, {user.name}, {user.age}
          </li>
        ))}
      </ul>
      <ContextUserRegistComponent />
    </div>
  );
};
