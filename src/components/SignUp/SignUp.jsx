import { SignUpLeft } from "../SignUpLeft/SignUpLeft";
import s from "./SignUp.module.scss";
import products from "../../assets/img/SignUp/products.png";

export const SignUp = () => {
  return (
    <div className={s.all}>
      <SignUpLeft></SignUpLeft>
      <div className={s.right}>
        <img src={products}></img>
        <h2 className={s.title}>Find Foods With Love </h2>
        <p className={s.text}>
          Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
          Including Asian, Chinese, Italians And Many More. Our Dashboard Helps
          You To Manage Orders And Money.
        </p>
      </div>
    </div>
  );
};
