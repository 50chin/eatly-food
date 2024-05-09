import s from "./Statistics.module.scss";
import clsx from "clsx";

export const Statistics = () => {
  return (
    <section className={s.statistics}>
      <div className={s.cards}>
        <div className={clsx(s.card, s.card__withborder)}>
          <p className={s.card__title}>10K+</p>
          <p className={s.card__desc}>
            Satisfied Costumers All Great Over The World
          </p>
        </div>
        <div className={clsx(s.card, s.card__withborder)}>
          <p className={s.card__title}>4M</p>
          <p className={s.card__desc}>
            Healthy Dishes Sold Including Milk Shakes Smooth
          </p>
        </div>
        <div className={s.card}>
          <p className={s.card__title}>99.99%</p>
          <p className={s.card__desc}>
            Reliable Customer Support We Provide Great Experiences
          </p>
        </div>
      </div>
    </section>
  );
};
