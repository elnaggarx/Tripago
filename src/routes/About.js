import React from "react";
import Hero from "../components/Hero.jsx";
import image from "../assets/2.jpg"
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import AboutUs from "../components/AboutsUs.jsx";
function About(){
    return <div>
        <Navbar></Navbar>
        <Hero mainText="About" cName="hero-about" buttonCName="hero-about-button" textCName="hero-about-h1"
        image={image}> </Hero>
        <AboutUs></AboutUs>
        <Footer cName="footer-about"></Footer>
    </div>;

}
export default About;