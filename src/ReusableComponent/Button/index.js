import "./style.css";

const Button = (props) => {
  let buttonStyle = { width: props.buttonWidth, height: props.buttonHeight };

  return (
    <button onClick={props.onClick} className="button" style={buttonStyle}>
      {props.buttonName}
    </button>
  );
};

export default Button;
