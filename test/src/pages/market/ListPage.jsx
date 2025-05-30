import React from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { MarketLayout } from "../../layouts/MarketLayout";
import List from "../../components/market/List";

export const ListPage = () => {
  return (
    <MainLayout>
      <MarketLayout>
        <List />
      </MarketLayout>
    </MainLayout>
  );
};
