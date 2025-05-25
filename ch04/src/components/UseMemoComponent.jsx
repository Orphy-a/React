import React, { useMemo, useState } from "react";

const hardCalc = (num) => {
  console.log("hardCalc...");
  for (let i = 0; i < 100000000; i++) {}
  return num + 1000;
};

const easyCalc = (num) => {
  console.log("easyCalc...");

  return num + 1000;
};

export const UseMemoComponent = () => {
  const [hardNum, setHardNum] = useState(1);
  const [easyNum, setEasyNum] = useState(1);

  // const hardResult = hardCalc(hardNum);
  // 이 코드로 실행하면 컴포넌트가 렌더링될 때마다 hardCalc(hardNum)이 실행
  // easyCalc까지 영향 받아 느려진다.

  // useMemo를 이용해 캐싱 처리
  const hardResult = useMemo(() => {
    return hardCalc(hardNum);
  }, [hardNum]);

  const easyResult = easyCalc(easyNum);

  return (
    <div className="UseMemoComponent">
      <h4>UseMemoComponent</h4>
      <p>
        hardNum :{" "}
        <input
          type="number"
          value={hardNum}
          onChange={(e) => {
            setHardNum(parseInt(e.target.value));
          }}
        />
        <span>hardResult : {hardResult}</span>
      </p>

      <p>
        easyNum :{" "}
        <input
          type="number"
          value={easyNum}
          onChange={(e) => {
            setEasyNum(parseInt(e.target.value));
          }}
        />
        <span>easyResult : {easyResult}</span>
      </p>
    </div>
  );
};
