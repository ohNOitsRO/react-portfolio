import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const isValid = validateEmail(email);
      if (!isValid) {
        setErrorMessage('Please use a valid email!');
      } 
      else {
        const emailLink = `mailto:fake.email@gmail.com?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
        window.location.href = emailLink;
        setErrorMessage('');
      }
    }

  return (
    <div className="form-group cover-container d-flex w-50 h-100 p-3 mx-auto flex-column">
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        className="form-control"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      {errorMessage && (
          <div>
            <p className="is-danger">{errorMessage}</p>
          </div>
      )}


    <button type="submit" className="btn btn-dark">Send</button>
    </form>
    </div>
  );

}

export default Contact;