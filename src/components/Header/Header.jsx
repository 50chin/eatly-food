import s from "./Header.module.scss";
import { Container } from "../../layouts/Container/Container";
import img from "./img/Logo.svg";
import { Button } from "../../ui/Button/Button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.header__container}>
        <div className={s.header__content}>
          <div className={s.header__left}>
            <div className={s.header__image}>
              <Link to={"/"}>
                <a href="#">
                  <img src={img} alt="img" className={s.Header__logo} />
                </a>
              </Link>
            </div>
            <p className={s.header__title}>eatly</p>
          </div>
          <nav className={s.header__nav}>
            <ul className={s.header__lists}>
              <Link to={"/"}>
                <li className={s.header__list}>
                  <a href="">Menu</a>
                </li>
              </Link>
              <Link to={"/blog"}>
                <li className={s.header__list}>
                  <a href="blog">Blog</a>
                </li>
              </Link>
              <Link to={"/pricing"}>
                <li className={s.header__list}>
                  <a href="pricing">Pricing</a>
                </li>
              </Link>
              <li className={s.header__list}>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
          <div className={s.header__right}>
            <Button>Login</Button>
            <Button variant="fill" size="small">
              <Link to={"/signup"}>Sign up</Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
