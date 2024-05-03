
import { MobileApp } from '../../components/MobileApp/MobileApp';
import { Statistics } from '../../components/Statistics/Statistics';
import s from './Home.module.scss';
import { Layout } from '../../layouts/Layout/Layout';
import { Hero } from '../../components/Hero/Hero';
import { Purchases } from '../../layouts/Purchases/Purchases';

export const Home = () => {
  return (
    <>
      <Layout>
        <Hero></Hero>
        <Statistics></Statistics>
        <MobileApp></MobileApp>
        <Purchases />
      </Layout>
    </>
  );
};
