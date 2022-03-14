import "./style.css";
import MainContent from "./MainContent";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Skills from "./Skills";

const HomePage = () => {
  return (
    <div className="HomePage">
      <MainContent />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
};

export default HomePage;
