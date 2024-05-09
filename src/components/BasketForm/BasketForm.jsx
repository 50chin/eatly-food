import s from "./BasketForm.module.scss";
import face from "../../assets/img/BasketForm/face.png";
import locatin from "../../assets/img/BasketForm/Locatin.svg";
import time from "../../assets/img/BasketForm/Time.svg";
import { Button } from "../../ui/Button/Button";

export const BasketForm = () => {
  return (
    <article className={s.card}>
    <div className={s.card__top}>
        <div className={s.card__image}>
            <img src={face} alt="img" className={s.card__img}/>
        </div>
        <div className={s.card__info}>
            <p className={s.card__name}>David Smith</p>
            <p className={s.card__rider}>Food Rider</p>
        </div>
    </div>
    <div className={s.card__bottom}>
        <div className={s.card__local}>
            <img src={locatin} alt="img" className={s.local__img}/>
            <hr className={s.card__hr}/>
            <img src={time} alt="img" className={s.local__img}/>
        </div>
        <div className={s.bottom__center}>
            <div className={s.center__top}>
                <p className={s.center__adres}>Your Address</p>
                <p className={s.center__desc}>Horizenal Road Stree 1178 California, USA</p>
            </div>
            <div className={s.center__bottom}>
                <p className={s.center__adres}>Delivery Time</p>
                <p className={s.canter__desc}>15 Minutes</p>
            </div>
        </div>
        <div className={s.bottom__bot}>
            <Button className={s.pending}>Pending</Button>
        </div>
        </div>
    
      
    </article>
  );
};
