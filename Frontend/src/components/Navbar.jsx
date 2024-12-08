import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";

const Navbar = () => {
  const navigrator = useNavigate();
  const { aToken, setAToken } = useContext(AdminContext);

  const logOut = () => {
    setAToken("");
    localStorage.removeItem("aToken");
    navigrator("/");
  };
  return (
    <div className="flex items-center justify-between py-5 text-sm mb-3 border-b border-gray-400">
      {/* Nav Logo */}
      <div>
        <img className="w-56" src={logo} alt="Logo" />
      </div>

      {/* Start Nav Link */}
      <div>
        <ul className="hidden md:flex items-start gap-5 font-medium">
          <NavLink to="/">
            <li className="py-1 cursor-pointer">Home</li>
          </NavLink>

          <NavLink to="/about">
            <li className="py-1 cursor-pointer">About</li>
          </NavLink>

          <NavLink to="/blog">
            <li className="py-1 cursor-pointer ">Blog</li>
          </NavLink>

          <NavLink to="/services">
            <li className="py-1 cursor-pointer ">Services</li>
          </NavLink>

          <NavLink to="/contact">
            <li className="py-1 cursor-pointer ">Contact</li>
          </NavLink>
        </ul>
      </div>

      {/* Admin Login Button */}
      <div>
        <button
          onClick={() => navigrator("/blog-admin")}
          className="bg-indigo-400 px-10 py-3 rounded-full text-sm text-white"
        >
          {aToken ? <span onClick={logOut}>Log Out</span> : "Admin Log In"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
