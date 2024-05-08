import { Container } from "../../layouts/Container/Container";
import { Button } from "../../ui/Button/Button";
import s from "./MenuHeroSection.module.scss";
import img from "../../assets/img/Menu/banner.png";
import img2 from "../../assets/img/Menu/banner2.webp";
import img3 from "../../assets/img/Menu/banner3.jpg";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const MenuHeroSection = () => {
    const sliderBase = [img, img2, img3];
    const [slide, setSlide] = useState(sliderBase[0]);
    const [classButton, setClassButton] = useState(0);

    const swapSlide = () => {
        let index = sliderBase.indexOf(slide);
        if (index == 2) {
            index = 0;
            setSlide(sliderBase[index]);
            setClassButton(index);
        } else {
            index += 1;
            setSlide(sliderBase[index]);
            setClassButton(index);
        }
    };

    useEffect(() => {
        const slideTimer = setInterval(swapSlide, 3000);
        return () => clearInterval(slideTimer);
    }, [slide]);

    const buttonActive = (evt) => {
        setSlide(sliderBase[evt.target.id]);
        setClassButton(Number(evt.target.id));
    };

    return (
        <section className={s.menu}>
            <Container>
                <div className={s.menu__content}>
                    <div className={s.menu__left}>
                        <div className={s.menu__slider}>
                            <img className={s.menu__image} src={slide} alt="" />
                            <div className={s.menu__sliderLines}>
                                {[...Array(3).keys()].map((i) => (
                                    <button
                                        key={i}
                                        onClick={buttonActive}
                                        id={i}
                                        className={clsx(s.button, {
                                            [s.menu__sliderLine_purple]:
                                                classButton == i,
                                            [s.menu__sliderLine]:
                                                classButton != i,
                                        })}
                                    ></button>
                                ))}
                            </div>
                        </div>
                        <div className={s.menu__search}>
                            <input className={s.menu__input} type="text" />
                            <Button />
                        </div>
                    </div>
                    <div className={s.menu__right}></div>
                </div>
            </Container>
        </section>
    );
};
