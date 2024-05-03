import s from './Button.module.scss';
import clsx from 'clsx';

export const Button = ({ children, variant }) => {
  return (
    <button
      className={clsx(s.button, {
        [s.button_fill]: variant === 'fill',
        [s.button_empty]: variant === 'empty',
        [s.button_border]: variant === 'true',
        [s.button_bigPrimary]: variant === 'bigPrimary',
      })}
    >
      {children}
    </button>
  );
};
