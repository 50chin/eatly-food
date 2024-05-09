import s from "./Button.module.scss";
import clsx from "clsx";

export const Button = ({
  children,
  variant,
  border,
  radius,
  size,
  className,
}) => {
  return (
    <button
      className={clsx(s.button, className, {
        [s.button_fill]: variant === "fill", // заполненный
        [s.button_empty]: variant === "empty", // пустой
        [s.button_border]: border === "true", // есть бордер
        [s.button_radiusLeft]: radius === "radiusLeft", // радиус left
        [s.button_radiusRight]: radius === 'radiusRight', // радиус right
        [s.button_small]: size === "small", // кнопка маленькая
        [s.button_middle]: size === "middle", // кнопка средняя
        [s.button_large]: size === "large", // кнопка большая
      })}
    >
      {children}
    </button>
  );
};
