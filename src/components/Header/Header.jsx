import s from "./Header.module.scss";
import { Container } from "../../layouts/Container/Container";
import img from "./img/Logo.svg";
import { Button } from "../../ui/Button/Button";

export const Header = () => {
  return (
    <header>
      <Container>
        {
          <>
            <div className={s.Header__content}>
              <div className={s.Header__left}>
                <div className={s.Header__image}>
                  <img src={img} alt="img" className={s.Header__logo} />
                </div>
                <p className={s.Header__title}>eatly</p>
              </div>
              <nav className={s.Header__nav}>
                <ul className={s.Header__ul}>
                  <li>
                    <a href="">Menu</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">Pricing</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className={s.Header__right}>
              <Button>Login</Button>
              <Button variant='fill' size="small">Sign up</Button>
              </div>
            </div>
            <hr className={s.Header__hr}/>
          </>
        }
      </Container>
    </header>
  );
};
