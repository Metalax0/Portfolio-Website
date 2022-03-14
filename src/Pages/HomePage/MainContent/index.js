import "./style.css";

const Home_MainContent = () => {
  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <label className="mainContainer_Title">HELLO, I'M SAMPANNA,</label>{" "}
        <br />
        <label className="mainContainer_subTitle"> I'M A CS STUDENT</label>
        <p className="aboutMe">
          I'm 21 years old and from Kathmandu, Nepal. I am currently doing my
          Bachelors in Computing from Islington College. I am interested in
          front end web development and programming.
        </p>
        <a href="Sampanna_Pokharel_CV.pdf" download>
          <button>Download CV</button>
        </a>
      </div>
      <div className="rightContainer">
        <img className="imgPotrait" src="img_Portfolio2.png" />
      </div>
    </div>
  );
};
export default Home_MainContent;
