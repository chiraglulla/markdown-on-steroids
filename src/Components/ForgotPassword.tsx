import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('Send');

  const handleReset = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const sendResetLink = async () => {
      const response = await fetch(
        'http://localhost:5000/api/v1/user/forgotPassword',
        {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );

      const payload = await response.json();

      if (payload.statusCode === 200) {
        setMessage(payload.message);
      }
    };

    sendResetLink();
  };

  return (
    <>
      {/* <Header /> */}
      <form>
        <div className="form-group">
          <label htmlFor="forgotEmail">Email</label>
          <input
            id="forgotEmail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="form-control"
          />
        </div>

        <button
          className="btn btn-white d-block"
          style={{
            cursor: 'pointer',
          }}
          onClick={handleReset}
        >
          {message}
        </button>
        <small>Enter your email to receive a reset password link.</small>
      </form>
    </>
  );
};

export default ForgotPassword;
