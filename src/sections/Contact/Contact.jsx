import styles from './ContactStyles.module.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_coikkfo',
        'template_x1au58p',
        formRef.current,
        'JGKb8bWEbxsekRJnn'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send message.');
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input type="hidden" name="time" value={new Date().toLocaleString()} />
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
