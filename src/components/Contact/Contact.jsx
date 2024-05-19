import css from "./Contact.module.css";
import { MdPerson, MdCall } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { toast } from "react-hot-toast";
export default function Contact({ item: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const confirmated = confirm(
      "Do you really want to delete a contact?\nPress OK or Cancel."
    );
    if (confirmated) {
      dispatch(deleteContact(id));
      toast.success("Delete success!!!");
    }
  };
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
