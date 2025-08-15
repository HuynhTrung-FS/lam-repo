function BlogItem({ blog }) {
  const handleDeleteTodo = () => {
    //......
  };
  return (
    <li>
      <span>{blog.content}</span>
      <button onClick={handleDeleteTodo}> Delete</button>
    </li>
  );
}

export default BlogItem;
