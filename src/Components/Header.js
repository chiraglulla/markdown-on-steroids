import { useState } from "react";
import { Link } from "react-router-dom"

const Header = () => {

    const [ docName, setDocName ] = useState("");

    return ( 
        <div className="d-flex align-items-center my-4">
            <Link 
                to="/" 
                className="title h3 text-dark mx-3" 
                style={{
                    textDecoration:"none"
                }}
            >
                Markdown on Steroids
            </Link>

            {/* <input value ={docName} onChange={e => setDocName(e.target.value)} className="form-control col-2" type="text" placeholder="Untitled" /> */}
            
            <div className="d-flex justify-content-end align-items-center ml-auto mx-3">
                <Link 
                    to="/login" 
                    className="btn btn-sm btn-primary align-middle h3"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}
 
export default Header;