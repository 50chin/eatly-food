import s from "./ContactsMain.module.scss";
import img from "../../assets/img/Contacts/Left.png";
import screen from "../../assets/img/Contacts/MobileScreen.png";
import { Button } from "../../ui/Button/Button";
import { InputContacts } from "../InputContacts/InputContacts";
import { TextareaContacts } from "../TextareaContacts/TextareaContacts";

export const ContactsMain = () => {
  return (
    <div className={s.allcontent}>
      <div className={s.left}>
        <img src={img}></img>
        <img className={s.screen} src={screen}></img>
      </div>
      <div className={s.right}>
        <h1>
          Customer <span className={s.span}>Support</span>
        </h1>
        <form className={s.form}>
          <InputContacts placeholder="FULL NAME" type="text"></InputContacts>
          <InputContacts
            placeholder="ENTER YOUR EMAIL"
            type="email"
          ></InputContacts>
          <TextareaContacts placeholder="ENTER THE PROBLEM OR QUERY"></TextareaContacts>
          <Button variant="fill" size="middle" className={s.button}>
            Send Now
          </Button>
        </form>
      </div>
    </div>
  );
};
