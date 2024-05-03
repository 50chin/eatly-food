import { Container } from '../Container/Container';
import s from './Purchases.module.scss';
import img1 from '../../assets/img/purchases/1.png';
import img2 from '../../assets/img/purchases/2.png';
import img3 from '../../assets/img/purchases/3.png';
import iconWallet from '../../assets/icons/Hero/wallet.svg';
import iconMoney from '../../assets/icons/Hero/money.svg';
import linePurple from '../../assets/icons/Hero/divider-purple.svg';
import lineYellow from '../../assets/icons/Hero/divider-yellow.svg';

import { PurchasesCards } from '../../components/PurchasesCards/PurchasesCards';

const cards = [
  {
    img: img1,
    name: 'Chicken Hell',
    status: 'On The Way',
    time: '3:09 PM',
  },
  {
    img: img2,
    name: 'Swe Dish',
    status: 'Delivered',
    time: 'Yesterday',
  },
  {
    img: img3,
    name: 'Fish Hell Veg',
    status: 'Cancelled',
    time: 'Yesterday',
  },
];

export const Purchases = () => {
  return (
    <section className={s.purchases}>
      <Container className={s.purchases__container}>
        <div className={s.purchases__wrapper}>
          <div className={s.purchases__left}>
            <h2 className={s.purchases__title}>
              Control <span>Purchases</span> Via Dashboard
            </h2>
            <div className={s.purchases__cards}>
              {cards.map((el, i) => (
                <PurchasesCards
                  key={i}
                  img={el.img}
                  name={el.name}
                  status={el.status}
                  time={el.time}
                />
              ))}
            </div>
          </div>
          <div className={s.purchases__illustration}>
            <div className={s.purchases__illustrationTop}>
              <p className={s.purchases__copy}>Purchases</p>
              <select className={s.purchases__date} name="" id="">
                <option value="This month">This month</option>
              </select>
            </div>
            <div className={s.purchases__illustrationCards}>
              <div className={s.purchases__card}>
                <div className={s.purchases__wrapper}>
                  <div className={s.purchases__name}>
                    <img
                      className={s.purchases__wallet}
                      src={iconWallet}
                      alt="wallet"
                    />
                    <div className={s.purchases__text}>
                      <p>Expense</p>
                      <p>Increased By 10%</p>
                    </div>
                  </div>
                  <p className={s.purchases__result}>$409.00</p>
                </div>
                <img
                  className={s.purchases__line}
                  src={linePurple}
                  alt="line"
                />
              </div>
              <div className={s.purchases__card}>
                <div className={s.purchases__wrapper}>
                  <div className={s.purchases__name}>
                    <img
                      className={s.purchases__money}
                      src={iconMoney}
                      alt="money"
                    />
                    <div className={s.purchases__text}>
                      <p>Vocher Usage</p>
                      <p>Increased By 5%</p>
                    </div>
                  </div>
                  <p className={s.purchases__result}>$45.78</p>
                </div>
                <img
                  className={s.purchases__line}
                  src={lineYellow}
                  alt="line"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
