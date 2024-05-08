import s from "./Header.module.scss";
import { Container } from "../../layouts/Container/Container";
import img from "./img/Logo.svg";
import { Button } from "../../ui/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [navState, useNavState] = useState("");

  const activePages = (page) => {
    useNavState(page);
  };

  return (
    <header className={s.header}>
      <Container className={s.header__container}>
        <div className={s.header__content}>
          <div className={s.header__left}>
            <div className={s.header__image}>
              <Link to={"/"}>
                <a href="#">
                  <img src={img} alt="img" className={s.header__logo} />
                </a>
              </Link>
            </div>
            <h1 className={s.header__title}>eatly</h1>
          </div>
          <nav className={s.header__nav}>
            <ul className={s.header__lists}>
              <Link to={"/"}>
                <li className={s.header__list}>
                  <a
                    onClick={() => activePages("menu")}
                    style={{
                      color: navState === "menu" ? "#6C5FBC" : "#606060",
                    }}
                    href="menu"
                  >
                    Menu
                  </a>
                </li>
              </Link>
              <Link to={"/blog"}>
                <li className={s.header__list}>
                  <a
                    onClick={() => activePages("blog")}
                    style={{
                      color: navState === "blog" ? "#6C5FBC" : "#606060",
                    }}
                    href="blog"
                  >
                    Blog
                  </a>
                </li>
              </Link>
              <Link to={"/pricing"}>
                <li className={s.header__list}>
                  <a
                    onClick={() => activePages("pricing")}
                    style={{
                      color: navState === "pricing" ? "#6C5FBC" : "#606060",
                    }}
                    href="pricing"
                  >
                    Pricing
                  </a>
                </li>
              </Link>
              <Link to={"/contacts"}>
                <li className={s.header__list}>
                  <a
                    onClick={() => activePages("contacts")}
                    style={{
                      color: navState === "contacts" ? "#6C5FBC" : "#606060",
                    }}
                    href=""
                  >
                    Contact
                  </a>
                </li>
              </Link>
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
