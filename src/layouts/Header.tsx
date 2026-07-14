import { NavLink } from "react-router-dom";

const Navbar = () => {
return (
<nav className="flex justify-between items-center bg-gray-900 px-6 py-3 shadow">

  <div className="flex items-center gap-2">
    <h1 className="font-bold text-white text-lg">React Assignment 3</h1>
  </div>

  <div className="flex gap-6">

    <NavLink to="/">
      {({ isActive }) => (
        <span className={isActive ? "font-bold text-red-500" : "text-gray-400"}>
          Large Form
        </span>
      )}
    </NavLink>

    <NavLink to="/stopwatch">
      {({ isActive }) => (
        <span className={isActive ? "font-bold text-red-500" : "text-gray-400"}>
          Stopwatch
        </span>
      )}
    </NavLink>

    <NavLink to="/students">
      {({ isActive }) => (
        <span className={isActive ? "font-bold text-red-500" : "text-gray-400"}>
          Students Management
        </span>
      )}
    </NavLink>

  </div>
</nav>

);
};

export default Navbar;