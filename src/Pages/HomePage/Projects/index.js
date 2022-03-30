import "./style.css";
import ContentBlock from "./ContentBlock";

const Home_Projects = () => {
  var year = [
    "N/D 2019",
    "May 2021",
    "Nov 2021",
    "Feb 2022",
    "Mar 2022",
    "Mar 2022",
  ];
  var content = [
    "Space Rush - This was my first ever project in web. Space Rush is a browser game based on classic spaceship themed games. You control the ship and dodge meteors while collecting points",
    "CV/Portfolio - As a college assignment, I build a CV/Portfolio website using HTML, CSS and JS. It has 5 pages including home, cv, blog, research and contact.",
    "Clover.Three - My first ever group project in web. It has features like word counter, coin flip, to-do-list, puzzle, tictactoe. It was built with a team of three.",
    "Clover.Three.React - After the success of Clover.Three, we initiated this project where we recreated Clover.Three using react.  It's features are similar to Clover.Three",
    "Portfolio Website - The website you are currently on can also be considered as one of my projects (well I had to fill this section with something).",
    "Webpage Cloning Event (College) - This was the first time I ever took part in a coding event. Here, we (team of 3) were assigned the task to clone the homepage of discord in approximately two and a half hours.",
  ];
  var pic = [
    <img className="imgProject" src="/Images/Home_SpaceRush.png" />,
    <img className="imgProject" src="/Images/Home_CVPortfolio.png" />,
    <img className="imgProject" src="/Images/Home_CloverThree.png" />,
    <img className="imgProject" src="/Images/Home_CloverThreeReact.png" />,
    <img className="imgProject" src="/Images/Home_PortfolioWebsite.png" />,
    <img className="imgProject" src="/Images/Home_DiscordClone.png" />,
  ];
  return (
    <div className="projectContainer">
      <label className="blockTitle"> PROJECT TIMELINE </label>
      <div className="projectList">
        <ContentBlock Left={pic[0]} year={year[0]} Right={content[0]} />
        <ContentBlock Left={content[1]} year={year[1]} Right={pic[1]} />
        <ContentBlock Left={pic[2]} year={year[2]} Right={content[2]} />
        <ContentBlock Left={content[3]} year={year[3]} Right={pic[3]} />
        <ContentBlock Left={pic[4]} year={year[4]} Right={content[4]} />
        <ContentBlock Left={content[5]} year={year[5]} Right={pic[5]} />
      </div>
    </div>
  );
};
export default Home_Projects;
