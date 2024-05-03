import s from "./SignUpLeft.module.scss";
import { SignUpHeader } from "../SignUpHeader/SignUpHeader";
import { SignUpForm } from "../SignUpForm/SignUpForm";
import { SignUpFooter } from "../SignUpFooter/SignUpFooter";

export const SignUpLeft = () => {
  return (
    <>
      <SignUpHeader />
      <SignUpForm />
      <SignUpFooter />
    </>
  );
};
