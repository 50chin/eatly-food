import s from './Header.module.scss';
import { Container } from '../../layouts/Container/Container';
import img from './img/Logo.svg';
import { Button } from '../../ui/Button/Button';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.header__container}>
        <div className={s.header__content}>
          <div className={s.header__left}>
            <div className={s.header__image}>
              <Link to={'/'}>
                <a href="#">
                  <img src={img} alt="img" className={s.Header__logo} />
<<<<<<< HEAD
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
=======
                </a>
              </Link>
>>>>>>> main
            </div>
            <p className={s.header__title}>eatly</p>
          </div>
          <nav className={s.header__nav}>
            <ul className={s.header__lists}>
              <Link to={'/'}>
                <li className={s.header__list}>
                  <a href="">Menu</a>
                </li>
              </Link>
              <Link to={'/blog'}>
                <li className={s.header__list}>
                  <a href="blog">Blog</a>
                </li>
              </Link>
              <li className={s.header__list}>
                <a href="">Pricing</a>
              </li>
              <li className={s.header__list}>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
          <div className={s.header__right}>
            <Button>Login</Button>
            <Button variant="fill" size="small">
              <Link to={'/signup'}>Sign up</Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
