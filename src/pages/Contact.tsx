/*import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wx89nq4',
        'template_uq3wf6o',
        form.current,
        'LoEekIiE3ZOKuaTdJ'
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Something went wrong: ' + error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;*/

import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_wx89nq4',
        'template_uq3wf6o',
        form.current,
        'LoEekIiE3ZOKuaTdJ'
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Something went wrong: ' + error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="name">Name</label>
      <input type="text" name="user_name" id="name" required />

      <label htmlFor="email">Email</label>
      <input type="email" name="user_email" id="email" required />

      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" required />

      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;

