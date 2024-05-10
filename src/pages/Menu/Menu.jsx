import { BlogQuestion } from "../../components/BlogQuestion/BlogQuestion";
import { MenuHeroSection } from "../../components/MenuHeroSection/MenuHeroSection";
import { Container } from "../../layouts/Container/Container";
import { Dishes } from "../../layouts/Dishes";
import { Layout } from "../../layouts/Layout/Layout";
import { Restaurants } from "../../layouts/Restaurants/Restaurants";
import s from "./Menu.module.scss";

export const Menu = () => {
  return (
    <Layout>
      <section className={s.menu}>
        <Container>
          <MenuHeroSection />
          <Restaurants />
          <Dishes />
          <BlogQuestion />
        </Container>
      </section>
    </Layout>
  );
};
