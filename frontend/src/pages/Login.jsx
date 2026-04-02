import { useState } from "react";
import { loginApi } from "../services/Api";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogIn = async() =>{
        console.log(email,password);
        try {
            const response = await loginApi({ email, password });
            console.log("Response",response);
            alert("Login Successfully")
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
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;