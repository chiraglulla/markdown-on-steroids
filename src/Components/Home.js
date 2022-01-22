import Signup from './Signup';
import Login from './Login';
import GoToEditor from './GoToEditor';

const Home = () => {
  return (
    <div className="container">
      <Signup />
      <Login />
      <GoToEditor />
    </div>
  );
};

export default Home;
