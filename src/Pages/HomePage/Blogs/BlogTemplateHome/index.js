import { Link } from "react-router-dom";
import "./style.css";

const BlogTemplateHome = (props) => {
  return (
    <Link
      to={`/blog/${props.blogID}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <div className="gridItem">
        <img className="imgBlogs" src={props.blogImage} />

        <div className="homeBlogTitle">{props.blogTitle}</div>
        <p className="homeBlogContent">{props.blogContent}...</p>
      </div>
    </Link>
  );
};

export default BlogTemplateHome;
