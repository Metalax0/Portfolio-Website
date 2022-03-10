import Navbar from "./NavBar";
import Home_MainContent from "./Home_MainContent";
import Home_Projects from "./Home_Projects";
import Home_Blogs from "./Home_Blogs";
import Footer from "./Footer";
import Contact from "./Contact";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home_MainContent />
      <Skills />
      <Home_Projects />
      <Home_Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
