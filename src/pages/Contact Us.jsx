import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Validate name
    if (name.trim() === '') {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailPattern.test(email)) {
      formErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate message
    if (message.trim() === '') {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form (or further processing)
      console.log('Form submitted:');
      console.log("Name: ", name);
      console.log("Email: ", email);
      console.log("Message: ", message);

      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col p-8 text-sm min-w-[340px] shadow-lg rounded-lg item-start sm:w-96 m-auto text-zinc-900 gap-3'>

        <div className='w-full'>
          <label htmlFor="name">Full Name:</label>
          <input
            className='border border-zinc-300 rounded p-2 w-full mt-1'
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className='w-full'>
          <label htmlFor="email">Email:</label>
          <input
            className='border border-zinc-300 rounded p-2 w-full mt-1'
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className='w-full'>
          <label htmlFor="message">Message:</label>
          <textarea
            className='border border-zinc-300 rounded p-2 w-full mt-1'
            id="message"
            rows="5"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <button className='bg-green-200 rounded-md py-2 px-5 mt-5'>Submit</button>
      </div>
    </form>
  );
};

export default Contact;
