import Image from "next/image";
export default function Contact() {
  return (
      <div className="contact-container">
          <section className="contact-header">
              <h1>Get In Touch</h1>
              <p>If you’d like to connect, feel free to reach out via the form below or through my social media!</p>
          </section>

          {/* Contact Form Section */}
          <section className="contact-form">
              <h2>Contact Me</h2>
              <form action="https://formspree.io/f/yourformid" method="POST">
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
                      <textarea id="message" name="message" required></textarea>
                  </div>

                  <button type="submit" className="btn-primary">Send Message</button>
              </form>
          </section>

          {/* Social Links Section */}
          <section className="social-links">
              <h2>Connect With Me</h2>
              <p>Feel free to connect with me on these platforms:</p>
              <div className="social-icons">
                  <a href="https://www.linkedin.com/in/nimra-ulfat-14a2162b7/" className="social-icon" target="_blank" rel="noopener noreferrer">
                      <Image src="linkedin-icon.png" alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/NimraUlfat" className="social-icon" target="_blank" rel="noopener noreferrer">
                      <Image src="github-icon.png" alt="GitHub" />
                  </a>
              </div>
          </section>
      </div>
  );
}
