import { useState } from "react";
import { loginApi } from "../services/Api";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogIn = async () => {
    console.log(email, password);
    try {
      setLoading(true);
      const response = await loginApi({ email, password });
      setLoading(false);
      if (response.success) {
        alert("Login Successfully")

        localStorage.setItem("token", response.token);
        navigate("/dashboard");
        console.log("Response", response);
      } else {
        alert(response.message)
      }

    } catch (error) {
      console.error(error);
      alert("Login Failed!!");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          type="text"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white p-2 rounded"
          onClick={handleLogIn}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;