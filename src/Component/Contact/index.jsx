import "./index.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">Have questions? We’re here to help 😊</p>

      <div className="contact-content">
        {/* Contact Details */}
        <div className="contact-info">
          <h3>Get in Touch</h3>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@vfashion.com">support@vfashion.com</a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919876543210">+91 98765 43210</a>
          </p>

          <p>
            <strong>Address:</strong> Hyderabad, India
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
