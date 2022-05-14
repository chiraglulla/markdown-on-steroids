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
    <form id="updatePassword" onSubmit={updatePassword}>
      <label htmlFor="current">Current Password:</label>
      <input
        id="current"
        type="password"
        value={passwordCurrent}
        onChange={(e) => setCurrent(e.target.value)}
      />
      <label htmlFor="new">New Password:</label>
      <input
        id="new"
        type="password"
        value={password}
        onChange={(e) => setNew(e.target.value)}
      />
      <label htmlFor="newConfirm">Confirm Password:</label>
      <input
        id="newConfirm"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirm(e.target.value)}
      />

      <button className='btn btn-white' type='submit'>Update My Password</button>
    </form>
  );
};

export default UpdatePassword;
