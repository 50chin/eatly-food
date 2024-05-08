import s from './FavoritesButton.module.scss';
import heart from '../../assets/icons/Hero/Heart.svg';
import fillHeart from '../../assets/icons/Hero/fill-heart.svg';
import clsx from 'clsx';
import { useState } from 'react';

export const FavoritesButton = ({ className }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className={clsx(s.btn, className)}
      type="button"
    >
      <img
        className={s.btn__img}
        src={isFavorite ? fillHeart : heart}
        alt="favorites"
      />
    </button>
  );
};
