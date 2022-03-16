import "./style.css";
import About from "./About";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Skills from "./Skills";

const HomePage = () => {
  return (
    <div className="HomePage">
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
};

export default HomePage;
