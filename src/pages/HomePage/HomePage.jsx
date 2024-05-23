import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <PageTitle>Welcome to Phonebook! </PageTitle>
      <p className={css.text}>
        This application allows you to easily add, delete, and search your
        contacts by name, or phone number. To use the application, you need to
        register and log in to your account
      </p>
    </div>
  );
}
