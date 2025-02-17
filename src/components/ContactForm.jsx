import React from "react";
import "./ContactFormStyles.css";
function ContactForm(){
    return <div className="form-container">
        <h1>Send us a message!</h1>
        <form>
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="Subject"></input>
            <textarea placeholder="Message" rows="4"></textarea>
            <button>Send</button>
        </form>
    </div>;
}
export default ContactForm;