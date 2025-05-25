import React, { useEffect, useState } from "react";

export const UseEffectComponent = () => {
  // state 선언
  const [name, setName] = useState("홍길동");
  const [age, setAge] = useState(21);

  useEffect(() => {
    // mount 단계 (처음 한번만 실행)
    console.log("mount...");

    return () => {
      // unmount 단계 (unmount시 리턴 실행)
      console.log("amount...");
    };
  }, []); // 의존성 배열(반응변수)

  useEffect(() => {
    // update 단계 (렌더링 될때마다 실행)
    console.log("update...");
  });

  useEffect(() => {
    console.log("name update...");
  }, [name]);

  useEffect(() => {
    console.log("age update...");
  }, [age]);

  useEffect(() => {
    console.log("name, age update...");
  }, [name, age]);

  return (
    <div className="UseEffectComponent">
      <h4>UseEffectComponent</h4>

      <>
        <p>이름 : {name}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <p>나이 : {age}</p>
        <input
          type="text"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </>
    </div>
  );
};
