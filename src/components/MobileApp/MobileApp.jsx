import s from "./MobileApp.module.scss";
import { Container } from "../../layouts/Container/Container";
import imgMobileScreen from "../../assets/img/mobileApp/mobile-screen.png";
import imgLines from "../../assets/img/mobileApp/lines.png";
import imgButton from "../../assets/img/mobileApp/buttonicon.svg";
import imgLineCurv from "../../assets/img/mobileApp/line-curve.png";
import { Button } from "../../ui/Button/Button";

export const MobileApp = () => {
  return (
    <section className={s.section__MobileApp}>
      <Container>
        <div className={s.allcontent}>
          <div className={s.leftcontent}>
            <img src={imgMobileScreen}></img>
            <img src={imgLines}></img>
          </div>
          <div className={s.rightcontent}>
            <h2 className={s.title}>
              Premium{" "}
              <span className={s.title_span}>
                Quality<br></br>
              </span>{" "}
              For Your Health
            </h2>
            <ul className={s.list}>
              <li>
                Premium quality food is made with ingredients that are packed
                with essential vitamins, minerals.
              </li>
              <li>
                These foods promote overall wellness by support healthy
                digestion and boosting immunity
              </li>
            </ul>
            <div className={s.bottom}>
              <Button variant="fill" size="small">
                <div className={s.button}>
                  <p>Download</p>
                  <img src={imgButton}></img>
                </div>
              </Button>
              <img src={imgLineCurv} className={s.imgbutton}></img>
            </div>
          </div>
        </div>
        <hr className={s.hr}></hr>
      </Container>
    </section>
  );
};
