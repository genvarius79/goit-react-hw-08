import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./App.module.css";
import { fetchContacts } from "../../redux/contactsOps";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.loading);
  const isError = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.container}>
        <h1 className={css.h1}>Phonebook</h1>

        <ContactForm />
        <SearchBox />
        <ContactList />
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
      </div>
    </>
  );
}
