import React from "react";
import { Link } from "react-router-dom";

const Paging = ({ serverData, cate1, cate2 }) => {
  const renderingNumbers = () => {
    const numbers = [];
    for (let i = serverData.start; i <= serverData.end; i++) {
      numbers.push(
        <Link
          key={i}
          to={`/board/list?cate1=${cate1}&cate2=${cate2}&pg=${i}`}
          className={`num${serverData.pg === i ? " current" : ""}`}
        >
          {i}
        </Link>
      );
    }
    return numbers;
  };

  const currentPage = serverData.pg;
  const prevGroupEnd = Math.floor((currentPage - 1) / 10) * 10;
  const nextGroupStart = Math.floor((currentPage - 1) / 10) * 10 + 11;

  // 전체 페이지 수 계산 (한 페이지에 10개씩 가정)
  const totalPage = Math.ceil(serverData.total / 10);
  const hasNextGroup = nextGroupStart <= totalPage;

  return (
    <div className="page">
      <Link
        to={`/board/list?cate1=${cate1}&cate2=${cate2}&pg=${prevGroupEnd}`}
        className="prev"
        style={{ visibility: prevGroupEnd > 0 ? "visible" : "hidden" }}
      >
        이전
      </Link>
      {renderingNumbers()}
      {hasNextGroup && (
        <Link
          to={`/board/list?cate1=${cate1}&cate2=${cate2}&pg=${nextGroupStart}`}
          className="next"
        >
          다음
        </Link>
      )}
    </div>
  );
};

export default Paging;
