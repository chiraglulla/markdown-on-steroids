import { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    const { value, id } = e.target;
    if (id === 'name') setName(value);
    if (id === 'email') setEmail(value);
    if (id === 'password') setPassword(value);
    if (id === 'confirmPassword') setConfirmPassword(value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/v1/user/signup`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
      }),
    })
      .then((res) => {
        if (!res.ok) throw Error('Cannot fetch data.');
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <form>
        <input
          onChange={handleChange}
          value={name}
          placeholder="Name"
          type="text"
          id="name"
        />
        <input
          onChange={handleChange}
          value={email}
          placeholder="Email"
          type="text"
          id="email"
        />
        <input
          onChange={handleChange}
          value={password}
          placeholder="Password"
          type="password"
          id="password"
        />
        <input
          onChange={handleChange}
          value={confirmPassword}
          placeholder="Confirm Password"
          type="password"
          id="confirmPassword"
        />
        <button
          style={{
            cursor: 'pointer',
          }}
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
