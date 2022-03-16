import "./style.css";

const BlogTemplateHome = (props) => {
  return (
      <div className="gridItem">
        <img className="imgBlogs" src={props.blogImage} />
        <div className="homeBlogTitle">{props.blogTitle}</div>
        <p className="homeBlogContent">{props.blogContent}...</p>
      </div>
  );
};

export default BlogTemplateHome;
