import Button from "../../../ReusableComponent/Button";
import "../style.css";

const BlogHalfTemplate = (props) => {
  return (
    <div className="HalfTemplate">
      <div className="TitleandSubTitle">
        <label className="blogTitle">{props.blogTitle}</label>
        <br />
        <br />
        <label className="blogAuthor">by {props.blogAuthor}</label>
      </div>
      <img src={props.blogImage} />
      <p>{props.blogBody}</p>
      <Button
        blogID={props.blogID}
        buttonName="READ MORE"
        buttonWidth="20vw"
        buttonHeight="3vw"
      />
    </div>
  );
};

export default BlogHalfTemplate;
