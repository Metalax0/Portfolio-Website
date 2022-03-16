import Button from "../../../ReusableComponent/Button";
import "./style.css";

const BlogTemplate = (props) => {
  return (
    <div className="blogList">
      <div className="TitleandSubTitle">
        <label className="blogTitle">{props.blogTitle}</label>
        <br />
        <br />
        <label className="blogAuthor">by {props.blogAuthor}</label>
      </div>
      <img src={props.blogImage} />
      <p>{props.blogBody}</p>
      <Button buttonName="READ MORE" buttonWidth="20vw" buttonHeight="3vw" />
    </div>
  );
};

export default BlogTemplate;
