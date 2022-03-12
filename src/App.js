import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./HomePage";
import CVPage from "./CVPage";
import ProjectPage from "./ProjectPage";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";
import ErrorPage from "./ErrorPage";

function App() {
  var [navActive, setnavActive] = useState(["activeLink", "", "", "", ""]);

  function handleOnClick(arrIndex) {
    if (arrIndex == 0) setnavActive(["activeLink", "", "", "", ""]);
    else if (arrIndex == 1) setnavActive(["", "activeLink", "", "", ""]);
    else if (arrIndex == 2) setnavActive(["", "", "activeLink", "", ""]);
    else if (arrIndex == 3) setnavActive(["", "", "", "activeLink", ""]);
    else if (arrIndex == 4) setnavActive(["", "", "", "", "activeLink"]);
  }

  useEffect(() => {
    let currentURL = window.location.pathname;
    if (currentURL == "/cv") {
      setnavActive(["", "activeLink", "", "", ""]);
    } else if (currentURL == "/project") {
      setnavActive(["", "", "activeLink", "", ""]);
    } else if (currentURL == "/blog") {
      setnavActive(["", "", "", "activeLink", ""]);
    } else if (currentURL == "/contact") {
      setnavActive(["", "", "", "", "activeLink"]);
    }
  }, []);

  return (
    <BrowserRouter>
      <nav>
        <div className="nav-logotext">SAMPANNA</div>
        <div className="nav-menuitem">
          <Link
            className={navActive[0]}
            onClick={() => handleOnClick(0)}
            to="/"
          >
            Home
          </Link>
          <Link
            className={navActive[1]}
            onClick={() => handleOnClick(1)}
            to="/cv"
          >
            CV
          </Link>
          <Link
            className={navActive[2]}
            onClick={() => handleOnClick(2)}
            to="/project"
          >
            PROJECT
          </Link>
          <Link
            className={navActive[3]}
            onClick={() => handleOnClick(3)}
            to="/blog"
          >
            BLOG
          </Link>
          <Link
            className={navActive[4]}
            onClick={() => handleOnClick(4)}
            to="/contact"
          >
            CONTACT
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage setnavActive={setnavActive} />} />
        <Route path="/cv" element={<CVPage setnavActive={setnavActive} />} />
        <Route
          path="/project"
          element={<ProjectPage setnavActive={setnavActive} />}
        />
        <Route
          path="/blog"
          element={<BlogPage setnavActive={setnavActive} />}
        />
        <Route
          path="/contact"
          element={<ContactPage setnavActive={setnavActive} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <footer>*This is a placeholder for footer*</footer> */}
    </BrowserRouter>
  );
}

export default App;
