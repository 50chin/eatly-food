import { ReviewCard } from "../ReviewCard";
import s from "./Customer.module.scss";

export const Customer = () => {
  return (
    <div className={s.customer}>
      <h2 className={s.customer__title}>
        <span>Customer</span> Say
      </h2>
      <div className={s.customer__reviews}>
        <ReviewCard></ReviewCard>
        <div className={s.customer__reviewsScroll}>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
        </div>
      </div>
    </div>
  );
};
