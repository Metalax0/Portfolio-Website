import Navbar from "./NavBar";
import Home_MainContent from "./Home_MainContent";
import Home_Projects from "./Home_Projects";
import Home_Blogs from "./Home_Blogs";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home_MainContent />
      <Home_Projects />
      <Home_Blogs />
      <Footer />
    </div>
  );
}

export default App;
