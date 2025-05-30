import axios from "axios";
import { ARTICLE_LIST, ARTICLE_VIEW, ARTICLE_WRITE } from "./_http";

export const getArticleAll = async (pg, cate) => {
  try {
    const response = await axios.get(`${ARTICLE_LIST}?pg=${pg}&cate=${cate}`, {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const postArticle = async (data) => {
  try {
    const response = await axios.post(`${ARTICLE_WRITE}`, data, {
      withCredentials: true, // true로 해야 CORS 환경에서 쿠키값 전송
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getArticle = async (no) => {
  try {
    const response = await axios.get(`${ARTICLE_VIEW}/${no}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
