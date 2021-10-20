import { Link } from "react-router-dom"

const Header = () => {
    return ( 
        <div className="row d-flex align-items-center justify-content-around my-3">
            <Link 
                to="/" 
                className="title col-8 display-4 text-dark" 
                style={{
                    textDecoration:"none"
                }}
            >
                Markdown on Steroids
            </Link>
            <div>
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