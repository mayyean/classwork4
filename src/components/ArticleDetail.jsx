import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";

const ArticleDetail = ({ articles }) => {
  const { id } = useParams(); // Заменено articleId на id
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <Typography variant="h6">Article not found</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4">{article.title}</Typography>
      <Typography variant="body1">{article.body}</Typography>
    </Container>
  );
};

export default ArticleDetail;
