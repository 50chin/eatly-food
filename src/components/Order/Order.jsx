import { Container } from '../../layouts/Container/Container'
import s from './Order.module.scss'
import { OrderCard } from '../OrderCard/OrderCard';
import {Button} from "../../ui/Button/Button";

export const Order = () => {return <div className={s.order}>
<Container>
    <div className={s.order__content}>
        <div className={s.order__cards}>
            <OrderCard/>
            <OrderCard/>
        </div>
        <div className={s.order__result}>
            <div className={s.order__inputs}>
            <form className={s.order__form}>
                <span className={s.order__span}></span>
                <input type="text" className={s.order__input} placeholder="Apply Coupon"/>
                <Button variant="fill" border="true" size="small" className={s.order__btn}>Apply</Button>
            </form>
            </div>
            <div className={s.order__position}>
                <div className={s.order__subtotal}>
                    <p className={s.order__name}>Subtotal</p>
                    <p className={s.order__price}>$58.96</p>
                </div>
                <svg width="100%" height="1px">
                    <rect width="100%" height="1px" fill="transparent" stroke="#ACADB9" stroke-width="2" stroke-dasharray="5,10" opacity="0.9"/>
                </svg>
                <div className={s.order__subtotal}>
                    <p className={s.order__name}>Delivery</p>
                    <p className={s.order__price}>$3.59</p>
                </div>
                <svg width="100%" height="1px">
                    <rect width="100%" height="1px" fill="transparent" stroke="#ACADB9" stroke-width="2" stroke-dasharray="5,10" opacity="0.9"/>
                </svg>
            </div>
            <div className={s.order__total}>
                <p className={s.order__item}>Total</p>
                <p className={s.order__item}>$62.55</p>
            </div>
            <div className={s.order__bottom}>
                <Button variant="fill" size="large" className={s.btn}>Review Payment</Button>
            </div>
        </div>
    </div>
</Container>
</div>}