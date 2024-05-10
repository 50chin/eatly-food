import s from "./Header.module.scss";
import { Container } from "../../layouts/Container/Container";
import img from "./img/Logo.svg";
import { Button } from "../../ui/Button/Button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const [navState, useNavState] = useState(pathname.slice(1));

  return (
    <header className={s.header}>
      <Container className={s.header__container}>
        <div className={s.header__content}>
          <div className={s.header__left}>
            <div className={s.header__image}>
              <Link to={"/"}>
                <img src={img} alt="img" className={s.header__logo} />
              </Link>
            </div>
            <h1 className={s.header__title}>eatly</h1>
          </div>
          <nav className={s.header__nav}>
            <ul className={s.header__lists}>
              <Link to={"/menu"} onClick={() => useNavState("menu")}>
                <li
                  className={s.header__list}
                  style={{
                    color: navState === "menu" ? "#6C5FBC" : "#606060",
                  }}
                >
                  Menu
                </li>
              </Link>
              <Link to={"/blog"} onClick={() => useNavState("blog")}>
                <li
                  className={s.header__list}
                  style={{
                    color: navState === "blog" ? "#6C5FBC" : "#606060",
                  }}
                >
                  Blog
                </li>
              </Link>
              <Link to={"/pricing"} onClick={() => useNavState("pricing")}>
                <li
                  className={s.header__list}
                  style={{
                    color: navState === "pricing" ? "#6C5FBC" : "#606060",
                  }}
                >
                  Pricing
                </li>
              </Link>
              <Link to={"/contacts"} onClick={() => useNavState("contacts")}>
                <li
                  className={s.header__list}
                  style={{
                    color: navState === "contacts" ? "#6C5FBC" : "#606060",
                  }}
                >
                  Contact
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
