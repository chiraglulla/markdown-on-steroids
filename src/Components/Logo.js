import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="col-12 text-center text-dark h3 p-3"
      style={{
        textDecoration: "none",
      }}
    >
      Markdown on steroids
    </Link>
  );
};

export default Logo;
