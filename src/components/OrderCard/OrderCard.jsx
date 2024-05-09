import React, { useState } from 'react';
import s from './OrderCard.module.scss';
import { AddButton } from '../../ui/AddButton/AddButton';
import { ProductCounterButton } from '../../ui/ProductCounterButton/ProductCounterButton';
import food1 from "../../assets/img/OrderCard/food1.png";
import food2 from "../../assets/img/OrderCard/food2.png";

export const OrderCard = () => {
    const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 0));
  };
    return <article className={s.card}>
        <div className={s.card__content}>
            <div className={s.card__left}>
                <div className={s.card__image}>
                    <img src={food1} alt="img" className={s.card__img}/>
                </div>
                <div className={s.card__desc}>
                    <p className={s.card__name}>Chicken Hell</p>
                    <p className={s.card__price}>$12.99</p>
                </div>
            </div>
            <div className={s.card__right}>
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
                <p className={s.card__price}>$38.97</p>
            </div>
        </div>
    </article>}