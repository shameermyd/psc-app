import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold"><Link to="/">PSC App</Link></h1>
      <div>
        {/* <button className="mr-4"> */}
            <Link to="/login">Login</Link>
        {/* </button> */}
      </div>
    </div>
  );
}

export default Navbar;