import React from 'react';
import Navbar from '../../components/Navbar';
import ContactForm from '../../components/ContactForm';

function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <section className="ContactPage">
          <h2>Contact Me</h2>
          <p>
            Feel free to contact me at my email:
            <a href="mailto:mcastilloalex@gmail.com">mcastilloalex@gmail.com</a>
          </p>
          <h3>Please fill out the contact form below to get in touch with me.</h3>

          {/* Use the ContactForm component */}
          <ContactForm />
          {/* End ContactForm component */}
        </section>
      </main>
    </>
  );
}

export default Contact;