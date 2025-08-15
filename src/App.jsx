import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import BlogDetail from "./screens/BlogDetail/BlogDetail";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./screens/NotFound/NotFound";
import BlogInput from "./components/Input/BlogInput";
import BlogListItem from "./components/BlogList/BlogList";
import BlogList from "./screens/BlogList/BlogList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <BlogInput />
      <BlogListItem />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* http://abc.com/bloglist */}
        <Route path="/bloglist" element={<BlogList />}>
          {/* http://abc.com/bloglist/comment */}
          <Route path="comment" element={<Comment />} />
        </Route>
        {/* http://abc.com/blogdetail/1, http://abc.com/blogdetail/2 */}
        <Route path="/blogdetail/:id" element={<BlogDetail />} />
        {/* http://abc.com/abcd, http://abc.com/bdef  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
