import { Button } from "../../ui/Button/Button";
import s from "./PricingSubscribe.module.scss";
import cross from "../../assets/icons/Hero/cross.svg";
import tick from "../../assets/icons/Hero/tick.svg";

const coreFeatures = [
  { features: "Support 24/7", includedBasic: tick, includedAll: tick },
  { features: "Fast Delivery", includedBasic: tick, includedAll: tick },
  { features: "20% Off Food Deals", includedBasic: tick, includedAll: tick },
  { features: "Transaction History", includedBasic: tick, includedAll: tick },
  { features: "Weekend Deals", includedBasic: cross, includedAll: tick },
  { features: "Dashboard Access", includedBasic: cross, includedAll: tick },
  { features: "Premium Group Access", includedBasic: cross, includedAll: tick },
];

export const PricingSubscribe = () => {
  return (
    <div className={s.pricing}>
      <div className={s.pricingSubscribe}>
        <div className={s.pricingSubscribe__title}>
          <div className={s.title__descr}>
            <h3>Pricing</h3>
            <p>Affordable Basic & Pro Plans</p>
          </div>
          <div className={s.title__descr}>
            <h3>Basic</h3>
            <p>Completely 100% Free Plan</p>
          </div>
          <div className={s.title__descr}>
            <h3>Premium</h3>
            <p>Amazing Premium Features Plan</p>
          </div>
        </div>
        <div className={s.pricingSubscribe__pricing}>
          <p className={s.pricingSubscribe__price}>
            <span className={s.span__price}>$</span>0
            <span className={s.span__month}>/month</span>
          </p>
          <p className={s.pricingSubscribe__price}>
            <span className={s.span__price}>$</span>5
            <span className={s.span__month}>/month</span>
          </p>
        </div>
        <div className={s.pricingSubscribe__features}>
          <h3>Core features</h3>
          <div className={s.pricingSubscribe__featuresTitle}>
            {coreFeatures.map((el) => {
              return (
                <div className={s.coreFeatures}>
                  <p>{el.features}</p>
                  <img src={el.includedBasic} alt="img" />
                  <img src={el.includedAll} alt="img" />
                </div>
              );
            })}
          </div>
        </div>
        <div className={s.pricingSubscribe__buttons}>
          <Button border="true" variant="fill" size="small">
            START FREE
          </Button>
          <Button border="true" variant="fill" size="small">
            START PRO
          </Button>
        </div>
      </div>
    </div>
  );
};
