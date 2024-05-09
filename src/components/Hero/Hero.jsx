import s from "./Hero.module.scss";
import logoHero from "../../assets/img/Hero/logoHero.webp";
import starsHero from "../../assets/img/Hero/starsHero.webp";
import HeroImage from "../../assets/img/Hero/HeroImage.png";
import arrow from "../../assets/icons/Hero/arrow.svg";
import vector from "../../assets/icons/Hero/vector.svg";
import { Container } from "../../layouts/Container/Container";
import { Button } from "../../ui/Button/Button";

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
            <div className={s.hero__buttons}>
              <Button variant="fill" size="small">
                Get Started
              </Button>
              <Button variant="empty" size="small" border="true">
                Go Pro
              </Button>
            </div>
            <div className={s.hero__application}>
              <img className={s.hero__logo} src={logoHero} alt="logo" />
              <img className={s.hero__stars} src={starsHero} alt="stars" />
              <p className={s.hero__downloads}>4900+</p>
            </div>
          </div>
          <div className={s.hero__image}>
            <img src={HeroImage} alt="food" />
          </div>
        </div>
      </Container>
    </>
  );
};
