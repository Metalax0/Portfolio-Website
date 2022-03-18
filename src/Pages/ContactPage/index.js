import ContactCards from "../../ReusableComponent/ContactCards";
import ContactForm from "../../ReusableComponent/ContactForm";
import "./style.css";

const ContactPage = () => {
  return (
    <div className="ContactPage">
      {/* Get In Touch */}
      <div className="contactGetInTouch">
        <label className="contactTitle">GET IN TOUCH</label>
        <div className="contactGrid">
          {/* Block for Phone */}
          <ContactCards
            image="/Icons/icon_phone.png"
            subTitle="Phone"
            description="+9779869277513"
          />
          {/* Block for Email */}
          <a
            className="contactDescription"
            target="_blank"
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLrRTJqHlJJwWfKnHvTwHbrzFcHPpZxsZhZLCjMcrRFqNSNMfNpSZJcxdRHKqsnJXPRrhS"
          >
            <ContactCards
              image="/Icons/icon_email.png"
              subTitle="Email"
              description="sampannapokharel@gmail.com"
            />
          </a>
          {/* Block for Facebook */}
          <a
            className="contactDescription"
            target="_blank"
            href="https://www.facebook.com/sampanna.pokharel.0/"
          >
            <ContactCards
              image="/Icons/icon_facebook.png"
              subTitle="Facebook"
              description="sampanna.pokharel.0"
            />
          </a>
        </div>
      </div>
      {/* Follow ME */}
      <div className="contactFollowMe">
        <label className="contactTitle">Follow Me</label>
        <div className="contactGrid">
          <a
            className="contactDescription"
            target="_blank"
            href="https://www.linkedin.com/in/sampanna-pokharel-35667b215/"
          >
            <ContactCards
              image="/Icons/icon_linkedin.png"
              subTitle="Linked In"
              description="sampanna-pokharel-35667b215"
            />
          </a>
          <a
            className="contactDescription"
            target="_blank"
            href="https://github.com/Metalax0"
          >
            <ContactCards
              image="/Icons/icon_github.png"
              subTitle="GitHub"
              description="https://github.com/Metalax0"
            />
          </a>
        </div>
      </div>
      {/* Leave a Message */}
      <div className="contactLeaveAMessage">
        <label className="contactTitle">LEAVE A MESSAGE</label>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
