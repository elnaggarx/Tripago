import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./FooterStyles.css";
function Footer(props){
    return <div className={props.cName}>
        <div className="footer-flex">
            <h1>Tripago</h1>
            <div className="icons">
                <FacebookIcon></FacebookIcon>
                <InstagramIcon></InstagramIcon>
            </div>
        </div>
        <div className="footer-grid">
            <div className="footer-grid-col">
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All versions</a>
            </div>
            <div className="footer-grid-col">
                <h4>Community</h4>
                <a href="/">Github</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                <a href="/">X</a>
            </div>
            <div className="footer-grid-col">
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                <a href="/">Contact us</a>
            </div>
            <div className="footer-grid-col">
                <h4>Other</h4>
                <a href="/">Terms of service</a>
                <a href="/">Privacy Policy</a>
                <a href="/">License</a>
            </div>
        </div>

    </div>
}
export default Footer;