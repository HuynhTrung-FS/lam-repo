import { useSelector } from "react-redux";
import BlogItem from "../BlogItem/BlogItem";

function BlogListItem() {
  const blogs = useSelector((state) => state.blog.blogs);
  console.log(blogs);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </ul>
    </div>
  );
}

export default BlogListItem;
