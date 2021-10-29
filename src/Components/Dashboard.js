import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
// import DocumentsTable from "./DocumentsTable";

const Dashboard = () => {
    // npx json-server --watch data/db.json --port 8000

    const { data: markdowns, isLoading, error } = useFetch("http://localhost:8000/markdowns")
    let rows;
    if(markdowns) {
        rows = markdowns.map(markdown => {
            return (
                <tr key={markdown.id}>
                    <th scope="row">{markdown.id}</th>
                    <td>{markdown.name}</td>
                    <td className="text-center">Delete View Download</td>
                </tr>
            )
        })
    }

    return (
        <React.Fragment>
            <div className="col-12 p-5 rounded">
                <Link
                    to="/editor"
                    className="blank mx-auto d-flex border border-dark rounded w-20 p-3 align-items-center text-dark"
                    style={{
                        textDecoration: "none"
                    }}
                >
                    <h3>Create a blank document</h3>
                    <i className="fa fa-arrow-circle-o-right ml-auto fa-2x" aria-hidden="true"></i>
                </Link>
            </div>

            {/* <DocumentsTable  markdowns={markdowns} /> */}

            <div className="col-12 mt-3 p-0">
                <h3 className="mx-3">Your Documents</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Document</th>
                            <th className="text-center" scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { error && <td>Error</td> }
                        { isLoading && <td className="text-center">Loading...</td> }
                        { markdowns && rows }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

export default Dashboard;