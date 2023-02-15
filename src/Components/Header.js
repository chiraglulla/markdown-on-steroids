import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Header = (props) => {
  const history = useHistory();
  const logoutUser = async (e) => {
    const response = await fetch(
      'https://mos-backend.onrender.com/api/v1/user/logout',
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
      }
    );

    if (response.status === 204) history.push('/');
  };

  return (
    <div className="d-flex align-items-center justify-content-between my-3">
      <div>
        <Link
          to="/dashboard"
          className="text-dark h2"
          style={{
            textDecoration: 'none',
          }}
        >
          Markdown on steroids
        </Link>
      </div>

      <div>
        {props.profile && (
          <Link
            className="btn btn-dark ml-5"
            to="/profile"
            style={{ textDecoration: 'none' }}
          >
            Profile
          </Link>
        )}

        {props.logout && (
          <button className="btn btn-white ml-3" onClick={logoutUser}>
            Log out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
