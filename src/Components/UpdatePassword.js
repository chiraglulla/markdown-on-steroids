import { useState } from 'react';

const UpdatePassword = () => {
  const [passwordCurrent, setCurrent] = useState('');
  const [password, setNew] = useState('');
  const [confirmPassword, setConfirm] = useState('');

  const updatePassword = async (e) => {
    e.preventDefault();
    const changes = {
      passwordCurrent,
      password,
      confirmPassword,
    };
    const response = await fetch(
      'http://localhost:5000/api/v1/user/updateMyPassword',
      {
        method: 'PATCH',
        mode: 'cors',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(changes),
      }
    );

    const body = await response.json();

    console.log(body);
  };

  return (
    <div className="col-6 my-5">
      <h3>Update your password</h3>
      <form id="updatePassword" onSubmit={updatePassword}>
        <div className="form-group">
          <label htmlFor="current">Current Password:</label>
          <input
            className="form-control"
            id="current"
            type="password"
            value={passwordCurrent}
            onChange={(e) => setCurrent(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="new">New Password:</label>
          <input
            className="form-control"
            id="new"
            type="password"
            value={password}
            onChange={(e) => setNew(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="newConfirm">Confirm Password:</label>
          <input
            className="form-control"
            id="newConfirm"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>

        <button className="btn btn-success" type="submit">
          Update My Password
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;
