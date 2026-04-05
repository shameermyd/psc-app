import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold"><Link to="/">PSC App</Link></h1>
      <Link to="/quiz">Quiz</Link>
      <div>
        {token ? (<button onClick={handleLogOut}>Logout</button>) : (<Link to="/login">Login</Link>)}
      </div>
    </div>
  );
}

export default Navbar;