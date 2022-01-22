import { Link } from 'react-router-dom';

const GoToEditor = () => {
  return (
    <Link to="/editor">
      <button
        style={{
          cursor: 'pointer',
        }}
      >
        Go to editor
      </button>
    </Link>
  );
};

export default GoToEditor;
