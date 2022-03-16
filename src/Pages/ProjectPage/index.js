import "./style.css";

const ProjectPage = () => {
  return (
    <div className="ProjectPage">
      {/* FIRST PROJECT BLOCK */}
      <div className="ProjectGrid" id="Project1">
        {/* Grid Item 1 */}
        <div className="gridBackgroundIMG">
          <label className="ProjectTitle">CLOVER.THREE</label>
        </div>
        {/* Grid Item 2 */}
        <div className="gridTextBlock">
          <label className="ProjectSubTitle">ABOUT</label>
          <p>
            Clover.Three is a group project done by a team of three people. It
            is a compilation of several javascript applications like word and
            letter counter, coin flip, to-do-list, puzzle game, tic-tac-toe and
            calculator. Among them, I created to-do-list and puzzle game. The
            project was built using HTML, CSS, JavaScript and React. It is
            available on my GitHub page.
          </p>
        </div>
        {/* Grid Item 3 */}
        <div className="gridTextBlock">
          <label className="ProjectSubTitle">BACKGROUND</label>
          <p>
            This was my first ever web project done in a group. It was initially
            supposed to be an experimental project where we focused on
            practicing javascript along with Git/Github. However, it later
            expanded into a full fledged project. After the success of
            Clover.Three, the team wanted to dive further into JavaScript. We
            decided to go with React as the framework of choice and thus began
            our next project where we recreated/Upgraded Clover.Three using
            react framework.
          </p>
        </div>
        {/* Grid Item 4 */}
        <div className="gridImage"></div>
      </div>
      {/* SECOND PROJECT BLOCK */}
      <div className="ProjectGrid" id="Project2">
        {/* Grid Item 1 */}
        <div className="gridBackgroundIMG">
          <label className="ProjectTitle">SPACE RUSH</label>
        </div>
        {/* Grid Item 2 */}
        <div className="gridTextBlock">
          <label className="ProjectSubTitle">ABOUT</label>
          <p>
            Space Rush is a project reacreating classic space themed game in
            web. It is an Interractive game where the user controls their 2D
            spaceship on horizontal axis while dodging falling meteors. The user
            peformance is evaluated using points which is calculated based on
            the number of meteor dodged. This was my first ever project in web
            and was created using HTML, CSS and JavaScript. It is available on
            my GitHub page.
          </p>
        </div>
        {/* Grid Item 3 */}
        <div className="gridTextBlock">
          <label className="ProjectSubTitle">BACKGROUND</label>
          <p>
            This project was initiated in the year 2019. At that time, I was
            interested in game development and also wanted to make some
            websites. I decided to learn Front end development and began to look
            into HTML, CSS and JS. After learning the basics, I went to create a
            browser game. However, the project was abandoned as I encountered a
            roadblock.
          </p>
        </div>
        {/* Grid Item 4 */}
        <div className="gridImage"></div>
      </div>
      {/* Maybe Make a third project block */}
    </div>
  );
};

export default ProjectPage;
