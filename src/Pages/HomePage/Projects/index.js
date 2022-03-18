import "./style.css";
import ContentBlock from "./ContentBlock";

const Home_Projects = () => {
  var year = ["2019", "2021", "2021", "2022"];
  var content = [
    "Space Rush - My first ever web project which kickstarted my journey on path of front end development. Space Rush is a browser game which is a recreation of the classic spaceship games.",
    "CV/Portfolio - As a college assignment, each of us students were assigned a task to build a CV/Portfolio website using HTML, CSS and JS. This project is the result of that task.",
    "Clover.Three - My first ever group project in web. This was initially supposed to be a experiment for learning js along with Git/GitHub. It later became a project with features like word counter, coin flip, to-do-list, puzzle, tictactoe. It was built with a team of three",
    "Clover.Three.React - After the success of Clover.Three, the team wanted to go further into JavaScript and with this drive we ended up choosing React. This project, like previous one was initially for practicing React. Here we recreated the previous project using React.",
    "test",
  ];
  var pic = [
    <img className="imgProject" src="/Images/Home_SpaceRush.png" />,
    <img className="imgProject" src="/Images/Home_CVPortfolio.png" />,
    <img className="imgProject" src="/Images/Home_CloverThree.png" />,
    <img className="imgProject" src="/Images/Home_CloverThreeReact.png" />,
  ];
  return (
    <div className="projectContainer">
      <label className="blockTitle"> PROJECTS </label>
      <div className="projectList">
        <ContentBlock Left={pic[3]} year={year[3]} Right={content[3]} />
        <ContentBlock Left={content[2]} year={year[2]} Right={pic[2]} />
        <ContentBlock Left={pic[1]} year={year[1]} Right={content[1]} />
        <ContentBlock Left={content[0]} year={year[0]} Right={pic[0]} />
      </div>
    </div>
  );
};
export default Home_Projects;
