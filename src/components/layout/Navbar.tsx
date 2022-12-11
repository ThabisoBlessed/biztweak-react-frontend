import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LogoImg from "../../logo.png";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import * as constants from "../../constants";

export const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="border-b" data-testid="navbar">
      <div className="p-0 flex justify-between items-center w-[100%] mx-auto">
        <h1 className="w-full text-2xl font-bold">
          <Link to="/" className="p-4 flex">
            <img
              data-testid="logoImg"
              alt="logo"
              src={LogoImg}
              height={150}
              width={150}
            ></img>
          </Link>
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4 pr-15" data-testid="homeText">
            <Link to="/" className="p-2 flex capitalize hover:text-[#ffd740]">
              <FaHome size={20} />
              &nbsp;{constants.home}
            </Link>
          </li>
        </ul>

        <div
          id="mobileOpenCloseBtns"
          onClick={handleNav}
          className="block md:hidden pr-3"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          id="mobileMenu"
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border bg-[black] text-white rounded-lg ease-in-out duration-500 shadow-lg"
              : "fixed left-[-100%]"
          }
        >
          <ul className="pt-18 uppercase">
            <li className="p-2 border-b-2" onClick={handleNav}>
              <Link to="/" className="p-4 flex mx-auto">
                {constants.home}
              </Link>
            </li>

            <li className="p-2 border-white" onClick={handleNav}>
              <Link to="/" className="flex text-white">
                <FaHome size={20} />
                &nbsp;{constants.home}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
