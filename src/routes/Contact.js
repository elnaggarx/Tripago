import React from "react";
import Hero from "../components/Hero";
import image from "../assets/5.jpg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
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