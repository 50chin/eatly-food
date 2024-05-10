import clsx from "clsx";
import s from "./CategoryButton.module.scss";

export const CategoryButton = ({ children, category }) => {
  return (
    <button
      type="button"
      className={clsx(s.btn, {
        [s.btn_pizza]: category === "Pizza",
        [s.btn_asian]: category === "Asian",
        [s.btn_donate]: category === "Donate",
        [s.btn_ice]: category === "Ice",
      })}
    >
      {children}
    </button>
  );
};
