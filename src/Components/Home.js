import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import GoToEditor from './GoToEditor';
import Header from './Header';

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    fetch(
      'https://markdown-on-steroids-backend-production.up.railway.app/api/v1/user/isAuthenticated',
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
      }
    )
      .then((res) => {
        if (`${res.status}`.startsWith('2')) {
          history.push('/dashboard');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [history]);

  return (
    <div className="container-fluid">
      <Header />
      <div className="row align-items-center">
        <Signup />
        <GoToEditor />
        <Login />
      </div>
    </div>
  );
};

export default Home;
