import React from "react";
import TeamCard from "./TeamCard";
import Back from "../../common/back/Back";
import "./team.css";

const Team = () => {
  return (
    <div>
      <Back title="Team" />
      <section className="team padding">
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
    </div>
  );
};

export default Team;
