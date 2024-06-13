import React from 'react'
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div className='footer-main'>
        <div className="footer-top">
            <div className="company-details-links">
                <div className="company-name-logo">My_Tutor</div>
                <div className="company-brief">
                    Our company is a pioneer in online education that will give you jobs khatakhat
                    
                </div>
            </div>
            <div className="explore-main">
                <div className="explore-heading">Explore</div>
                <div className="explore-links">
                    <div className="explore-link">About Us</div>
                    <div className="explore-link">Blog</div>
                    <div className="explore-link">Campus Program</div>
                    <div className="explore-link">Become a mentor</div>
                    <div className="explore-link">Contact Us</div>
                    <div className="explore-link">Hire From us</div>
                </div>
            </div>
            <div className="useful-link-main">
                <div className="useful-link-heading">Useful Links</div>
                <div className="useful-links">
                    <div className="useful-link">Privacy Policy</div>
                    <div className="useful-link">Terms of Use</div>
                    <div className="useful-link">   Refund Policy</div>
                </div>
            </div>
            <div className="contact-info-link">
                <div className="contact-info-heading">Contact Info</div>
                <div className="contact-info-links">
                    <div className="contact-info-link">132 Prem nagar Gurjar Ki Thadi</div>
                    <div className="contact-info-link">9509627038</div>
                    <div className="contact-info-link">bhaskarpurohit22@gmail.com</div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            Copyright 2024 My_Tutor | Designed by Bhaskar Purohit
        </div>
    </div>
  )
}

export default Footer