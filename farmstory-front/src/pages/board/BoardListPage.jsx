import React from "react";
import { Link } from "react-router-dom"; // React Router 사용 시
import { MainLayout } from "../../layouts/MainLayout";
import { SubLayout } from "../../layouts/SubLayout";
import List from "../../components/board/List";

const BoardListPage = () => {
  return (
    <MainLayout>
      <SubLayout>
        <List />
      </SubLayout>
    </MainLayout>
  );
};

export default BoardListPage;
