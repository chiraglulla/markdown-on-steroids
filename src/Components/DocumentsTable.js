import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import { useHistory } from 'react-router-dom';

const DocumentsTable = () => {
  const history = useHistory();
  const [markdowns, setMarkdowns] = useState([]);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(
      'https://markdown-on-steroids-backend-production.up.railway.app/api/v1/document',
      {
        mode: 'cors',
        credentials: 'include',
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((payload) => {
        if (payload.status !== 'success') {
          if (payload.statusCode === 500) {
            setIsError(true);
            setError(payload.message);
          } else {
            history.push('/');
          }
        } else {
          setMarkdowns(payload.data.documents);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [history]);

  const deleteDocument = (id) => {
    fetch(
      `https://markdown-on-steroids-backend-production.up.railway.app/api/v1/document/${id}`,
      {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
        if (!res.ok) throw Error('Cannot fetch data.');
        setMarkdowns(markdowns.filter((markdown) => markdown._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="col-12 mt-3 p-0">
      <h3 className="mx-3">Your Documents</h3>
      {isError && <p>{error}</p>}
      {markdowns.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Document</th>
              <th></th>
              <th className="text-center" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {markdowns.map((markdown, idx) => {
              return (
                <tr key={markdown._id}>
                  <th scope="row">{idx + 1}</th>
                  <td>{markdown.name}</td>
                  <td>
                    {formatDistance(new Date(markdown.updatedAt), Date.now(), {
                      addSuffix: true,
                    })}
                  </td>
                  <td className="text-center">
                    <Link
                      to={`/editor/${markdown._id}`}
                      className="text-dark mx-3"
                      styles={{
                        textDecoration: 'none',
                      }}
                    >
                      <i className="fa fa-eye"></i>
                    </Link>
                    <Link
                      to="/"
                      className="text-dark mx-3"
                      styles={{
                        textDecoration: 'none',
                      }}
                    >
                      <i className="fa fa-download"></i>
                    </Link>
                    <Link
                      to="/dashboard"
                      onClick={(e) => deleteDocument(markdown._id)}
                      className="text-dark mx-3"
                      styles={{
                        textDecoration: 'none',
                      }}
                    >
                      <i className="fa fa-trash"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DocumentsTable;
