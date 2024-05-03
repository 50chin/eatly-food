import { MobileApp } from "../../components/MobileApp/MobileApp";
import { Statistics } from "../../components/Statistics/Statistics";
import s from "./Home.module.scss";

export const Home = () => {
  return (
    <div>
      <Statistics></Statistics>
      <MobileApp></MobileApp>
    </div>
  );
};
