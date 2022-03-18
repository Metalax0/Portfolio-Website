import Button from "../../../ReusableComponent/Button";
import { useNavigate } from "react-router-dom";
import "../style.css";

const BlogHalfTemplate = (props) => {
  let navigate = useNavigate();
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
        onClick={() => {
          navigate(`/blog/${props.blogID}`);
          window.scrollTo(0, 0);
        }}
      />
    </div>
  );
};

export default BlogHalfTemplate;
