import "./style.css";

const ProjectTemplate = (props) => {
  return (
    <div className="ProjectGrid">
      <div className="gridBackgroundIMG">
        <label className="ProjectTitle">{props.projectTitle}</label>
      </div>
      <div className="gridTextBlock">
        <label className="ProjectSubTitle">ABOUT</label>
        <p>{props.projectAbout}</p>
      </div>
      <div className="gridTextBlock">
        <label className="ProjectSubTitle">BACKGROUND</label>
        <p>{props.projectBackground}</p>
      </div>
      <img className="gridImage" src={props.projectImage} />
    </div>
  );
};

export default ProjectTemplate;
