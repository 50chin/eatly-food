import s from "./Basket.module.scss";
import {Layout} from "../../layouts/Layout/index.js";
import { Subscribe } from "../../components/Subscribe/Subscribe.jsx";
import { BasketMap } from "../../components/BasketMap/BasketMap";
import { Order } from "../../components/Order/Order.jsx";

export const Basket = () => {
  return (
    <div>
      <Layout>
        <BasketMap/>
        <Order/>
        <Subscribe/>
      </Layout>
    </div>
  );
};
