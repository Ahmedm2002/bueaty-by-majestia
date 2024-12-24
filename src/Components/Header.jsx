import React, { useState } from "react";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
function Header() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/aboutUs" },
    { name: "Contact Us", link: "/contactUs" },
  ];

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onToggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const handleNavigation = (link) => {
    navigate(link);
    closeMenu();
  };

  return (
    <>
      <div className="block shadow-md w-full top-0 z-40 sticky left-0">
        <div className="flex items-center bg-pink-300 justify-between py-2 md:px-10 px-2">
          <div className="flex items-center flex-wrap">
            <div className="font-bold sm:text-xl text-lg cursor-pointer font-[Poppins]">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="w-10 h-10 inline rounded-md mr-2"
                />
                <h3 className="text-md inline">Bueaty By Majestia</h3>
              </Link>
            </div>
          </div>

          <ul
            className={`md:flex ml-auto md:items-center md:pb-0 pb-2 absolute md:static
                 bg-pink-300 mr-5 text-black md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-4 transition-all duration-200 ease-in ${
                   open ? "top-16 opacity-95" : "top-[-490px] opacity-100"
                 }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-lg md:text-sm md:my-0 my-7"
              >
                <Link
                  to={link.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.link);
                  }}
                  className=" hover:text-lg duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={onToggleMenu}
            className="text-xl w-12 rounded-lg absolute right-2 top-1 cursor-pointer md:hidden flex justify-center items-center"
          >
            {open ? (
              <img
                src={close}
                className="w-10 mt-1"
                alt="Close Menu"
              />
            ) : (
              <img
                src={menu}
                className="w-10 mt-1"
                alt="Open Menu"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
