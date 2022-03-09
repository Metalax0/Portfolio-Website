import "./index.css";
import LineBlock from "../../ReusableComponent/LineBlock";

const ContentBlock = (props) => {
  return (
    <div className="contentContainer">
      <div className="textLeft">{props.Left}</div>
      <div className="middleContainer">
        <div className="upperDiv">
          <LineBlock />
        </div>
        <div className="yearDiv">{props.year}</div>
        <div className="lowerDiv">
          <LineBlock />
        </div>
      </div>
      <div className="textRight">{props.Right}</div>
    </div>
  );
};
export default ContentBlock;
