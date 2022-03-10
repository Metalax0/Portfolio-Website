import "./index.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <label className="blockTitleBlog"> CONTACT </label>
      <div className="contactBox">
        <span className="contactDescription">
          Fill the contact form below to get in touch via email. I'll get back
          to you as soon as possible
        </span>
        <form
          action="https://formsubmit.co/sampannapokharel@gmail.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Email From Portfolio Website"
          ></input>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/"
          ></input>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          ></input>
          <textarea
            maxLength={800} /*Roughly 120 words*/
            type="text"
            name="message"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button
            type="submit"
            onClick={() => {
              alert("you will be redirected and your email will be sent");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
