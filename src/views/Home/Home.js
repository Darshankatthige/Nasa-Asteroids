import React from "react";
import "./home.css";
import emoji from "./emoji.jpg";

export const Home = () => {
  return (
    <section class="about-us py-5 " id="about-us">
      <div class="container ">
        <div class="row">
          <div class="col-md-8 mt-5">
            <h1 class="text-success">Hey!</h1>
            <h2>Darshan Katthige here!</h2>
            <hr />
            <p>I'am a Front End Developer. Living in Banglore IN.</p>
            <p>
              Software professional with 3 years of experience Software design,
              development and deployment. Strong experience in designing and
              developing applications using React and Vue in a strictly
              process-oriented and highly regulated environment. Self-driven and
              motivated with the desire to work in a fast-paced, results-drive
            </p>
            <div className="d-flex">
			<a href="https://www.linkedin.com/in/darshankatthiger/" target="_blank" class="fa fa-linkedin"></a>
			<a href="https://github.com/Darshankatthige" target="_blank" class="fa fa-github"></a>
            <a href="https://www.facebook.com/darshankatthigeR" target="_blank" class="fa fa-facebook "></a>
            <a href="https://twitter.com/DarshankrR" target="_blank" class="fa fa-twitter "></a>
			<a href="https://www.instagram.com/darshankatthige/"  target="_blank" class="fa fa-instagram"></a>
			<a href="./resume.pdf" download class="fa fa-download"></a>
            </div>  
          </div>
          <div class="col-md-4 image-container text-right text-center">
            <img className="emoji" src={emoji} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
