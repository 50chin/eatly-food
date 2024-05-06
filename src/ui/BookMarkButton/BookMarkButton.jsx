import s from './BookMarkButton.module.scss';
import icon from '../../assets/icons/Hero/BookMark.svg';
import { useState } from 'react';

export const BookMarkButton = () => {
  const [add, setAdd] = useState(false);

  return (
    <button
      onClick={() => setAdd(!add)}
      type="button"
      className={s.btn}
      style={{
        background: add ? 'rgba(161, 156, 209)' : 'rgb(219, 217, 238)',
      }}
    >
      <img src={icon} alt="icon" />
    </button>
  );
};
