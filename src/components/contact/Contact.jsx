import React from "react";
import "./contact.css";
import Back from "../common/back/Back";

const Contact = () => {
  const data = "";
  return (
    <div>
      <Back title="Contact Us" />
      <section className="container padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={data}></iframe>
          </div>
          <div className="right now">
            <h1>Contact Us</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS: </h4>
                <p>198 west 21st street, suite 751 New York NY 10016</p>
              </div>
              <div className="box">
                <h4>Email: </h4>
                <p>info@gmail.com</p>
              </div>
              <div className="box">
                <h4>Phone: </h4>
                <p>+123 456 789</p>
              </div>
            </div>
            <form action="">
              <div className="flexSB">
                <input type="text" name="" id="" placeholder="name" />
                <input type="email" name="" id="" placeholder="email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>
            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
