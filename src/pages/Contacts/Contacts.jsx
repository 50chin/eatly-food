import { Layout } from "../../layouts/Layout/Layout";
import s from "./Contacts.module.scss";
import { ContactsMain } from "../../components/ContactsMain/ContactsMain";

export const Contacts = () => {
  return (
    <Layout>
      <ContactsMain />
    </Layout>
  );
};
