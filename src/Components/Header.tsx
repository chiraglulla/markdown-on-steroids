import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Header = (props: { profile: boolean; logout: boolean; }) => {
  const history = useHistory();
  const logoutUser = async () => {
    const response = await fetch('http://localhost:5000/api/v1/user/logout', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });

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
