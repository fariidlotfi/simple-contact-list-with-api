import "./ContactBox.css";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const ContactList = (params) => {
  let { name, country, email, picture, cell } = params;

  return (
    <div className="contact-app-box-template">
      <div className="contact-app-box-image">
        <img src={picture} alt={name} width="90%" />
      </div>
      <div className="contact-app-box-info">
        <p>{name}</p>
        <p>{country}</p>
        <div className="contact-app-contact-person">
          <a href={`mailto:${email}`}>
            <AiOutlineMail />
          </a>
          <a href={`mailto:${cell}`}>
            <AiOutlinePhone />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
