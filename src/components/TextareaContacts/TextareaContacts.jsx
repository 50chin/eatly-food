import s from "./TextareaContacts.module.scss";

export const TextareaContacts = ({ type, placeholder }) => {
  return <textarea type={type} placeholder={placeholder} className={s.textarea}></textarea>;
};
