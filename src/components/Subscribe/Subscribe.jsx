import s from './Subscribe.module.scss';
import subscribeFood from '../../assets/img/Subscribe/subscribeFood.webp';
import { Button } from '../../ui/Button/Button';

export const Subscribe = () => {
  return (
    <div className={s.subscribe}>
      <p className={s.subscribe__sale}>GET 50%</p>
      <form action="#">
        <input
          className={s.subscribe__input}
          type="email"
          name="subscribe"
          id="subscribe"
          placeholder=" Enter Your Email Address"
        />
        <Button variant="fill" size="small" border="true">
          SUBSCRIBE
        </Button>
      </form>
      <img className={s.subscribe__food} src={subscribeFood} alt="food" />
    </div>
  );
};
