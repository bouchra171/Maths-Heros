import React from "react";
import '../Style/Footer.css';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
    return (
        <div className="footer">
            <p>© 2023 Super Maths Héros. Tous droits réservés.</p>
            <div className="social-icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
    );
}

export default Footer;
