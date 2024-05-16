import css from "./Contact.module.css";
import { MdPerson, MdCall } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ item: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.container}>
      <div className={css.groupAll}>
        <div className={css.groupImg}>
          <MdPerson color="#00000" size={22} />

          <p>{name}</p>
        </div>
        <div className={css.groupImg}>
          <MdCall color="#00000" size={22} />

          <p>{number}</p>
        </div>
      </div>

      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
