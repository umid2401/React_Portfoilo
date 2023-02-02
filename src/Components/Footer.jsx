import React from 'react'
import "../Styles/Footer.scss"
import { AiOutlineInstagram, FaGithub, FaInstagram, FaLinkedinIn, FaTelegram } from "react-icons/fa";
// import faStyles from 'font-awesome/css/font-awesome.css'
export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4 className='.h4'>company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our services</a></li>
                                
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4 className='.h4'>get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">shipping</a></li>
                               
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4 className='.h4'>online shop</h4>
                            <ul>
                                <li><a href="#">watch</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4 className='.h4'>follow us</h4>
                            <div className="social-links">
                                <a href="https://github.com/umid2401"><FaGithub className='faIcon'   /></a>
                                <a href="https://www.linkedin.com/in/umid-mamatraximov-100222239/"  ><FaLinkedinIn className='faIcon' /></a>
                                <a href="https://t.me/Frontend2415"><FaTelegram className='faIcon' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
