import React from "react";
import Hero from "../components/Hero.jsx";
import image from "../assets/5.jpg"
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ContactForm from "../components/ContactForm.jsx";
function Contact(){
    return <div>
        <Navbar></Navbar>
        <Hero mainText="Contact Us" cName="hero-about" buttonCName="hero-about-button" textCName="hero-about-h1"
        image={image}> </Hero>
        <ContactForm></ContactForm>
        <Footer cName="footer-contact"></Footer>
    </div>;

}
export default Contact;