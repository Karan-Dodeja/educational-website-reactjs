import React from "react";
import "./Footer.css";
import { blog } from "../../../dummydata";

const Footer = () => {
  return (
    <div>
      <section className="newsletter">
        <div className="container">
          <div className="left row">
            <h1>Newsletter - Stay Updated</h1>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>ACADEMIA</h1>
            <span>online education & learning</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <i className="fa- fa-facebook-f icon"></i>
            <i className="fa- fa-instagram icon"></i>
            <i className="fa- fa-twitter icon"></i>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Jobs</h3>
            {blog.slice(0, 3).map((val) => {
              return (
                <div className="items flexSB">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <span>
                      <i className="fa fa-user"></i>
                      <label htmlFor="">{val.type}</label>
                    </span>
                    <span>
                      <i className="fa fa-calendar-alt"></i>
                      <label htmlFor="">{val.date}</label>
                    </span>
                    <h4>{val.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="box">
            <h3>Have a Question?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                203 Faske ST. Mountain view, San Francisio California, USA
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +123 456 7897
              </li>
              <li className="fa fa-paper-plane">example@gmail.com</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright @2022 All rights reserved </p>
      </div>
    </div>
  );
};

export default Footer;
