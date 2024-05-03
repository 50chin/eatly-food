import { Container } from '../Container/Container';
import s from './Purchases.module.scss';

const cards = [{
  
}];

export const Purchases = () => {
  return (
    <section className={s.purchases}>
      <Container>
        <div className={s.purchases__left}>
          <h2 className={s.purchases__title}>
            Control <span>Purchases</span> Via Dashboard
          </h2>
        </div>
        <div className={s.purchases__right}>
          <div className={s.purchases__card}></div>
        </div>
      </Container>
    </section>
  );
};
