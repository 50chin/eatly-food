import { useEffect, useState } from 'react';
import { ArticleDishes } from '../../components/ArticleDishes/ArticleDishes';
import s from './Dishes.module.scss';
import { Container } from '../Container/Container';
import vector from '../../components/ArticleDishes/img/Vector.svg';
const API = 'http://localhost:7777/dishes';

export const Dishes = () => {
  const [data, setData] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API);
      const jsonData = await response.json();
      // Сортировка данных по убыванию рейтинга
      const sortData = jsonData.sort((a, b) => b.rating - a.rating);
      setData(sortData);
      console.log(sortData);
    };

    fetchData();
  }, []);

  const formatPrice = (price) => {
    const [dollars, cents] = price.split('.');
    return { dollars, cents };
  }

  const toggleViewAll = () => {
    setViewAll(!viewAll); 
  }

  return (
    <section className={s.Dishes}>
      <Container>
        <div className={s.Dishes__content}>
          <div className={s.Dishes__top}>
            <h2 className={s.Dishes__title}>
              Our Top <span className={s.Dishes__span}>Dishes</span>
            </h2>
            <a href="##!" className={s.Dishes__link} onClick={toggleViewAll}>
              View All  <img src={vector} alt="img" />
            </a>
          </div>
          <div className={s.Dishes__cards}>
            {data.map((el, i) => {
              const { dollars, cents } = formatPrice(el.price);
              if (viewAll || i < 5){
                return (
                <ArticleDishes
                  key={el.id}
                  image={el.image}
                  type={el.type}
                  name={el.names}
                  duration={el.duration}
                  rating={el.rating}
                  dollars={dollars}
                  cents={cents}
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
