import { BlogArticles } from "../../components/BlogArticles/BlogArticles";
import { BlogQuestion } from "../../components/BlogQuestion/BlogQuestion";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import { Container } from "../../layouts/Container/Container";
import { Layout } from "../../layouts/Layout/Layout";
import s from "./BlogPage.module.scss";

export const BlogPage = () => {
  return (
    <>
      <Layout>
        <section className={s.blog}>
          <Container>
            <Subscribe />
            <BlogArticles />
            <BlogQuestion />
          </Container>
        </section>
      </Layout>
    </>
  );
};
