import React from "react";
import Hero from "../components/Hero.jsx";
import image from "../assets/9.jpg"
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import RecentTrips from "../components/RecentTrips.jsx";
function Service(){
    return <div>
        <Navbar></Navbar>
        <Hero mainText="Our Services" cName="hero-about" buttonCName="hero-about-button" textCName="hero-about-h1"
        image={image}> </Hero>
        <RecentTrips cName="recent-trips-services"></RecentTrips>
        <Footer cName="footer-services"></Footer>
        
    </div>;

}
export default Service;