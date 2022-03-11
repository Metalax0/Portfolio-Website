import "./index.css";
import Home_MainContent from "./Home_MainContent";
import Home_Projects from "./Home_Projects";
import Home_Blogs from "./Home_Blogs";
import Contact from "./Home_Contact";
import Skills from "./Home_Skills";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Home_MainContent />
      <Skills />
      <Home_Projects />
      <Home_Blogs />
      <Contact />
    </div>
  );
};

export default HomePage;
