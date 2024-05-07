import s from "./Footer.module.scss";
import img from '../Footer/img/Logo.svg'
import { Container } from "../../layouts/Container/Container";
import inst from './img/inst.png';
import inn from "./img/in.png";
import facebook from './img/facebook.png';
import twitter from './img/twitter.png'
import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    <>
        <footer className={s.Footer}>
      <Container>
        {
            <>
            <div className={s.Footer__content}>
            <div className={s.Footer__top}>
                <div className={s.Footer__left}>
                    <div className={s.Footer__image}>
                    <img src={img} alt="img" className={s.Footer__logo} />
                    </div>
                    <p className={s.Footer__title}>eatly</p>
                </div>
                <nav className={s.Footer__nav}>
                    <ul className={s.Footer__ul}>
                      <Link to={'/'}><li>
                        <a href="">Menu</a>
                    </li></Link>
                    <Link to={'/blog'}><li>
                        <a href="">Blog</a>
                    </li></Link>
                    
                    <li>
                        <a href="">Pricing</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    </ul>
                </nav>
            </div>

                <hr className={s.Footer__hr}/>
              <div className={s.Footer__bottom}>
              <p className={s.Footer__coopirate}>© 2023 EATLY All Rights Reserved.</p>
              <div className={s.Footer__icons}>
                <img src={inst} alt="img" />
                <img src={inn} alt="img" />
                <img src={facebook} alt="img" />
                <img src={twitter} alt="img" />
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
