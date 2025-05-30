import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useCates from "../../hooks/useCates";
import { getArticleAll } from "../../api/articleAPI";
import Paging from "./paging";

const initState = {
  dtoList: [],
  cate: null,
  pg: 0,
  size: 0,
  total: 0,
  startNo: 0,
  start: 0,
  end: 0,
  prev: false,
  next: false,
};

const List = () => {
  const [cate1, cate2] = useCates();

  const [serverData, setServerData] = useState(initState);

  const [queryParams] = useSearchParams();
  const pg = queryParams.get("pg") || 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArticleAll(pg, cate2);
        setServerData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [pg, cate2]);

  return (
    <div id="board">
      <section className="list">
        <nav>
          <form action="#">
            <input
              type="text"
              name="search"
              placeholder="제목 키워드, 글쓴이 검색"
            />
            <input type="submit" value="검색" />
          </form>
        </nav>
        <h1>글목록</h1>
        <table border="0">
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>날짜</th>
            <th>조회</th>
          </tr>
          {serverData.dtoList.map((article, index) => (
            <tr key={index}>
              <td>{serverData.startNo - index}</td>
              <td>
                <Link
                  to={`/board/view?cate1=${cate1}&cate2=${cate2}&no=${article.no}`}
                >
                  {article.title}[{article.comment}]
                </Link>
              </td>
              <td>{article.writer}</td>
              <td>{String(article.rdate).substring(0, 10)}</td>
              <td>{article.hit}</td>
            </tr>
          ))}
        </table>
        <Paging serverData={serverData} cate1={cate1} cate2={cate2} />

        <Link
          to={`/board/write?cate1=${cate1}&cate2=${cate2}`}
          class="btn btnWrite"
        >
          글쓰기
        </Link>
      </section>
    </div>
  );
};

export default List;
