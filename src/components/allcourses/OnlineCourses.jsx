import React from "react";
import Title from "../common/title/Title";
import { online } from "../../dummydata";

const OnlineCourses = () => {
  return (
    <div>
      <section className="online">
        <div className="container">
          <Title subtitle="COURSES" title="Browse Our Online Courses" />
          <div className="container grid3">
            {online.map((val) => {
              return (
                <div className="box">
                  <div className="img">
                    <img src={val.hoverCover} alt="" />
                    <img src={val.hoverCover} alt="" className="show" />
                  </div>
                  <h1>{val.courseName}</h1>
                  <span>{val.course}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineCourses;
