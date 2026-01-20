import React from 'react'
import './Footer.css'
import fb_icon from '../../assets/facebook_icon.png'
import insta_icon from '../../assets/instagram_icon.png'
import x_icon from '../../assets/twitter_icon.png'
import yt_icon from '../../assets/youtube_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={fb_icon} alt="" />
        <img src={insta_icon} alt="" />
        <img src={x_icon} alt="" />
        <img src={yt_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 2025 Netflix, Inc. All rights reserved.
</p>
    </div>
  )
}

export default Footer
