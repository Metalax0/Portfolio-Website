import "./style.css";

const ContactCards = (props) => {
  return (
    <div className="contactGridItem">
      <img src={props.image} />
      <label className="contactSubTitle">{props.subTitle}</label>
      <label className="contactDescription">{props.description}</label>
    </div>
  );
};

export default ContactCards;
