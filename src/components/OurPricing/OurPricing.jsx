import s from "./OurPricing.module.scss";
import pricing from "../../assets/img/Pricing/pricingTop.png";
import vector from "../../assets/img/Pricing/vectorPricing.svg";
import linesWhite from "../../assets/img/Pricing/linesWhite.svg";
import linesPurple from "../../assets/img/Pricing/linesPurple.svg";
// import { Container } from "../../layouts/Container/Container";
import { PricingSubscribe } from "../PricingSubscribe/PricingSubscribe";

export const OurPricing = ({ title, descr }) => {
  return (
    <>
      <div className={s.ourPricing}>
        <div className={s.pricing}>
          <div className={s.pricing__title}>
            <img className={s.pricing__vector} src={vector} alt="vector" />
            <h2>Our Pricing</h2>
          </div>
          <img className={s.pricing__image} src={pricing} alt="pricing" />
          <img
            className={s.pricing__linesWhite}
            src={linesWhite}
            alt="linesWhite"
          />
          <img
            className={s.pricing__linesPurple}
            src={linesPurple}
            alt="linesPurple"
          />
        </div>
        <PricingSubscribe title={title} descr={descr} />
      </div>
    </>
  );
};
