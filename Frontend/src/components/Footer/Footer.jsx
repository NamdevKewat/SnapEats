import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.new_logo} alt="" />
            <p>Fresh flavors, fast delivery—right to your doorstep.Craving something delicious? Whether it's a quick snack or a full meal, SnapEats brings your favorite restaurants to you. Order effortlessly, track in real-time, and enjoy the convenience of great food, whenever and wherever you want.
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
                <li>+Number</li>
                <li>content@SnapEats.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 SnapEats - All Rights are reserved </p>
    </div>
  )
}

export default Footer
