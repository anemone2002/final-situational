import React from 'react';
import '../components/Contact.css';
import icon from '../assets/images/icon.jpg';
import mail from '../assets/images/mail.png';

const Contact = () => {
  return (
    <div className='container'>
      <h2 className='centered-heading'>Let's Talk</h2>
      <div className='contact'>
        <div className="contact-info">
          <div className="body-1-xl">
            We're just one click away to help you<br />
            take your brand or product from <br />
            great to incredible. Fill in the form to <br />
            share more details about your <br />
            project. Or your favorite gum flavor. <br />
            Either way, we’d love to talk.
          </div>
          <div className="contact-chat">
            <img src={icon} alt="Lin's icon" className="chat-icon" />
            <div className="chat-text">
              <h3 className="heading-1-xl">Hi, I’m Lin! Let’s chat about your preferences and offers.</h3>
              <p>"I enjoy translating your thoughts to our diversely skilled team for the best results"</p>
              <div className="email-link">
                <a href="mailto:lin@techtrek.com" className="email-text">
                  <img src={mail} alt="" /> <h2>Email Lin directly </h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='form-conatct'>
          <div className="form-chat d-flex">
            <div className="mr-2" style={{ flex: '1' }}>
              <label htmlFor="first-name">First Name:</label>
              <input type="text" name="first-name" placeholder='Write your first name' />
            </div>
            <div style={{ flex: '1' }}>
              <label htmlFor="last-name">Last Name:</label>
              <input type="text" name="last-name" placeholder='Write your last name' />
            </div>
          </div>
          <div className="form-chat">
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' placeholder='Email' />
          </div>
          <div className="form-chat">
            <label htmlFor="message">Tell us more about your project goals:</label>
            <input type='text' name='message' placeholder='Enter your message' />
          </div>
          <button type='submit' className='btn dark-btn'>Submit</button>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;