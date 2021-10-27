import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => { 
    // npx json-server --watch data/db.json --port 8000
    return (
        <React.Fragment>
            <div className="col-12 p-5 rounded border-bottom">
                <Link
                    to="/editor" 
                    className="blank mx-auto d-flex border border-dark rounded w-20 p-3 align-items-center text-dark"
                    style={{
                        textDecoration:"none"
                    }}
                >
                    <h3>Create a blank document</h3>
                    <i class="fa fa-arrow-circle-o-right ml-auto fa-2x" aria-hidden="true"></i>
                </Link>
            </div>

            <div className="col-12 mt-3 p-0">
                <h3 className="mx-3">Your Documents</h3>

            </div>
        </React.Fragment>
    );
}

export default Dashboard;