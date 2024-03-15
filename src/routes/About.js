import React from "react";
import Hero from "../components/Hero";
import image from "../assets/2.jpg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutsUs";
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