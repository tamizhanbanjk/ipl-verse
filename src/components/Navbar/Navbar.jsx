import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Teams", path: "/teams" },
    { name: "Players", path: "/players" },
    { name: "Matches", path: "/matches" },
    { name: "Points Table", path: "/points-table" },
    { name: "Records", path: "/records" },
    { name: "Venues", path: "/venues" },
    { name: "Compare", path: "/compare" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <span>🏏</span> IPL Verse
      </div>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
