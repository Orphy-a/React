import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [title, setTitle] = useState(["가나다1", "가나다2", "가나다3"]);

  const [hit, setHit] = useState(Array(title.length).fill(0));
  //const [hit, setHit] = useState(0);

  const [modal, setModal] = useState(null);

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <div style={{ color: "white", fontSize: "30px" }}>개발 Blog</div>
        </div>

        {title.map((a, i) => (
          <div key={i}>
            <div className="list">
              <h4
                onClick={() => {
                  setModal(modal === i ? null : i);
                }}
              >
                {title[i]}{" "}
                <span
                  onClick={(e) => {
                    e.stopPropagation();

                    const newHit = [...hit];
                    newHit[i] += 1;
                    setHit(newHit);
                  }}
                >
                  {" "}
                  ★ {hit[i]}
                </span>
              </h4>
              <p>날짜</p>
              {modal === i ? <Modal /> : null}
              <hr />
            </div>
          </div>
        ))}
      </div>
    </>
  );

  function Modal() {
    return (
      <>
        <div className="modal">
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
      </>
    );
  }
}

export default App;
