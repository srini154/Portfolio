import React, { useState } from "react";
import Header from "../Header/Header";
import "./Contact.css";

function Contact() {
  const [successMsg, setSuccessMsg] = useState("");

  const onSubmitted = (event) => {
    event.preventDefault(); // Prevent the form from actually submitting, which would cause a page reload
    setSuccessMsg("Sent Successfully");
  };

  return (
    <div>
      <div className="main-cont-about">
        <Header />
        <div className="flex-comp-contact">
          <div className="contact-form">
            <h1>Contact</h1>
            <form onSubmit={onSubmitted}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  style={{ resize: "vertical" }}
                ></textarea>
              </div>
              <p>{successMsg}</p>
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="contact-info">
            <h2 style={{ fontSize: "25px", textAlign: "center" }}>
              Contact Information
            </h2>
            <ul>
              <li>
                <i className="fa fa-envelope"></i> chsrinivas4A@gmail.com
              </li>
              <li>
                <i className="fa fa-phone"></i> +91 9652122947
              </li>
            </ul>
            <h2>Social Media</h2>
            <ul className="social-links">
              <li>
                <a
                  href="https://www.instagram.com/chsrinivas_8C"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/your_linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <p className="footer-css">© ch srinivas.</p>
      </footer>
    </div>
  );
}

export default Contact;
