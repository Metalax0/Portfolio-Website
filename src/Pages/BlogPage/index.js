import blogData from "../../blogData.json";
import BlogTemplate from "./BlogTemplate";
import "./style.css";

const BlogPage = () => {
  return (
    <div className="BlogPage">
      {blogData.map((item) => (
        <BlogTemplate
          blogTitle={item.title}
          blogAuthor={item.author}
          blogBody={item.body}
          blogImage={item.image}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default BlogPage;
