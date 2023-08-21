import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../store/ArticleSlice";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const { articles } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <>
      {articles.length ? (
        <div className="list">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default ArticleList;
