import s from './RestaurantsCard.module.css'

export const RestaurantsCard = ({image}) => {
    return <article className={s.card}>
        <div className={s.cardContent}>
            <div className={s.cardTop}>
                <img className={s.cardImg} src={image} alt="" />
            </div>
            <div className={s.cardBottom}>

            </div>

        </div>
</article>}