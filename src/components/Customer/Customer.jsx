import { Container } from "../../layouts/Container/Container";
import { ReviewCard } from "../ReviewCard";
import s from "./Customer.module.scss";

export const Customer = () => {
  return (
    <Container>
      <div className={s.customer}>
        <h2 className={s.customer__title}>
          <span>Customer</span> Say
        </h2>
        <div className={s.customer__reviews}>
          <div className={s.customer__review}>
            <ReviewCard flex={{ display: "flex" }}></ReviewCard>
          </div>
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
    </Container>
  );
};
