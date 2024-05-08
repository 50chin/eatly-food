import { Container } from "../../layouts/Container/Container";
import { Button } from "../../ui/Button/Button";
import s from "./MenuHeroSection.module.scss";
import img from "../../assets/img/Menu/banner.png";
import img2 from "../../assets/img/Menu/banner2.webp";
import img3 from "../../assets/img/Menu/banner3.jpg";
import { useEffect } from "react";
import { useState } from "react";
import clsx from "clsx";



export const MenuHeroSection = () => {
    
    const button1 = document.getElementById(0)
    const button2 = document.getElementById(1);
    const button3 = document.getElementById(2);


    const sliderBase = [img, img2, img3];
    const [slide, setSlide] = useState(sliderBase[0]);
    const [classButton, setClassButton] = useState(0);
    const button1Id = 0;
    const button2Id = 1;
    const button3Id = 2;

    function swapSlide() {
        let index = sliderBase.indexOf(slide);
        if (index == 2) {
            index = 0;
            setSlide(sliderBase[index]);
            setClassButton(index)
        } else {
            index += 1;
            setSlide(sliderBase[index]);
            setClassButton(index)
        }
    }

    useEffect(() => {
        const slideTimer = setInterval(swapSlide, 3000);
        return () => clearInterval(slideTimer);
    }, [slide]);

    useEffect(() => {
        buttonActive
    }, [slide])
    
    const buttonActive = (evt) => {
        setClassButton(evt.target.id);
        console.log(classButton);
        setSlide(sliderBase[evt.target.id])
        evt.target.classList.replace(
            s.menu__sliderLine,
            s.menu__sliderLine_purple
        );
    }

    return (
        <section className={s.menu}>
            <Container>
                <div className={s.menu__content}>
                    <div className={s.menu__left}>
                        <div className={s.menu__slider}>
                            <img className={s.menu__image} src={slide} alt="" />
                            <div className={s.menu__sliderLines}>
                                <button  onClick={buttonActive} id={button1Id} className={clsx(s.button, {[s.menu__sliderLine_purple]: classButton == button1Id, [s.menu__sliderLine]: button1Id != classButton})}></button>
                                <button onClick={buttonActive} id={button2Id} className={clsx(s.button, {[s.menu__sliderLine_purple]: classButton == button2Id, [s.menu__sliderLine]: button2Id != classButton})}></button>
                                <button onClick={buttonActive} id={button3Id} className={clsx(s.button, {[s.menu__sliderLine_purple]: classButton == button3Id, [s.menu__sliderLine]: button3Id != classButton})}></button>
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
