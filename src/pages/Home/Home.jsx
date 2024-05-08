import { MobileApp } from "../../components/MobileApp/MobileApp";
import { Statistics } from "../../components/Statistics/Statistics";
import s from "./Home.module.scss";
import { Layout } from "../../layouts/Layout/Layout";
import { Hero } from "../../components/Hero/Hero";
import { Purchases } from "../../layouts/Purchases/Purchases";
import { Restaurants } from "../../layouts/Restaurants/Restaurants";
import { Dishes } from "../../layouts/Dishes";
import { Customer } from "../../components/Customer/Customer";
import { Subscribe } from "../../components/Subscribe/Subscribe";

export const Home = () => {
  return (
    <>
      <Layout>
        <Hero></Hero>
        <Statistics></Statistics>
        <MobileApp></MobileApp>
        <Restaurants />
        <Dishes />
        <Purchases />
        <Customer />
        <Subscribe />
      </Layout>
    </>
  );
};
