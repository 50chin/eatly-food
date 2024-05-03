import { SignUpFormLink } from "../SignUpFormLink/SignUpFormLink";
import s from "./SignUpForm.module.scss";
import imgApple from "../../assets/img/SignUp/apple_logo.svg";
import iconEmail from "../../assets/img/SignUp/email-icon.svg";
import iconPass from "../../assets/img/SignUp/pass-icon.svg";
import iconUser from "../../assets/img/SignUp/user-icon.svg";
import { SignUpInput } from "../SignUpInput/SignUpInput";
import { Button } from "../../ui/Button/Button";
import { Link } from "react-router-dom";

export const SignUpForm = () => {
  return (
    <section className={s.allcontent}>
      <h1 className={s.title}>Sign Up To eatly</h1>
      <div className={s.links}>
        <SignUpFormLink>G</SignUpFormLink>
        <SignUpFormLink>
          <img src={imgApple}></img>
        </SignUpFormLink>
      </div>
      <div className={s.or}>
        <p>OR</p>
      </div>
      <form className={s.form}>
        <SignUpInput
          type="text"
          icon={iconUser}
          placeholder="Full Name"
        ></SignUpInput>
        <SignUpInput
          type="email"
          icon={iconEmail}
          placeholder="Email"
        ></SignUpInput>
        <SignUpInput
          type="password"
          icon={iconPass}
          placeholder="Password"
        ></SignUpInput>
        <Button variant="fill" size="middle" className={s.buttonForSignUp}>
          SIGN UP
        </Button>
      </form>
      <div className={s.wrapperlogin}>
        <p>
          Already Have An Account?{" "}
          <Link to={"/"} className={s.login}>
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
};
