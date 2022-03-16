import "./style.css";

const Button = (props) => {
  let buttonStyle = { width: props.buttonWidth, height: props.buttonHeight };
  return (
    <>
      <button className="button" style={buttonStyle}>
        {props.buttonName}
      </button>
    </>
  );
};

export default Button;
