import s from "./ReviewCard.module.scss";
import stars from "../../assets/img/ReviewCard/stars.svg";
import man from "../../assets/img/ReviewCard/man.webp";
import comma from "../../assets/icons/Hero/comma.svg";

export const ReviewCard = ({ flex }) => {
  return (
    <article className={s.review__card}>
      <div className={s.review__people} style={flex}>
        <img className={s.review__man} src={man} alt="man" />
        <div className={s.man__information}>
          <p className={s.review__name}>Alexander R.</p>
          <p className={s.review__date}>01 Year With Us</p>
        </div>
        <img className={s.review__comma} src={comma} alt="comma" />
      </div>
      <p className={s.review__text}>
        “ Online invoice payment helps companies save time, are faster and save
        maximum effort for the clients and save maximum effort. Online invoice
        payment helps companies save time ”
      </p>
      <img className={s.review__stars} src={stars} alt="stars" />
    </article>
  );
};
