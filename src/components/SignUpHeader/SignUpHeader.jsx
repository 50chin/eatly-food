import s from "./SignUpHeader.module.scss";
import imgLogo from "../../assets/img/SignUp/logo.svg";
import { Link } from "react-router-dom";

export const SignUpHeader = () => {
  return (
    <header className={s.header}>
      <Link to={"/"}>
        <img src={imgLogo}/>
      </Link>
    </header>
  );
};
