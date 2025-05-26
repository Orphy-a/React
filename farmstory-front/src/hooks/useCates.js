import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export const useCates = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const pathValues = location.pathname.split("/");

  const cate1 = pathValues[1];
  const cate2 = pathValues[2];

  return [cate1, cate2];
};

export default useCates;
