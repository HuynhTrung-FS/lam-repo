import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../../redux/blog/blogSlice";
function BlogInput() {
  const dispatch = useDispatch();
  const [blogValue, setBlogValue] = useState("");

  const handleAddBlog = () => {
    if (blogValue.trim() === "") {
      alert("Vui long nhap noi dung!!");
      return;
    }
    const newBlog = {
      id: Date.now(),
      content: blogValue,
      completed: true,
    };
    dispatch(addBlog(newBlog));
    setBlogValue("");
  };

  const handleOnChange = (e) => {
    setBlogValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={blogValue}
        placeholder="Enter your blog"
        onChange={handleOnChange}
      />
      <button onClick={handleAddBlog}>Add Blog</button>
    </div>
  );
}

export default BlogInput;
