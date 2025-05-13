import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isValue: false };
    console.log("1. constructor (컴포넌트 생성)");
  }

  componentDidMount() {
    console.log("2. componentDidMount (마운트 완료)");
    // 데이터 요청, 타이머 등록 등
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("3. componentDidUpdate (업데이트 완료)");
    // props/state가 변경된 후 실행
  }

  componentWillUnmount() {
    console.log("4. componentWillUnmount (언마운트 직전)");
    // 타이머 해제, 이벤트 리스너 제거 등
  }

  render() {
    console.log("render (렌더링)");
    return (
      <div>
        <h4>LifeCycle Example</h4>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          증가
        </button>

        {this.state.isValue && <ChildComponent />}
      </div>
    );
  }
}
