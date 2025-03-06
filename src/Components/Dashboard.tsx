import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DocumentsTable from './DocumentsTable';
import Header from './Header';

const Dashboard = () => {
  // npx json-server --watch data/db.json --port 8000
  const history = useHistory();

  useEffect(() => {
    const recover: {name: string; text: string} = JSON.parse(localStorage.getItem('recover') || '{}')
    if (recover.name) {
      // console.log("Got something to recover");
      (document.querySelector('#createButton') as HTMLButtonElement).click();
    }
  }, []);

  const handleCreation = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    let body = {
      name: 'Untitled Document',
      text: '',
    };
    const recover = JSON.parse(localStorage.getItem('recover') || '{}') as {name: string; text: string}
    localStorage.removeItem('recover');
    if (recover.name) {
      console.log(recover);
      body = {
        name: recover.name,
        text: recover.text,
      };
    }
    console.log(body)
    fetch('http://localhost:5000/api/v1/document', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        // console.log(res)
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
          id="createButton"
          onClick={handleCreation}
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
