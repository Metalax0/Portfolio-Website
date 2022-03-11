import "./index.css";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <label className="blockTitleSkills"> SKILLS </label>
      <div className="skillsBox">
        <div className="skillsIndicator">
          <span className="skillIndicator1">Novice</span>
          <span className="skillIndicator1">Beginer</span>
          <span className="skillIndicator1">Intermediate</span>
          <span className="skillIndicator1">Proficient</span>
        </div>
        <div className="skillsOuter">
          <div className="skillsInner" id="skill1">
            HTML, CSS, JS
          </div>
        </div>
        <div className="skillsOuter">
          <div className="skillsInner" id="skill2">
            React, Bootstrap
          </div>
        </div>
        <div className="skillsOuter">
          <div className="skillsInner" id="skill3">
            Introductory level Java, Python, SQL
          </div>
        </div>
        <div className="skillsOuter">
          <div className="skillsInner" id="skill4">
            Git/Github, Netbeans, Sublime, VsCode
          </div>
        </div>
        <div className="skillsOuter">
          <div className="skillsInner" id="skill5">
            Leadership, Teamwork, Communication
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
