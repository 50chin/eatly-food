import s from "./ReviewCard.module.scss";
import stars from "../../assets/img/ReviewCard/stars.svg";

export const ReviewCard = () => {
  return (
      <article className={s.review__card}>
        <p className={s.review__text}>
          “ Online invoice payment helps companies save time, are faster and
          save maximum effort for the clients and save maximum effort. Online
          invoice payment helps companies save time ”
        </p>
        <img className={s.review__stars} src={stars} alt="stars" />
      </article>
  );
};
