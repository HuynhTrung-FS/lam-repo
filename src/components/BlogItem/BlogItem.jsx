import { deleteBlog } from "../../redux/blog/blogSlice";
import { useDispatch } from "react-redux";

function BlogItem({ blog }) {
  const dispatch = useDispatch();
  const handleDeleteTodo = () => {
    dispatch(deleteBlog(blog.id)); // payload = blog.id
  };
  return (
    <li>
      <span>{blog.content}</span>
      <button onClick={handleDeleteTodo}> Delete</button>
    </li>
  );
}

export default BlogItem;
