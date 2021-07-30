import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './images/logo.png';
import menu from './images/menu.png';
import close from './images/close.png';
import barberman from './images/barber-man.jpg';
import pic1 from './images/pic-1.jpg';
import pic2 from './images/pic-2.jpg';
import pic3 from './images/pic-3.jpg';
import pic4 from './images/pic-4.jpg';
import img1 from './images/img-1.jpg';
import img2 from './images/img-2.jpg';
import img3 from './images/img-3.jpg';
import footer from './images/footer-img.png';

import { Beenhere, Call, Email, Facebook, Instagram, LocationCity, Payment, Security, Twitter, ViewWeek, Weekend, YouTube } from '@material-ui/icons';


function App() {
  // var menuBtn = document.getElementById("menuBtn");
  // var sideNav = document.getElementById("sideNav");
  // var menu = document.getElementById("menu");

  // var menuBtn = () => {
  //   if (sideNav.style.right == "-250px") {
  //     sideNav.style.right = "0";
  //   }
  //   else {
  //     sideNav.style.right = "-250px";
  //   }
  // }

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }


  return (
    <>
      <section id="banner">
        <img src={logo} alt="logo" className="logo" />
        <div className="banner-text">
          <h1>Hair Studio</h1>
          <p>Style Your Hair is Style Your Life</p>
          <div className="banner-btn">

            <a href="#"> <span> </span> Find out</a>
            <a href="#"><span></span> Read More</a>
          </div>
        </div>
      </section>
      <div className={clicked ? "sideNav" : "sideNav close"}>
        <nav>
          <ul>
            <li><a href="#banner">HOME</a></li>
            <li>FEATURES</li>
            <li>SERVICES</li>
            <li>TESTIMONIALS</li>
            <li>MEET US ! </li>
          </ul>
        </nav>
      </div>
      <div className="menuBtn" onClick={handleClick}>
        <img src={clicked ? close : menu} alt="menu" />
      </div>

      {/* Feature */}
      <section id="features">
        <div className="title-text">
          <p>FEATURES</p>
          <h1>Why Choose Us</h1>
        </div>
        <div className="feature-box">
          <div className="feature">
            <h1>Experienced Staff</h1>
            <div className="feature-desc">
              <div className="feature-icon">
                {/* <i class="fa fa-shield"></i> */}
                <Security />
              </div>
              <div className="feature-text">
                <p>Good workplace leaders know how to take advantage of the unexpected opportunities
                they have to improve the workplace and support the workforce.
                </p>
              </div>
            </div>
            <h1>Pre Booking Online</h1>
            <div className="feature-desc">
              <div className="feature-icon">
                {/* <i class="fa fa-check-square-o"></i> */}
                <Beenhere />
              </div>
              <div className="feature-text">
                <p>Your time is important to us. Go online to book your seat
                as per your scheduled time.
                </p>
              </div>
            </div>
            <h1>Affordable Cost</h1>
            <div className="feature-desc">
              <div className="feature-icon">
                {/* <i class="fa fa-inr"></i> */}
                <Payment />
              </div>
              <div className="feature-text">
                <p>Good hair style should be available to everyone. Our goal is to make
                  all services affordable.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-img">
            <img src={barberman} alt="barber-man" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="service">
        <div className="title-text">
          <p>SERVICES</p>
          <h1>We Provide Better </h1>
        </div>
        <div className="service-box">
          <div className="single-service">
            <img src={pic1} alt="pic1" />
            <div className="overlay"></div>
            <div className="service-desc">
              <h3>Hair styling</h3>
              <hr></hr>
              <p> Great hair doesn't happen by any chance. It happens by appointment!. Life is more
              beautiful when you meet the right hairdresser.
              </p>
            </div>
          </div>
          <div className="single-service">
            <img src={pic2} alt="pic2" />
            <div className="overlay"></div>
            <div className="service-desc">
              <h3>Beard Trim</h3>
              <hr></hr>
              <p>You call it facial hair. I call it awesomeness escaping through my face.
              You can't buy happiness but you can grow beard.
              </p>
            </div>
          </div>
          <div className="single-service">
            <img src={pic3} alt="pic3" />
            <div className="overlay"></div>
            <div className="service-desc">
              <h3>Hair Cut</h3>
              <hr></hr>
              <p>Remember: Your hair takes 90% of your selfie.
              </p>
            </div>
          </div>
          <div className="single-service">
            <img src={pic4} alt="pic4" />
            <div className="overlay"></div>
            <div className="service-desc">
              <h3>Dry Shampoo</h3>
              <hr></hr>
              <p>The perfect care for your hair. Flakes do not belong on your scalp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonial">
        <div className="title-text">
          <p>TESTIMONIALS</p>
          <h1>What Client Says </h1>
        </div>
        <div className="testimonial-row">
          <div className="testimonial-col">
            <div className="user">
              <img src={img1} alt="img1" />
              <div className="user-info">
                <h4>Brad Pitt <Twitter className="user-icon" /> </h4>
                <small>@bradpitt</small>
              </div>
            </div>
            <p>You call it facial hair. I call it awesomeness escaping through my face.
            You can't buy happiness but you can grow beard.
              </p>
          </div>
          <div className="testimonial-col">
            <div className="user">
              <img src={img2} alt="img2" />
              <div className="user-info">
                <h4>Jessica Alba <Twitter className="user-icon" /> </h4>
                <small>@jessicaalba</small>
              </div>
            </div>
            <p>You call it facial hair. I call it awesomeness escaping through my face.
              </p>
          </div>
          <div className="testimonial-col">
            <div className="user">
              <img src={img3} alt="img3" />
              <div className="user-info">
                <h4>Tom Cruise <Twitter className="user-icon" /> </h4>
                <small>@tomcruise</small>
              </div>
            </div>
            <p>You call it facial hair. I call it awesomeness escaping through my face.
            You can't buy happiness but you can grow beard.
              </p>
          </div>
        </div>
      </section>

      {/* footer */}
      <section id="footer">
        <img src={footer} alt="footer-img" className="footer-img" />
        <div className="title-text">
          <p>CONTACTS</p>
          <h1> Visit Shop Today</h1>
        </div>
        <div className="footer-row">
          <div className="footer-left">
            <h1>Opening Hours</h1>
            <p><ViewWeek className="footer-icon" /> Monday to Friday - 9am to 9pm</p>
            <p><Weekend className="footer-icon" /> Saturday to Sunday - 8am to 11pm</p>
          </div>
          <div className="footer-right">
            <h1>Get in Touch</h1>
            <p>#30 abc colony, xyz road, City<LocationCity className="footer-icon" /> </p>
            <p>hairstudio@shop.com<Email className="footer-icon" /> </p>
            <p>+91 1234567890<Call className="footer-icon" /> </p>
          </div>
        </div>
        <div className="social-links">
          <Instagram className="social-icon" />
          <Facebook className="social-icon" />
          <Twitter className="social-icon" />
          <YouTube className="social-icon" />
          <p>Copyright (c) @ 2021 Hair Maestro. All rights reserved.</p>
        </div>
      </section>


    </>
  );
}

export default App;
