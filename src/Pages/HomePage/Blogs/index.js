import "./style.css";

const Home_Blogs = () => {
  var imgBlog = [
    <img className="imgBlogs" src="img_Blogs1.jpg" />,
    <img className="imgBlogs" src="img_Blogs2.jpg" />,
    <img className="imgBlogs" src="img_Blogs3.jpg" />,
    <img className="imgBlogs" src="img_Blogs4.jpg" />,
    <img className="imgBlogs" src="img_Blogs5.jpg" />,
    <img className="imgBlogs" src="img_Blogs6.jpg" />,
  ];

  var blogTitle = ["Title1", "Title2", "Title3", "Title4", "Title5", "Title6"];

  var blogContent = [
    "This is blog content for blog number 1 and it is justified text",
    "This is blog content for blog number 2 and it is justified text",
  ];

  return (
    <div className="blogsContainer">
      <label className="blockTitleBlog"> BLOGS </label>
      <div className="gridContainer">
        <div className="gridItem">
          {imgBlog[0]}
          <div className="blogTitle">{blogTitle[0]}</div>
          <p className="blogContent">{blogContent[0]}...</p>
        </div>
        <div className="gridItem">
          {imgBlog[1]}
          <div className="blogTitle">{blogTitle[1]}</div>
          <p className="blogContent">{blogContent[1]}...</p>
        </div>
        <div className="gridItem">
          {imgBlog[2]}
          <div className="blogTitle">{blogTitle[2]}</div>
          <p className="blogContent">{blogContent[0]}...</p>
        </div>
        <div className="gridItem">
          {imgBlog[3]}
          <div className="blogTitle">{blogTitle[3]}</div>
          <p className="blogContent">{blogContent[0]}...</p>
        </div>
        <div className="gridItem">
          {imgBlog[4]}
          <div className="blogTitle">{blogTitle[4]}</div>
          <p className="blogContent">{blogContent[0]}...</p>
        </div>
        <div className="gridItem">
          {imgBlog[5]}
          <div className="blogTitle">{blogTitle[5]}</div>
          <p className="blogContent">{blogContent[0]}...</p>
        </div>
      </div>
    </div>
  );
};

export default Home_Blogs;
