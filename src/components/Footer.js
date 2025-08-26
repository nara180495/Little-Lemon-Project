import React from "react";
import logo from "../images/Logo .svg"

const Footer = () =>{
    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=""/>
                    <p> We are a family owned Mediterraneran restauran, focused on traditional recipes served with a modern twist</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Adress: <br/> 123 Cider Street, <br/>Chicago, USA</li>
                        <li>Phone: <br/> +4 666 66 66</li>
                        <li>Email: <br/> infl@littlelemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;