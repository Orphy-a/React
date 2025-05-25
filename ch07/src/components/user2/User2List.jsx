import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const User2List = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("here...1");
    axios
      .get("http://localhost:8080/ch09/user2")
      .then((response) => {
        console.log("here...2");
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 수정하기
  const modifyHandler = (user) => {
    console.log(user);

    // 수정 컴포넌트 전환
    navigate(`/user2/modify?uid=${user.uid}`);
  };

  // 삭제하기
  const deleteHandler = () => {};

  //prettier-ignore
  return (
    <div className="User1List">
      <h4>User2 목록</h4>
      <table border="1">
        <tbody>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>휴대폰</th>
            <th>나이</th>
            <th>관리</th>
          </tr>
          
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.uid}</td>
              <td>{user.name}</td>
              <td>{user.hp}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={()=>{modifyHandler(user)}}>수정</button>
                <button onClick={null}>삭제</button>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};
