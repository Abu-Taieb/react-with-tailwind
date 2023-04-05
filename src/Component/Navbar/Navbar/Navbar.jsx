import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState();
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <nav className="bg-pink-500">
      <div onClick={() => setOpen(!open)} className="md:hidden p-3">
        <span >
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-pink-800" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-pink-800" />
          )}
        </span>
      </div>
      <ul
        className={`md:flex absolute md:static duration-700 py-3 ${
          open ? "top-17" : "-top-36"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
