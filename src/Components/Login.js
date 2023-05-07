import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = ({ span, showSignupLink, showLogin, showSignup }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/v1/user/login`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
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

  const handleChange = (e) => {
    const { value, id } = e.target;
    if (id === 'loginEmail') setEmail(value);
    if (id === 'loginPassword') setPassword(value);
    if (isError) {
      setIsError(false);
      setError('');
    }
  };

  return (
    <div className={`col-${span} my-5`} id="login">
      <h1>Login</h1>
      <small className="lead d-block">Login and get to work!</small>
      {showSignupLink && (
        <small className="lead">
          New here?{' '}
          <button
            onClick={() => {
              showSignup(true);
              showLogin(false);
            }}
            className='btn btn-white'
          >
            Signup
          </button>
        </small>
      )}
      <form>
        <div className="form-group">
          <label htmlFor="loginEmail">Email</label>
          <input
            id="loginEmail"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="loginPassword">Password</label>
          <input
            id="loginPassword"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            type="password"
            className="form-control"
          />
        </div>

        <small className="d-block mb-3">
          <Link
            to="/forgot"
            className="text-dark"
            style={{
              textDecoration: 'none',
            }}
          >
            forgot password?
          </Link>
        </small>

        <button
          className="btn btn-white"
          style={{
            cursor: 'pointer',
          }}
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
      {isError && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default Login;
