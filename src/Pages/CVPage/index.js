import Button from "../../ReusableComponent/Button";
import "./style.css";

const CVPage = () => {
  return (
    <div className="CVPage">
      {/* Left Column on CV page */}
      <div className="CVContainerLeft">
        {/* Image Section of CV Page */}
        <div className="CVImage">
          <img src="/Images/CV_Portfolio3.jpg" />
          <label className="CVTitle">SAMPANNA POKHAREL</label>
          <label className="CVSubTitle">STUDENT</label>
        </div>
        {/* Profile Section of CV Page */}
        <div className="CVProfile">
          <label className="CVTitle">PROFILE</label>
          <p className="CVDescription">
            <br />I am Sampanna Pokharel and am currently a student. I am
            pursuing my bachelors degree in computing at Islington College,
            Kathmandu, Nepal. In general, my field of interest is in front-end
            web development and programming.
          </p>
        </div>
        {/* Contact Section of CV Page */}
        <ul className="CVContact">
          <br />
          <label className="CVTitle">CONTACT</label>
          <br />
          <li>
            <img className="imgIcon" src="/Icons/icon_address.png" />
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Kathmandu+44600/data=!4m2!3m1!1s0x39eb198a307baabf:0xb5137c1bf18db1ea?sa=X&ved=2ahUKEwj1-rHukcH2AhW8UvUHHRVZDv8Q8gF6BAgREAE"
            >
              Gaushala, Kathmandu, Nepal
            </a>
          </li>
          <li>
            <img className="imgIcon" src="/Icons/icon_phone.png" />
            +9779869277513
          </li>
          <li>
            <img className="imgIcon" src="/Icons/icon_email.png" />{" "}
            <a
              target="_blank"
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLrRTJqHlJJwWfKnHvTwHbrzFcHPpZxsZhZLCjMcrRFqNSNMfNpSZJcxdRHKqsnJXPRrhS"
            >
              sampannapokharel@gmail.com
            </a>
          </li>

          <li>
            <img className="imgIcon" src="/Icons/icon_website.png" />
            <a target="_blank" href="https://sampannapokharel.com/">
              sampannapokharel.com
            </a>
          </li>
          <li>
            <img className="imgIcon" src="/Icons/icon_github.png" />
            <a target="_blank" href="https://github.com/Metalax0">
              github.com/Metalax0
            </a>
          </li>
          <li>
            <img className="imgIcon" src="/Icons/icon_facebook.png" />
            <a
              target="_blank"
              href="https://www.facebook.com/sampanna.pokharel.0/"
            >
              facebook.com/sampanna.pokharel.0
            </a>
          </li>
        </ul>
        <a href="Sampanna_Pokharel_CV.pdf" download>
          <Button
            buttonName="Download CV"
            buttonWidth="30vw"
            buttonHeight="2.8vw"
          />
        </a>
      </div>

      <div className="CVContainerRight">
        {/* Education Section of CV Page */}
        <div className="CVEducation">
          <label className="CVTitle">EDUCATION</label>
          <p className="CVDescription">
            <br />
            <b>A-Levels, 2018 :</b> Completed my A-Levels from Trinity
            International College, Kathmandu, Nepal with major in Computer
            Science.
            <br />
            <br />
            <b>Bachelors, current :</b> Currently studying bachelors in
            computing at Islington College, Kathmandu, Nepal. Expected to
            graduate in 2023
          </p>
        </div>
        {/* Projects Section of CV Page */}
        <div className="CVProjects">
          <label className="CVTitle">PROJECTS</label>
          <p className="CVDescription">
            <br />
            <b>Portfolio Website - </b> A portfolio website built using HTML,
            CSS, JS. and React. It consists of Home, CV, Project, Blog and
            Contact pages.
            <br />
            <br />
            <b>Clover.Three - </b> A group project built using HTML, CSS, JS and
            React. Here, I built a to-do-list and cryptography themed puzzzle
            game.
            <br />
            <br />
            <b>Space Rush - </b> A browser game inspired from classic spaceship
            game. It was built using HTML, CSS and JS.
          </p>
        </div>
        {/* Hard Skills Section of CV Page */}
        <div className="CVHardSkills">
          <label className="CVTitle">HARD SKILLS</label>
          <ul className="CVHardSkillsList">
            <div className="HardSkillsLeft">
              <li>HTML</li>
              <li>React</li>
            </div>
            <div className="HardSkillsMiddle">
              <li>CSS</li>
              <li>SQL</li>
            </div>
            <div className="HardSkillsRight">
              <li>JavaScript</li>
              <li>Python</li>
            </div>
          </ul>
        </div>
        {/* Soft Skills Section of CV Page */}
        <div className="CVSoftSkills">
          <label className="CVTitle">SOFT SKILLS</label>
          <ul className="CVSoftSkillsList">
            <li>
              <b>Leadership -</b> Student Academic Representative in college,
              Took leadership 1.0 course at Nobel Internship.
            </li>
            <br />
            <li>
              <b>Communication, Teamwork -</b> Worked in a team to build web
              projects, worked with an internation team during internship at
              Nobel.
            </li>
          </ul>
        </div>
        {/* Technical Skills Section of CV Page */}
        <div className="CVTechSkills">
          <label className="CVTitle">TECHNICAL SKILLS</label>
          <ul className="CVTechSkillsList">
            <li>
              <b>Git/GitHub -</b> Familiar with basics of Git and GitHub
            </li>
            <li>
              <b>Netbeans/Sublime/VS Code -</b>Fair experience working with
              these IDEs
            </li>
            <li>
              <b>Adobe Illustrator -</b> Familiar with basics of Illustrator
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
