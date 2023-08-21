import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getArticles = createAsyncThunk(
  "articles/getArticles",
  async () => {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  }
);

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
    });
  },
});

export default articleSlice.reducer; //
