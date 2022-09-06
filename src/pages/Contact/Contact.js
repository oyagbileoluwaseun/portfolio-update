import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="form" id="contact">
      <div id="feedback-form" className="container">
        <p className="header text-monospace text-center">
          I'd Love To Hear from You
        </p>
        <div>
          <form className="container">
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="email" placeholder="Email" required />
            <textarea
              type="text"
              name="textarea"
              placeholder="message"
              required
            />
            <label htmlFor="feedback-notify">Reach me via mobile number</label>
            <input type="checkbox" id="feedback-notify" name="notify" />
            <input
              type="text"
              id="feedback-phone"
              name="phone"
              placeholder="Phone number"
            />
            <input type="submit" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
