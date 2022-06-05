import { Link } from 'react-router-dom';

const GoToEditor = () => {
  return (
    <div className="col-4">
      <Link
        to="/editor"
        style={{
          textDecoration: 'none',
        }}
      >
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-lg btn-outline-dark"
            style={{
              cursor: 'pointer',
            }}
          >
            Go to editor
          </button>
        </div>
      </Link>
      <div className="d-flex justify-content-center">
        <small className="lead">Just try out the editor!</small>
      </div>
    </div>
  );
};

export default GoToEditor;
