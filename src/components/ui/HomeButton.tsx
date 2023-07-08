import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to="/" style={{ alignSelf: "start" }}>
      <button>Home</button>
    </Link>
  );
};

export default HomeButton;
