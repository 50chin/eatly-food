import s from './Footer.module.scss';
import img from '../Footer/img/Logo.svg';
import { Container } from '../../layouts/Container/Container';
import inst from './img/inst.png';
import inn from './img/in.png';
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <Container>
          {
            <>
              <div className={s.footer__content}>
                <div className={s.footer__top}>
                  <div className={s.footer__left}>
                    <div className={s.footer__image}>
                      <Link to={'/'} onClick={() => scrollToTop()}>
                        <a href="#">
                          <img src={img} alt="img" className={s.footer__logo} />
                        </a>
                      </Link>
                    </div>
                    <p className={s.footer__title}>eatly</p>
                  </div>
                  <nav className={s.footer__nav}>
                    <ul className={s.footer__navigation}>
                      <Link to={'/'}>
                        <li>
                          <a href="">Menu</a>
                        </li>
                      </Link>
                      <Link to={'/blog'}>
                        <li>
                          <a href="">Blog</a>
                        </li>
                      </Link>
                      <Link to={'/pricing'}>
                        <li className={s.header__list}>
                          <a href="pricing">Pricing</a>
                        </li>
                      </Link>
                      <Link to={'/contacts'}>
                        <li className={s.header__list}>
                          <a href="">Contact</a>
                        </li>
                      </Link>
                    </ul>
                  </nav>
                </div>

                <hr className={s.footer__hr} />
                <div className={s.footer__bottom}>
                  <p className={s.footer__coopirate}>
                    © 2023 EATLY All Rights Reserved.
                  </p>
                  <div className={s.footer__icons}>
                    <ul className={s.footer__lists}>
                      <li>
                        <a href="#">
                          <img src={inst} alt="img" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={inn} alt="img" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={facebook} alt="img" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={twitter} alt="img" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          }
        </Container>
      </footer>
    </>
  );
};
