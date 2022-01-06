import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";

const DocumentsTable = () => {
  const [markdowns, setMarkdowns] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/document", {
      mode: "cors",
      credentials: "omit",
    })
      .then((res) => {
        if (!res.ok) throw Error("Cannot fetch data.");
        return res.json();
      })
      .then((markdowns) => {
        setMarkdowns(markdowns.data.documents);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteDocument = (id) => {
    fetch(`http://localhost:5000/api/v1/document/${id}`, {
      method: "DELETE",
      mode: "cors",
      credentials: "omit",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw Error("Cannot fetch data.");
        setMarkdowns(markdowns.filter((markdown) => markdown._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="col-12 mt-3 p-0">
      <h3 className="mx-3">Your Documents</h3>
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
                      textDecoration: "none",
                    }}
                  >
                    <i className="fa fa-eye"></i>
                  </Link>
                  <Link
                    to="/"
                    className="text-dark mx-3"
                    styles={{
                      textDecoration: "none",
                    }}
                  >
                    <i className="fa fa-download"></i>
                  </Link>
                  <Link
                    to="/"
                    onClick={(e) => deleteDocument(markdown._id)}
                    className="text-dark mx-3"
                    styles={{
                      textDecoration: "none",
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
    </div>
  );
};

export default DocumentsTable;
