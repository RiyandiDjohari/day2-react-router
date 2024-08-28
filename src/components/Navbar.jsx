import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { navbarItems } from "../constants";
import logo from "/vite.svg";

const Navbar = () => {
  const [active, setActive] = useState("Beranda");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = navbarItems.find((item) => item.path === currentPath);
    if (activeItem) {
      setActive(activeItem.name);
    }
  }, [location]);

  return (
    <nav className="container mx-auto bg-white text-[#1F316F] p-4 flex justify-between">
      <div>
        <img src={logo} alt="logo" className="cursor-pointer" onClick={() => navigate("/")}/>
      </div>
      <ul className="flex gap-6 justify-center items-center">
        {navbarItems.map((item) => (
          <li onClick={() => setActive(item.name)} key={item.id} className={`p-1 cursor-pointer ${active == item.name && "text-black font-semibold border-b-4 border-primary"}`}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleLogout} className="py-2 px-4 rounded-lg bg-white border border-secondary text-secondary hover:text-white hover:bg-secondary hover:border-transparent">Logout</button>
    </nav>
  );
};

export default Navbar;
