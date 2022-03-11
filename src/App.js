import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import HomePage from "./HomePage";
import CVPage from "./CVPage";
import ProjectPage from "./ProjectPage";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";
import ErrorPage from "./ErrorPage";

function App() {
  var [navActive, setnavActive] = useState(["activeLink", "", "", "", ""]);

  return (
    <BrowserRouter>
      <nav>
        <div className="nav-logotext">SAMPANNA</div>
        <div className="nav-menuitem">
          <Link className={navActive[0]} to="/">
            Home
          </Link>
          <Link className={navActive[1]} to="/cv">
            CV
          </Link>
          <Link className={navActive[2]} to="/project">
            PROJECT
          </Link>
          <Link className={navActive[3]} to="/blog">
            BLOG
          </Link>
          <Link className={navActive[4]} to="/contact">
            CONTACT
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage changeState={setnavActive}/>} />
        <Route path="/cv" element={<CVPage changeState={setnavActive}/>} />
        <Route path="/project" element={<ProjectPage changeState={setnavActive}/>} />
        <Route path="/blog" element={<BlogPage changeState={setnavActive}/>} />
        <Route path="/contact" element={<ContactPage changeState={setnavActive}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <footer>*This is a placeholder for footer*</footer>
    </BrowserRouter>
  );
}

export default App;
