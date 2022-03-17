import ContactForm from "../../ReusableComponent/ContactForm";
import "./style.css";

const ContactPage = () => {
  return (
    <div className="ContactPage">
      {/* Get In Touch */}
      <div className="getInTouch">
        <label className="contactTitle">GET IN TOUCH</label>
        <div className="contactGrid">
          {/* Block for Phone */}
          <div className="contactGridItem">
            <img src="/Icons/icon_phone.png" />
            <label className="contactSubTitle">Phone</label>
            <label className="contactDescription">+9779869277513</label>
          </div>
          {/* Block for Email */}
          <a
            className="contactDescription"
            target="_blank"
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLrRTJqHlJJwWfKnHvTwHbrzFcHPpZxsZhZLCjMcrRFqNSNMfNpSZJcxdRHKqsnJXPRrhS"
          >
            <div className="contactGridItem">
              <img src="/Icons/icon_email.png" />
              <label className="contactSubTitle">Email</label>
              sampannapokharel@gmail.com
            </div>
          </a>
          {/* Block for Facebook */}
          <a
            className="contactDescription"
            target="_blank"
            href="https://www.facebook.com/sampanna.pokharel.0/"
          >
            <div className="contactGridItem">
              <img src="/Icons/icon_facebook.png" />
              <label className="contactSubTitle">Facebook</label>
              sampanna.pokharel.0
            </div>
          </a>
        </div>
      </div>
      {/* Leave a Message */}
      <div className="leaveAMessage">
        <label className="contactTitle">LEAVE A MESSAGE</label>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
