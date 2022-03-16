import "./style.css";
import blogData from "../../../blogData.json";
import BlogTemplateHome from "./BlogTemplateHome";

const Home_Blogs = () => {
  return (
    <div className="blogsContainer">
      <label className="blockTitleBlog"> BLOGS </label>
      <div className="gridContainer">
        {blogData.map((item) => (
          <BlogTemplateHome
            blogTitle={item.title}
            blogContent={item.previewContent}
            blogImage={item.image}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home_Blogs;
