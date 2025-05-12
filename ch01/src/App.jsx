import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/*
  날짜 : 2025/05/12
  이름 : 오재영
  내용 : 1장 리액트 개요 및 개발환경 설정

  개발 환경 구축
1) Node.js 설치
2) VSCode 플러그인 설치
  - React Snippet 도구(ES7으로 시작하는 제목)
  - ESLint
  - Prettier
3) 브라우저 확장 도구 (webStore)
  - React Developer Tool

프로젝트 생성(터미널)
> npm create vite@latest
  - React 선택, Javascript + SWC 선택

프로젝트 의존성 설치(프로젝트 경로 지정)
> npm install


프로젝트 실행(터미널)
> npm run dev

배포
> npm run build
 - dist 파일이 생성된다.(만들어진 dist 파일을 배포한다.)
 
> npx serve -s dist
 - Node.js에서 제공하는 내장서버 실행

 */

function App() {
  return (
    <>
      <h3>ch01.React 개요 및 개발환경 설정</h3>

      <h4>Hello World!</h4>
    </>
  );
}

export default App;
