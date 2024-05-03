import s from './PurchasesCards.module.scss';

export const PurchasesCards = ({ img, name, status, time }) => {
  return (
    <article className={s.card}>
      <div className={s.card__wrapper}>
        <img src={img} alt="img" />
        <div>
          <h3 className={s.card__name}>{name}</h3>
          <p
            className={s.card__status}
            style={{ color: status === 'Cancelled' ? 'red' : null }}
          >
            {status}
          </p>
        </div>
      </div>
      <p className={s.card__time}>{time}</p>
    </article>
  );
};
