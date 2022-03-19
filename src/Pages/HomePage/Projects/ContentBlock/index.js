import "./style.css";
import LineBlock from "../../../../ReusableComponent/LineBlock";

const ContentBlock = (props) => {
  let leftClassName = "contentLeft";
  let rightClassName = "contentRight";
  let hrLeftClassName = "hrLineLeft";
  let hrRightClassName = "hrLineRight";

  if (typeof props.Left == "object") {
    leftClassName = "contentLeft2";
    hrLeftClassName = "hrDisable";
  } else if (typeof props.Right == "object") {
    rightClassName = "contentRight2";
    hrRightClassName = "hrDisable";
  }

  return (
    <div className="contentContainer">
      <div className="leftContainerProjects">
        <div className={leftClassName}>
          <div className="contentLeftText">{props.Left}</div>
        </div>
        <hr className={hrLeftClassName} />
      </div>
      <div className="middleContainerCenter">
        <div className="upperDiv">
          <LineBlock />
        </div>
        <div className="yearDiv"> {props.year} </div>
        <div className="lowerDiv">
          <LineBlock />
        </div>
      </div>
      <div className="rightContainerProjects">
        <hr className={hrRightClassName} />
        <div className={rightClassName}>
          <div className="contentRightText">{props.Right}</div>
        </div>
      </div>
    </div>
  );
};
export default ContentBlock;
