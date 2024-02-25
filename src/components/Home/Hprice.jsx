import React from "react";
import Title from "../common/title/Title";
import { PriceCard } from "../pricing/PriceCard";

const Hprice = () => {
  return (
    <div>
      <section className="blog">
        <Title subtitle="our pricing" title="pricing and packages" />
        <div className="price container grid">
          <PriceCard />
        </div>
      </section>
    </div>
  );
};

export default Hprice;
