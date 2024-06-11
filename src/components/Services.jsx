import React from 'react';
import calendar from "../assets/images/calendar.png";
import gear from "../assets/images/gear.png";
import clock from "../assets/images/wall-clock.png";
import './Services.css';

const Services = () => {
  return (
    <div className='services container'>
        <div className="services-text">
        <h1>More Than Just Great Software, We’re a High-volume Fulfillment Success Company</h1>
        <p>As a true SaaS product, Logiwa WMS continually adds new features and innovations to drive your business forward. We solve your most pressing fulfillment challenges and help you meet the toughest industry standards.</p>

        </div>
      
      
      <div className="service-icons">
        <div className="service-item">
          <img src={calendar} alt="Calendar Icon" className="service-icon" />
          <span>Implemented in weeks, not months</span>
          <p> is a true Cloud system that is easy to deploy, configure, and update as your business scales.</p>
        </div>
        <div className="service-item">
          <img src={gear} alt="Gear Icon" className="service-icon" />
          <span>Optimized using AI and automation</span>
          <p>Our pre-built automation rules and AI powered jobs speed up everything from your inbound operations to your picking, packing and shipping processes.</p>
        </div>
        <div className="service-item">
          <img src={clock} alt="Clock Icon" className="service-icon" />
          <span>Supported every step of the way</span>
          <p>Our customers rave about our customer support and we pride ourselves in our 7-9 minutes response time. We’re more than your software provider – we’re your partner for success.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
