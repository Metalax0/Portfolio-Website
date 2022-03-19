import Button from "../../../ReusableComponent/Button";
import "./style.css";

const Home_MainContent = () => {
  return (
    <div className="aboutContainer">
      <div className="leftContainer">
        <label className="aboutContainer_Title">HELLO, I'M SAMPANNA,</label>{" "}
        <br />
        <label className="aboutContainer_subTitle">A CS STUDENT</label>
        <p className="aboutMe">
          I'm 21 years old and from Kathmandu, Nepal. I am currently doing my
          Bachelors in Computing from Islington College. I am a front-end and
          programming enthusiast who is currently walking towards the path of
          becomming a front end web developer.
        </p>
        <br />
        <br />
        <a href="Sampanna_Pokharel_CV.pdf" download>
          <Button
            buttonName="Download CV"
            buttonWidth="12vw"
            buttonHeight="2.8vw"
          />
        </a>
      </div>
      <div className="rightContainer">
        <img className="imgPotrait" src="/Images/Home_PortfolioPic.png" />
      </div>
    </div>
  );
};
export default Home_MainContent;
