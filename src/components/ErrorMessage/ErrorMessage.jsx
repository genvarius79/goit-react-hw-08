import { MdError } from "react-icons/md";
import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.container}>
      {" "}
      <MdError className={css.icon} size={32} color={"white"} />
      <p className={css.text}>Oops! There was an error! Please reload!</p>
    </div>
  );
}
