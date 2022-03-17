import blogData from "../../blogData.json";
import HalfTemplate from "./HalfTemplate";
import "./style.css";

const BlogPage = () => {
  return (
    <div className="BlogPage">
      {blogData.map((item) => (
        <HalfTemplate
          blogTitle={item.title}
          blogAuthor={item.author}
          blogBody={item.body}
          blogImage={item.image}
          blogID={item.id}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default BlogPage;
