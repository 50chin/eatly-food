import s from "./Restaurants.module.scss";
import { Container } from "../Container/Container";
import { useContext, useEffect, useState } from "react";
import { RestaurantsCard } from "../../components/RestaurantsCard/RestaurantsCard";
const API = "http://localhost:7777/restaurants";
import img from "../../assets/icons/Hero/Vector1.png";
import { InputContext } from "../../context/InputContext";


export const Restaurants = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState(3);
  const [viewState, setViewState] = useState(false);
  const [buttonText, setButtonText] = useState("View All");
  

  const {inputValue, inputHandler} = useContext(InputContext);
  

  useEffect(() => {
    const func = async () => {
      const res = await fetch(API);
      const arr = await res.json();
      setData(arr);
    };

    func();
  }, []);

  function viewAll() {
    if (viewState) {
      setViewState(false);
      setView(3);
      setButtonText("View All");
    } else {
      setViewState(true);
      setView(data.length);
      setButtonText("Hide");
    }
  }

  const filterData = data.filter((el) =>
      el.name.toLowerCase().includes(inputValue.toLowerCase().trim())
  );

  return (
    <section className={s.section}>
      <Container className={s.section__container}>
        <div className={s.section__restaurants}>
          <h2 className={s.section__title}>
            Our Top <span className={s.section__title_purple}>Restaurants</span>
          </h2>
          <div className={s.section__content}>
            {filterData.map((el, i) => {
              if (i < view) {
                return (
                  <RestaurantsCard
                    key={i}
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
          <div className={s.section__subContent}>
            <button onClick={viewAll} className={s.section__link}>
              {buttonText} <img src={img} alt="" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
