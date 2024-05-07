import s from './ProductCounterButton.module.scss';
import clsx from 'clsx';

export const ProductCounterButton = ({
  count,
  increment,
  decrement,
  className,
}) => {
  return (
    <div className={clsx(s.counter, className)}>
      <button className={s.counter__btn} onClick={decrement}>
        -
      </button>
      <span className={s.counter__count}>{count}</span>
      <button className={s.counter__btn} onClick={increment}>
        +
      </button>
    </div>
  );
};
