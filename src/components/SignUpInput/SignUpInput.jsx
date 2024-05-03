import s from "./SignUpInput.module.scss";

export const SignUpInput = ({ type, icon, placeholder }) => {
  return (
    <div className={s.inputWrapper}>
      <input type={type} placeholder={placeholder} className={s.input}></input>
      <img src={icon} className={s.img}></img>
    </div>
  );
};
