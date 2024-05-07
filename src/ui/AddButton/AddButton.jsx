import s from './AddButton.module.scss';
import clsx from 'clsx';

export const AddButton = ({ className, onClick }) => {
  return (
    <button className={clsx(s.btn, className)} onClick={onClick}>
      +
    </button>
  );
};
