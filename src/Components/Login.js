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
    if (id === 'email') setEmail(value);
    if (id === 'password') setPassword(value);
    if (isError) {
      setIsError(false);
      setError('');
    }
  };

  return (
    <div id="login">
      <h1>Login</h1>
      <form>
        <input
          id="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
        />
        <input
          id="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          type="password"
        />
        <button
          className='btn btn-white'
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
