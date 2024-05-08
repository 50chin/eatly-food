import s from "./Header.module.scss";
import { Container } from "../../layouts/Container/Container";
import img from "./img/Logo.svg";
import { Button } from "../../ui/Button/Button";
import { Link } from "react-router-dom";

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
                  <Link to={"/"}>
                    <li>
                      <a href="">Menu</a>
                    </li>
                  </Link>
                  <Link to={"/blog"}>
                    <li>
                      <a href="blog">Blog</a>
                    </li>
                  </Link>
                  <Link to={"/pricing"}>
                    <li>
                      <a href="pricing">Pricing</a>
                    </li>
                  </Link>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className={s.Header__right}>
                <Button>Login</Button>
                <Button variant="fill" size="small">
                  <Link to={"/signup"}>Sign up</Link>
                </Button>
              </div>
            </div>
            <hr className={s.Header__hr} />
          </>
        }
      </Container>
    </header>
  );
};
