import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";
import { AdminContext } from "../context/AdminContext";

const AdminLogin = () => {
  const navigrator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAToken, aToken, backendURL } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const { data } = await axios.post("http://localhost:5500/api/admin/login", {
      email,
      password,
    });

    if (data.success) {
      toast.success("Login as Admin Success!");
      localStorage.setItem("aToken", data.adminToken);
      setAToken(data.adminToken);
      navigrator("/admin/dashboard/add-blog");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 shadow-lg text-sm">
        <p className="text-2xl font-semibold text-primary m-auto">
          Admin <span className="text-black"> Login</span>
        </p>
        <div className="w-full">
          <p>Eamil Address</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="something@example.com"
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          Login
        </button>
      </div>
    </form>
  );
};

export default AdminLogin;
