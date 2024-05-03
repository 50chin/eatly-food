
import { MobileApp } from "../../components/MobileApp/MobileApp";
import { Statistics } from "../../components/Statistics/Statistics";
import s from "./Home.module.scss";
import { Layout } from "../../layouts/Layout/Layout";

export const Home = () => {
  return (
    <div>
      <Statistics></Statistics>
      <MobileApp></MobileApp>
    </div>
  );
};
