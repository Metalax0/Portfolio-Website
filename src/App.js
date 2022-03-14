import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./Pages/HomePage";
import CVPage from "./Pages/CVPage";
import ProjectPage from "./Pages/ProjectPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import ErrorPage from "./Pages/ErrorPage";

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
        <Route
          path="/"
          element={<HomePage setnavActive={setnavActive} exact />}
        />
        <Route
          path="/cv"
          element={<CVPage setnavActive={setnavActive} exact />}
        />
        <Route
          path="/project"
          element={<ProjectPage setnavActive={setnavActive} />}
          exact
        />
        <Route
          path="/blog"
          element={<BlogPage setnavActive={setnavActive} />}
          exact
        />
        <Route
          path="/contact"
          element={<ContactPage setnavActive={setnavActive} />}
          exact
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <footer>*This is a placeholder for footer*</footer> */}
    </BrowserRouter>
  );
}

export default App;
