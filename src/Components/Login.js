import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(
      `https://markdown-on-steroids-backend-production.up.railway.app/api/v1/user/login`,
      {
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
      }
    )
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
    <div className="col-4 my-5" id="login">
      <h1>Login</h1>
      <small className="lead">Login and get to work!</small>
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
