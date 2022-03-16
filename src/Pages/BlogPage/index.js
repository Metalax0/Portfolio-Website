import Button from "../../ReusableComponent/Button";
import "./style.css";

const BlogPage = () => {
  return (
    <div className="BlogPage">
      {/* Blog 1 */}
      <div className="blogList">
        <div className="TitleandSubTitle">
          <label className="blogTitle">Programming - Challanges I faced</label>
          <br />
          <br />
          <label className="blogSubTitle">by Sampanna Pokharel</label>
        </div>
        <img src="/Images/Blog_image2.jpg" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button buttonName="READ MORE" buttonWidth="20vw" buttonHeight="3vw" />
      </div>
      {/* Blog 2*/}
      <div className="blogList">
        <div className="TitleandSubTitle">
          <label className="blogTitle">
            Fermi Paradox - Where are all the aliens ?
          </label>
          <br />
          <br />
          <label className="blogSubTitle">by Sampanna Pokharel</label>
        </div>
        <img src="/Images/Blog_image4.jpg" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button buttonName="READ MORE" buttonWidth="20vw" buttonHeight="3vw" />
      </div>
      {/* Blog 3*/}
      <div className="blogList">
        <div className="TitleandSubTitle">
          <label className="blogTitle">Success - Is it Luck or Hard Work?</label>
          <br />
          <br />
          <label className="blogSubTitle">by Sampanna Pokharel</label>
        </div>
        <img src="/Images/Blog_image3.png" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button buttonName="READ MORE" buttonWidth="20vw" buttonHeight="3vw" />
      </div>
      {/* Blog 4 */}
      <div className="blogList">
        <div className="TitleandSubTitle">
          <label className="blogTitle">Consciousness - What is it and why does it matter?</label>
          <br />
          <br />
          <label className="blogSubTitle">by Sampanna Pokharel</label>
        </div>
        <img src="/Images/Blog_image1.jpg" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button buttonName="READ MORE" buttonWidth="20vw" buttonHeight="3vw" />
      </div>
    </div>
  );
};

export default BlogPage;
