import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="signup">
        <h1>Signup</h1>
        <form>
          <input placeholder="Name" type="text" />
          <input placeholder="Email" type="text" />
          <input placeholder="Password" type="password" />
          <input placeholder="Confirm Password" type="password" />
        </form>
      </div>
      <div id="login">
        <h1>Login</h1>
        <form>
          <input placeholder="Email" type="text" />
          <input placeholder="Password" type="password" />
        </form>
      </div>
      <Link to="/editor">
        <button>Go to editor</button>
      </Link>
    </>
  );
};

export default Home;
