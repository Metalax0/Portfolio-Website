import "./style.css";

const Home_Blogs = () => {
  var imgBlog = [
    <img className="imgBlogs" src="/Images/Blog_image2.jpg" />,
    <img className="imgBlogs" src="/Images/Blog_image4.jpg" />,
    <img className="imgBlogs" src="/Images/Blog_image3.png" />,
    <img className="imgBlogs" src="/Images/Blog_image1.jpg" />,
    <img className="imgBlogs" src="/Images/Blog_image5.jpg" />,
    <img className="imgBlogs" src="/Images/Blog_image5.jpg" />,
  ];

  var blogTitle = [
    "Programming - Challanges that faced",
    "Fermi Paradox - Where are all the aliens ?",
    "Success - Is it Luck or Hard Work?",
    "Consciousness - What is it and why does it matter?",
    "Coming Soon",
    "Coming Soon",
  ];

  var blogContent = [
    "There were a lot of challanges and hurdels that I faced when first start",
    "The universe if really old and there are billions of Earth-like planets the",
    "We all strive for success but not everyone makes it. What differs a s",
    "The feeling of individuality, feelings, sensations, emotions is what make",
    "The blog page is under construction and new content will be added soon",
    "The blog page is under construction and new content will be added soon",
  ];

  return (
    <div className="blogsContainer">
      <label className="blockTitleBlog"> BLOGS </label>
      <div className="gridContainer">
        <div className="gridItem">
          {imgBlog[0]}
          <div className="homeBlogTitle">{blogTitle[0]}</div>
          <p className="homeBlogContent">{blogContent[0]}...</p>
        </div>
        <div className="gridItem">
          {imgBlog[1]}
          <div className="homeBlogTitle">{blogTitle[1]}</div>
          <p className="homeBlogContent">{blogContent[1]}...</p>
        </div>
        <div className="gridItem">
          {imgBlog[2]}
          <div className="homeBlogTitle">{blogTitle[2]}</div>
          <p className="homeBlogContent">{blogContent[2]}...</p>
        </div>
        <div className="gridItem">
          {imgBlog[3]}
          <div className="homeBlogTitle">{blogTitle[3]}</div>
          <p className="homeBlogContent">{blogContent[3]}...</p>
        </div>
        <div className="gridItem">
          {imgBlog[4]}
          <div className="homeBlogTitle">{blogTitle[4]}</div>
          <p className="homeBlogContent">{blogContent[4]}...</p>
        </div>
        <div className="gridItem">
          {imgBlog[5]}
          <div className="homeBlogTitle">{blogTitle[5]}</div>
          <p className="homeBlogContent">{blogContent[5]}...</p>
        </div>
      </div>
    </div>
  );
};

export default Home_Blogs;
