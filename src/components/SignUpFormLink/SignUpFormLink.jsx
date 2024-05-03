import s from "./SignUpFormLink.module.scss";

export const SignUpFormLink = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <a href="#">{children}</a>
    </div>
  );
};
