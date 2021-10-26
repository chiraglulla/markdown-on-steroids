import { useState } from "react";
import { Link } from "react-router-dom"

const Header = () => {

    const [ docName, setDocName ] = useState("");

    return ( 
        <div className="row mx-1 my-3 flex align-items-center">
            <Link 
                to="/" 
                className="title col-3 h3 text-dark" 
                style={{
                    textDecoration:"none"
                }}
            >
                Markdown on Steroids
            </Link>

            <input value ={docName} onChange={e => setDocName(e.target.value)} className="form-control col-2" type="text" placeholder="Untitled" />

            <div className="d-flex col justify-content-end align-items-center">
                <Link 
                    to="/dashboard" 
                    className="btn btn-sm btn-outline-dark align-middle mx-2"
                >
                    Dashboard
                </Link>
                <Link 
                    to="/login" 
                    className="btn btn-sm btn-primary align-middle"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}
 
export default Header;