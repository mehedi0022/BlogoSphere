import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 text-sm mb-3 border-b border-gray-400">
      {/* Nav Logo */}
      <div>
        <img src="" alt="Logo" />
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
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
