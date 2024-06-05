import { FaUser, FaPhone, FaRegTrashCan } from "react-icons/fa6";
import "./Contact.css";

const Contact = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  const handleDelete = () => {
    onDeleteContact(id);
  };

  return (
    <div className="contact-wrapper">
      <p>
        <FaUser className="contact-icon" />
        {name}
      </p>

      <p>
        <FaPhone className="contact-icon" />
        {number}
      </p>
      <button onClick={handleDelete}>
        <FaRegTrashCan className="contact-icon" />
        Delete
      </button>
    </div>
  );
};

export default Contact;
