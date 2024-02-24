import React from "react";
import "./style.css";
import { testimonial } from "../../dummydata";
import Title from "../common/title/Title";

const Test = () => {
  return (
    <div>
      <section className="testimonial padding">
        <div className="container">
          <Title subtitle="testimonial" title="Our Successful Students" />
          <div className="content grid2">
            {testimonial.map((val) => (
              <div className="items shadow">
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className="fa fa-quote-left icon"></i>
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test;
