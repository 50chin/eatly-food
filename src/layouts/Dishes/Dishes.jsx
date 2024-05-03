import { ArticleDishes } from '../../components/ArticleDishes/ArticleDishes';
import s from './Dishes.module.scss';
import { Container } from '../Container/Container';
import vector from '../../components/ArticleDishes/img/Vector.svg';

export const Dishes = () => {
  return (
    <section className={s.Dishes}>
      <Container>
        <div className={s.Dishes__content}>
          <div className={s.Dishes__top}>
            <h2 className={s.Dishes__title}>
              Our Top <span className={s.Dishes__span}>Dishes</span>
            </h2>
            <a href="##!" className={s.Dishes__link}>
              View All <img src={vector} alt="img" />
            </a>
          </div>

          <div className={s.Dishes__cards}>
            <ArticleDishes />
          </div>
        </div>
      </Container>
    </section>
  );
};
