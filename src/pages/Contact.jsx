import "./styles/contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
      </section>

      <section className="contact-info">
        <div className="info-box">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Address</h3>
          <p>123 Farm Road, AgriTown</p>
        </div>

        <div className="info-box">
          <i className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>contact@farmtech.com</p>
        </div>

        <div className="info-box">
          <i className="fas fa-phone"></i>
          <h3>Phone</h3>
          <p>+123 456 7890</p>
        </div>
      </section>

      <section className="contact-socials">
        <p>Connect with us:</p>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </section>
    </div>
  );
}

export default Contact;
