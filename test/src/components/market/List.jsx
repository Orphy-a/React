import React, { useEffect, useState } from "react";
import useCates from "../../hooks/useCates";
import { useSearchParams } from "react-router-dom";
import { getProductAll } from "../../api/productAPI";
import ListItem from "./ListItem";
import Sort from "./Sort";

const List = () => {
  const initState = {
    dtoList: [],
    cate: null,
    pg: 0,
    size: 0,
    total: 0,
    startNo: 0,
    end: 0,
    prev: false,
    next: false,
  };

  const [cate1, cate2] = useCates();
  const [serverData, setServerData] = useState(initState);
  const [queryParams] = useSearchParams();
  const pg = queryParams.get("pg") || 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductAll(pg);
        console.log(data);
        setServerData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [pg]);

  return (
    <>
      <Sort />

      <table border="0">
        <thead>
          <tr>
            <th>이미지</th>
            <th>종류</th>
            <th>상품명</th>
            <th>할인</th>
            <th>포인트</th>
            <th>판매가격</th>
          </tr>
        </thead>
        <tbody>
          {serverData.dtoList.map((product, index) => (
            <ListItem key={index} product={product} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
