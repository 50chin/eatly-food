import { Tag } from '../Tag/Tag'
import s from './RestaurantsCard.module.scss'
import star from './img/Star.svg'

export const RestaurantsCard = ({image, type, name, duration, rating}) => {
    return <article className={s.card}>
        <div className={s.card__content}>
            <div className={s.card__top}>
                <img className={s.card__img} src={image} alt="" />
            </div>
            <div className={s.card__bottom}>
                <div className={s.card__title}>
                    <Tag>{type}</Tag>
                    <p className={s.card__name}>{name}</p>
                </div>
                <div className={s.card__description}>
                    <div className={s.card__characteristic}>
                        <p className={s.card__text}>{duration}min •</p>
                        <div className={s.card__rating} style={{ width: '27px' }} >
                            <img src={star} alt="" />
                            <p className={s.card__text}>{rating}</p>
                        </div>
                    </div>
                        {/* Место под кнопку */}
                </div>
            </div>

        </div>
</article>}