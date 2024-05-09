import { Link } from "react-router-dom";
import { Container } from "../../layouts/Container/Container";
import { Layout } from "../../layouts/Layout/Layout";
import { Customer } from "../../components/Customer/Customer";
import { OurPricing } from "../../components/OurPricing/OurPricing";
import { Purchases } from "../../layouts/Purchases/Purchases";
import s from "./Pricing.module.scss";
import { PricingSubscribe } from "../../components/PricingSubscribe/PricingSubscribe";

export const Pricing = () => {
  return (
    <>
      <Link to={"/pricing"}>
        <Layout>
          <Container>
            <OurPricing></OurPricing>
            <Purchases></Purchases>
            <Customer></Customer>
          </Container>
        </Layout>
      </Link>
    </>
  );
};
