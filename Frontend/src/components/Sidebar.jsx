import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  return (
    <div className="min-h-screen bg-white border-r">
      {aToken && (
        <ul className="text-[#515151] mt-5">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#f2f3ff] border-r-4 border-primary" : ""
              }`
            }
            to={"/admin-dashboard"}
          >
            <p>Dashboard</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#f2f3ff] border-r-4 border-primary" : ""
              }`
            }
            to={"/all-apoinments"}
          >
            <p>Appoinment</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#f2f3ff] border-r-4 border-primary" : ""
              }`
            }
            to={"/add-doctor"}
          >
            <p>Add Doctor </p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#f2f3ff] border-r-4 border-primary" : ""
              }`
            }
            to={"doctors-list"}
          >
            <p>Doctor List </p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
