import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Logo = () => {
  const history = useHistory();
  const logoutUser = async (e) => {
    const response = await fetch('http://localhost:5000/api/v1/user/logout', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });

    if (response.status === 204) history.push('/');
  };

  return (
    <>
      <Link
        to="/dashboard"
        className="col-12 text-center text-dark h3 p-3"
        style={{
          textDecoration: 'none',
        }}
      >
        Markdown on steroids
      </Link>
      <button className="btn btn-white" onClick={logoutUser}>
        Log out
      </button>
      <Link className='btn btn-dark ml-5' to="/profile" style={{ textDecoration: 'none' }}>
        Profile
      </Link>
    </>
  );
};

export default Logo;
