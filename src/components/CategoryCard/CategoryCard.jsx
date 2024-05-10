import { CategoryButton } from "../../ui/CategoryButton/CategoryButton";
import s from "./CategoryCard.module.scss";
import line from "../../assets/img/Range.png";
import { Button } from "../../ui/Button/Button";

export const CategoryCard = ({ data }) => {
  return (
    <div className={s.card}>
      <p className={s.card__title}>Category</p>
      <div className={s.card__btns}>
        {data.map((el) => (
          <CategoryButton key={el.id} category={el.name}>
            <img className={s.card__img} src={el.icon} alt="" />
            <p className={s.card__name}>{el.name}</p>
          </CategoryButton>
        ))}
      </div>
      <p className={s.card__title}>Sort By</p>
      <div className={s.card__wrapper}>
        <p className={s.card__text}>Recomended</p>
        <select name="" id="">
          <option value="">Fast Delivery</option>
        </select>
      </div>
      <p className={s.card__text}>Most Popular</p>
      <p className={s.card__title}>Price</p>
      <img className={s.card__line} src={line} alt="" />
      <Button variant="fill" size="middle" className={s.card__btn}>
        Apply
      </Button>
    </div>
  );
};
