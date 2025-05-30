import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useCates from "../../hooks/useCates";
import { getArticle } from "../../api/articleAPI";

const View = () => {
  const [cate1, cate2] = useCates();
  const [queryParams] = useSearchParams();
  const no = queryParams.get("no");
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArticle(no);
        setArticle(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [no]);

  // article이 없으면 로딩 메시지 출력
  if (!article) {
    return <div>글을 불러오는 중입니다...</div>;
  }

  return (
    <div id="board">
      <section className="view">
        <h1>글보기</h1>
        <table border="0">
          <tr>
            <th>제목</th>
            <td>
              <input
                type="text"
                name="title"
                value={article.title || ""}
                readOnly
              />
            </td>
          </tr>
          <tr>
            <th>파일</th>
            <td>
              {article.files &&
                article.files.map((file, idx) => (
                  <p key={idx}>
                    <a href={file.url}>{file.name}</a>&nbsp;
                    <span>{file.downloadCount}</span>회 다운로드
                  </p>
                ))}
              {(!article.files || article.files.length === 0) && (
                <p>첨부파일이 없습니다.</p>
              )}
            </td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
              <textarea name="content" readOnly value={article.content || ""} />
            </td>
          </tr>
        </table>

        <div>
          <a href="#" className="btn btnRemove">
            삭제
          </a>
          <a
            href={`./modify?cate1=${cate1}&cate2=${cate2}&no=${no}`}
            className="btn btnModify"
          >
            수정
          </a>
          <a
            href={`./list?cate1=${cate1}&cate2=${cate2}`}
            className="btn btnList"
          >
            목록
          </a>
        </div>
        {/* 댓글 목록, 댓글쓰기 폼 생략 */}
      </section>
    </div>
  );
};

export default View;
