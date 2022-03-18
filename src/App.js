import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./Pages/HomePage";
import CVPage from "./Pages/CVPage";
import ProjectPage from "./Pages/ProjectPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import ErrorPage from "./Pages/ErrorPage";
import BlogTemplate from "./Pages/BlogPage/Template";

function App() {
  let activeClassName = "activeLink";

  return (
    <BrowserRouter>
      <nav>
        <div className="nav-logotext">SAMPANNA</div>
        <div className="nav-menuitem">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cv"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            CV
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            PROJECT
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            BLOG
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            CONTACT
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/project" element={<ProjectPage />} exact />
        <Route path="/blog" element={<BlogPage />} exact />
        <Route path="/contact" element={<ContactPage />} exact />
        <Route path="/blog/:title" element={<BlogTemplate />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <footer>*This is a placeholder for footer*</footer> */}
    </BrowserRouter>
  );
}

export default App;
