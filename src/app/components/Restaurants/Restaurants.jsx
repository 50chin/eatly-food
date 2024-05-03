import s from "./Restaurants.module.scss";
import { Container } from "../../../layouts/Container/Container";
import { useEffect, useState } from "react";
import { RestaurantsCard } from "../RestaurantsCard/RestaurantsCard";
const API = "http://localhost:7777/restaurants";

export const Restaurants = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const func = async () => {
            const res = await fetch(API);
            const arr = await res.json();
            console.log(arr);
            setData(arr);
        };

        func();
    }, []);

    console.log(data);

    return (
        <section className={s.section}>
            <Container>
                <div className={s.section__restaurants}>
                    <h2 className={s.section__title}>Our Top <span className={s.title__name}>Restaurants</span></h2>
                    <div className={s.section__content}>
                        {data.map((el, index) => {
                            if (index < 3) {
                                return (
                                    <RestaurantsCard
                                        image={el.image}
                                        type={el.type}
                                        name={el.name}
                                        duration={el.duration}
                                        rating={el.rating}
                                    />
                                );
                            }
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};
