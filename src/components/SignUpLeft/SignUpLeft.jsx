import s from "./SignUpLeft.module.scss";
import { SignUpHeader } from "../SignUpHeader/SignUpHeader";
import { SignUpForm } from "../SignUpForm/SignUpForm";
import { SignUpFooter } from "../SignUpFooter/SignUpFooter";

export const SignUpLeft = () => {
  return (
    <div className={s.left}>
      <SignUpHeader />
      <SignUpForm />
      <SignUpFooter />
    </div>
  );
};
