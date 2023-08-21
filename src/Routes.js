import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticleDetail from "./components/ArticleDetail";

const Routes = () => {
  return (
    <Routes>
      <Route path="/details/:id" element={<ArticleDetail />} />
    </Routes>
  );
};

export default Routes;
