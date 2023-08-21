import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {article.id}
        </Typography>
        <Typography variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2">{article.body}</Typography>
      </CardContent>
      <CardActions>
        <Button
          className="details__btn"
          onClick={() => navigate(`/details/${article.id}`)}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
