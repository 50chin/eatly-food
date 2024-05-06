import React, { useState } from 'react';
import { AddButton } from '../../ui/AddButton/AddButton';
import { FavoritesButton } from '../../ui/FavoritesButton';
import s from './ArticleDishes.module.scss';

import img from './img/FoodImage.png';
import heart from './img/Heart.svg';
import star from './img/Star.svg';
import { Tag } from "../Tag/Tag";


export const ArticleDishes = ({type, image, names, duration, rating, dollars, cents}) => {
  const [count, setCount] = useState(0); 

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount > 1 ? prevCount - 1 : 0);
  };

  const firstBig = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

  return (
    <article className={s.card}>
      <div className={s.card__content}>
        <div className={s.card__images}>
//             <input type="image" src={heart} className={s.card__heart}/>
          <img src={img} alt="img" className={s.card__img} />
          <FavoritesButton />
        </div>
        <Tag>{firstBig(type)}</Tag>
        <p className={s.card__title}>{names}</p>
        <div className={s.card__estimation}>
            <p className={s.card__p}>{duration}min •</p>
            <img src={star} alt="img" className={s.card__star}/>
            <p className={s.card__p}>{rating}</p>
        </div>
        <div className={s.card__price}>
            <p className={s.card__p}><span className={s.card__ceil}>${dollars}</span>.{cents}</p>
            {count === 0 ? (
              <button className={s.card__btn} onClick={increment}>+</button>
            ) : (
              <div>
                <button className={`${s.card__btn} ${s.card__btn_decr}`} onClick={decrement}>-</button>
                <span className={s.card__count}>{count}</span>
//                 <button className={s.card__btn} onClick={increment}>+</button>
              </div>
            )}
          <AddButton />
        </div>
      </div>
    </article>
  );
};
