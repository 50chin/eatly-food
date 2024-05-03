import { Statistics } from "../../components/Statistics/Statistics";
import s from "./Home.module.scss";
import { Layout } from "../../layouts/Layout/Layout";

export const Home = () => {
  return (
    <>
      <Layout>
        <div>
          <Statistics></Statistics>
        </div>
      </Layout>
    </>
  );
};
