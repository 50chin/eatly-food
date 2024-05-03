import s from "./ArticleDishes.module.scss";
import img from './img/FoodImage.png';
import heart from './img/Heart.svg';
import star from './img/Star.svg';

export const ArticleDishes = () => {
  return <article className={s.card}>
    <div className={s.card__content}>
        <div className={s.card__images}>
            <img src={img} alt="img" className={s.card__img}/>
            <input type="image" src={heart} className={s.card__heart}/>
        </div>
        <p className={s.card__title}>Chicken Hell</p>
        <div className={s.card__estimation}>
            <p className={s.card__p}>24min •</p>
            <img src={star} alt="img" className={s.card__star}/>
            <p className={s.card__p}>4.8</p>
        </div>
        <div className={s.card__price}>
            <p className={s.card__p}><span className={s.card__ceil}>$12</span>.99</p>
            <button className={s.card__btn}>+</button>
        </div>
    </div>
  </article>;
};
