import { useParams } from "react-router-dom";
import blogData from "../../../JsonData/blogData.json";
import ErrorPage from "../../ErrorPage";
import "../style.css";

const BlogFullTemplate = () => {
  const params = useParams();

  for (let index = 0; index < blogData.length; index++) {
    if (blogData[index].id === params.title) {
      return (
        <div className="BlogTemplate">
          <div className="BlogTemplateContainer">
            <div className="TitleandSubTitle">
              <label className="blogTitle">{blogData[index].title}</label>
              <br />
              <br />
              <label className="blogAuthor">by {blogData[index].author}</label>
            </div>
            <img src={blogData[index].image} />
            <p>{blogData[index].body}</p>
          </div>
        </div>
      );
    }
  }

  return <ErrorPage />;
};

export default BlogFullTemplate;
