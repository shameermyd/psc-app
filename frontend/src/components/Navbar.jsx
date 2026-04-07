import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg"><Link to="/">PSC App</Link></h1>

      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>

        {token ? (
          <button onClick={handleLogOut}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;