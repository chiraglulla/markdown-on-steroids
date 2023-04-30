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
    document.querySelector('#updateName').disabled = true;
    document.querySelector('#updateEmail').disabled = true;
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
    document.querySelector('#updateName').disabled = false;
    document.querySelector('#updateEmail').disabled = false;
  };

  return (
    <div className="col-5 my-5" id="updateInfo">
      <div className="d-flex align-items-center">
        <h3>Edit your details</h3>
        <button className="btn btn-white mx-3" type="button" onClick={editInfo}>
          Edit
        </button>
      </div>
      <form id="profile" onSubmit={saveInfo}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="updateName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="updateEmail"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
            className="form-control"
          />
        </div>

        <button className="btn btn-success" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateInfo;
