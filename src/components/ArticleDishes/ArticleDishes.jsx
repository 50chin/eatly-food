import React, { useState } from 'react';
import { AddButton } from '../../ui/AddButton/AddButton';
import { FavoritesButton } from '../../ui/FavoritesButton';
import s from './ArticleDishes.module.scss';

import star from './img/Star.svg';
import { Tag } from '../Tag/Tag';
import { ProductCounterButton } from '../../ui/ProductCounterButton/ProductCounterButton';

export const ArticleDishes = ({
  type,
  image,
  name,
  duration,
  rating,
  dollars,
  cents,
}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 0));
  };

  const firstBig = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <article className={s.card}>
      <div className={s.card__content}>
        <div className={s.card__images}>
          <img src={image} alt="img" className={s.card__img} />
          <FavoritesButton className={s.card__heart} />
        </div>
        <Tag>{firstBig(type)}</Tag>
        <p className={s.card__title}>{name}</p>
        <div className={s.card__estimation}>
          <p className={s.card__p}>{duration}min •</p>
          <img src={star} alt="img" className={s.card__star} />
          <p className={s.card__p}>{rating}</p>
        </div>
        <div className={s.card__price}>
          <p className={s.card__p}>
            <span className={s.card__ceil}>${dollars}</span>.{cents}
          </p>
          {count === 0 ? (
            <AddButton onClick={increment} className={s.card__btn} />
          ) : (
            <ProductCounterButton
              className={s.card__btn}
              count={count}
              decrement={() => decrement()}
              increment={() => increment()}
            />
          )}
        </div>
      </div>
    </article>
  );
};
