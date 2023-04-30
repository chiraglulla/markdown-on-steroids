import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = ({ span }) => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { value, id } = e.target;
    if (id === 'name') setName(value);
    if (id === 'email') setEmail(value);
    if (id === 'password') setPassword(value);
    if (id === 'confirmPassword') setConfirmPassword(value);

    if (isError) {
      setIsError(false);
      setError('');
    }
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
        return res.json();
      })
      .then((payload) => {
        if (payload.status !== 'success') {
          setIsError(true);
          setError(payload.message);
        } else {
          history.push('/dashboard');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={`col-${span} my-5`} id="signup">
      <h1>Signup</h1>
      <small className="lead">Create an account and save your work!</small>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={name}
            placeholder="Name"
            type="text"
            id="name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={email}
            placeholder="Email"
            type="text"
            id="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={password}
            placeholder="Password"
            type="password"
            id="password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={handleChange}
            value={confirmPassword}
            placeholder="Confirm Password"
            type="password"
            id="confirmPassword"
            className="form-control"
          />
        </div>
        <button
          className="btn btn-white"
          style={{
            cursor: 'pointer',
          }}
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
      {isError && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default Signup;
