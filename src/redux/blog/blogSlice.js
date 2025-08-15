import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [
      {
        id: 1,
        content: "Learn react to develop web apps",
        completed: true,
      },
    ],
  },
  reducers: {
    addBlog: (state, action) => {
      const newBlog = action.payload;
      ``;
      state.blogs.push(newBlog);
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog !== action.payload);
    },
  },
});

export const { addBlog, deleteBlog } = blogSlice.actions;
// blogSlice sẽ có thuộc tính reducer
export default blogSlice.reducer;
