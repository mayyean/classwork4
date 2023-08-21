import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./ArticleSlice";

export default configureStore({
  reducer: {
    articles: articleReducer,
  },
});
