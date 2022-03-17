import "./style.css";

const ContactForm = () => {
  return (
    <div className="contactBox">
      <span className="contactText">
        Fill the contact form below and leave an email message. I'll get back to
        you as soon as possible.
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
          value="https://sampannapokharel.com/"
        ></input>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          autoComplete="off"
          required
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          autoComplete="off"
          required
        ></input>
        <textarea
          maxLength={800} /*Roughly 120 words*/
          type="text"
          name="message"
          placeholder="Enter Your Message"
          autoComplete="off"
          required
        ></textarea>
        <button
          type="submit"
          onClick={() => {
            alert(
              "If you are redirected to the home page, then it means your email has been sent"
            );
          }}
        >
          Submit
        </button>
      </form>
      <span className="contactText">
        <i>
          <b>(Note : Email is forwarded by third party)</b>
        </i>
      </span>
    </div>
  );
};

export default ContactForm;
