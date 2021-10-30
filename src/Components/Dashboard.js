import React from "react";
import { Link } from "react-router-dom";
import DocumentsTable from "./DocumentsTable";

const Dashboard = () => {
    // npx json-server --watch data/db.json --port 8000

    return (
        <React.Fragment>
            <div className="col-12 p-5 rounded">
                <Link
                    to="/"
                    className="blank mx-auto d-flex border border-dark rounded w-20 p-3 align-items-center text-dark"
                    style={{
                        textDecoration: "none"
                    }}
                >
                    <h3>Create a blank document</h3>
                    <i className="fa fa-arrow-circle-o-right ml-auto fa-2x"></i>
                </Link>
            </div>

            <DocumentsTable />
        </React.Fragment>
    );
}

export default Dashboard;