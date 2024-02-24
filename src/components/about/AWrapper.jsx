import React from "react";
import { awrapper } from "../../dummydata";

const AWrapper = () => {
  return (
    <div>
      <div>
        <section className="awrapper">
          <div className="container grid">
            {awrapper.map((val) => (
              <div className="box flex">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h1>{val.data}</h1>
                  <h1>{val.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AWrapper;
