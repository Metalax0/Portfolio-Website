import ProjectTemplate from "./ProjectTemplate";
import projectData from "../../JsonData/projectData.json";
import "./style.css";

const ProjectPage = () => {
  return (
    <div className="ProjectPage">
      {projectData.map((item) => (
        <ProjectTemplate
          projectTitle={item.title}
          projectAbout={item.about}
          projectBackground={item.background}
          projectImage={item.imageSlideshow}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default ProjectPage;
