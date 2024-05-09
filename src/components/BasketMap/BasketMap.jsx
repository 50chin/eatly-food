import { Container } from "../../layouts/Container/Container";
import { BasketForm } from "../BasketForm/BasketForm";
import s from "./BasketMap.module.scss";

export const BasketMap = () => {
  const srcURL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83864.62856890462!2d-121.74620020699302!3d38.63421029051268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2z0KHQsNC60YDQsNC80LXQvdGC0L4sINCa0LDQu9C40YTQvtGA0L3QuNGPLCDQodCo0JA!5e0!3m2!1sru!2sru!4v1715177025242!5m2!1sru!2sru";
  return (
    <div className={s.map}>
    <Container>
    <div className={s.map__content}>
        <iframe
          src={srcURL}
          width="100%-30px"
          height="714"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <BasketForm/>
      </div>
    </Container>
      
    </div>
  );
};
