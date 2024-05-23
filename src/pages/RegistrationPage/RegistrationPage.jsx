import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

export default function RegisterPage() {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <PageTitle>Register your account</PageTitle>
      </div>
      <RegistrationForm />
    </div>
  );
}
