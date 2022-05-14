import { useState, useEffect } from 'react';

const UpdateInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getDetails = async () => {
      const response = await fetch('http://localhost:5000/api/v1/user/me', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
      });

      const {
        data: { name, email },
      } = await response.json();

      setName(name);
      setEmail(email);
    };

    getDetails();
  }, []);

  const saveInfo = async (e) => {
    e.preventDefault();
    const changes = {
      name,
      email,
    };
    const response = await fetch('http://localhost:5000/api/v1/user/updateMe', {
      method: 'PATCH',
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(changes),
    });

    const body = await response.json();

    console.log(body);
  };

  const editInfo = (e) => {
    document.querySelector('#name').disabled = false;
    document.querySelector('#email').disabled = false;
  };

  return (
    <>
      <button className="btn btn-white" type="button" onClick={editInfo}>
        Edit
      </button>
      <form id="profile" onSubmit={saveInfo}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled
        />

        <button className="btn btn-white" type="submit">
          Save
        </button>
      </form>
    </>
  );
};

export default UpdateInfo;
