import React from 'react';
import { useHistory } from 'react-router-dom';
import DocumentsTable from './DocumentsTable';
import Header from './Header';

const Dashboard = () => {
  // npx json-server --watch data/db.json --port 8000
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    fetch(
      'https://markdown-on-steroids-backend-production.up.railway.app/api/v1/document',
      {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Untitled Document',
          text: '',
        }),
      }
    )
      .then((res) => {
        if (!res.ok) throw Error('Cannot create document.');
        return res.json();
      })
      .then((data) => {
        const { _id: id } = data.data.document;
        history.push(`/editor/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="col-12">
        <Header logout={true} profile={true} />
      </div>
      <div className="col-12 p-5 rounded">
        <button
          onClick={handleClick}
          className="btn btn-outline-dark blank mx-auto d-flex w-20 p-3 align-items-center text-dark"
          style={{
            textDecoration: 'none',
          }}
        >
          <h3>Create a blank document</h3>
          <i className="fa fa-arrow-circle-o-right ml-auto fa-2x"></i>
        </button>
      </div>

      <DocumentsTable />
    </>
  );
};

export default Dashboard;
