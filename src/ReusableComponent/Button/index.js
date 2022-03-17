import { useNavigate } from "react-router-dom";
import "./style.css";

const Button = (props) => {
  let buttonStyle = { width: props.buttonWidth, height: props.buttonHeight };
  let navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(`/blog/${props.blogID}`);
        window.scrollTo(0, 0);
      }}
      className="button"
      style={buttonStyle}
    >
      {props.buttonName}
    </button>
  );
};

export default Button;
