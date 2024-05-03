import s from "./Hero.module.scss";
import logoHero from "../../assets/img/Hero/logoHero.webp";
import starsHero from "../../assets/img/Hero/starsHero.webp";
import foodHero from "../../assets/img/Hero/foodHero.webp";
import arrow from "../../assets/icons/Hero/arrow.svg";
import lines from "../../assets/icons/Hero/lines.svg";
import lines2 from "../../assets/icons/Hero/lines2.svg";
import vector from "../../assets/icons/Hero/vector.svg";
import { Container } from "../../layouts/Container/Container";

export const Hero = () => {
  return (
    <>
      <Container>
        <div className={s.hero}>
          <div className={s.hero__content}>
            <div className={s.hero__users}>
              <hr className={s.hero__hr} />
              <p className={s.hero__usersTitle}>OVER 1000 USERS</p>
            </div>
            <h1 className={s.hero__title}>
              Enjoy Foods All Over The
              <span className={s.hero__span}> World</span>
            </h1>
            <p className={s.hero__text}>
              EatLy help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a <span className={s.hero__spanSecond}>$20 bonus</span>
            </p>
            <button></button>
            <button></button>
            <div className={s.hero__application}>
              <img className={s.hero__logo} src={logoHero} alt="logo" />
              <img className={s.hero__stars} src={starsHero} alt="stars" />
              <p className={s.hero__downloads}>4900+</p>
            </div>
          </div>
          <div className={s.hero__image}>
            <img className={s.hero__food} src={foodHero} alt="chicken" />
            <div className={s.hero__foodMini}>
              <img className={s.hero__arrow} src={arrow} alt="arrow" />
              <img
                className={s.hero__foodMini__image}
                src={foodHero}
                alt="chicken"
              />
              <div className={s.hero__foodMini__text}>
                <p className={s.hero__foodMini__title}>Chicken Hell</p>
                <p className={s.hero__foodMini__descr}>On The Way</p>
              </div>
              <time className={s.hero__foodMini__time}>3:09 PM</time>
              <img className={s.hero__lines2} src={lines2} alt="line" />
            </div>
            <div className={s.hero__graph}>
              <div className={s.hero__times}>
                <span className={s.hero__timesSpan}>
                  <p clas>Main</p>
                </span>
                <p>Weekly</p>
                <p>Montly</p>
                <p>Yearly</p>
              </div>
              <img className={s.hero__vector} src={vector} alt="vector" />
              <div className={s.hero__ellips}></div>
              <div className={s.hero__dimensional}>
                <span className={s.hero__dimensionalSpan}>
                  <p>2D</p>
                </span>
                <p>4D</p>
                <p>5D</p>
                <p>6D</p>
                <p>7D</p>
              </div>
              <img className={s.hero__lines} src={lines} alt="line" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
