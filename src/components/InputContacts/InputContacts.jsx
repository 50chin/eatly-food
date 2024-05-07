import s from './InputContacts.module.scss'
import clsx from "clsx";

export const InputContacts = ({type, placeholder, className}) => {return (
  <input type={type} placeholder={placeholder} className={clsx(s.input, className)}></input>
);}