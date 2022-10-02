import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BiHomeAlt,
  BiGlobe,
  BiCapsule,
  BiSearchAlt,
  BiChevronRight,
  BiChevronDown,
  BiCrown,
  BiMenu,
  BiX,
} from "react-icons/bi";
import { TbBusinessplan } from "react-icons/tb";
import logo from "../assets/logo.svg";

const Navbar = ({ search, setSearch, getArticles }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navLink = [
    {
      icon: <BiCrown size={20} />,
      tittle: "My Profile",
      path: "/profile",
    },
    {
      icon: <BiHomeAlt size={20} />,
      tittle: "Top Stories",
      path: "/",
    },
    {
      icon: <BiGlobe size={20} />,
      tittle: "Around The World",
      path: "/hot",
    },
    {
      icon: <TbBusinessplan size={20} />,
      tittle: "Business",
      path: "/update",
    },
    {
      icon: <BiCapsule size={20} />,
      tittle: "Health",
      path: "/more",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white md:bg-transparent">
      <nav className="container mx-auto px-4 py-7 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" />
          <h1 className="text-[#0768B5] font-semibold text-xl">Paig News</h1>
        </div>
        <div className=" items-center gap-3 hidden md:flex">
          <div className="relative ">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyPress={getArticles}
              type="text"
              placeholder="Seacrh here"
              className="p-3 bg-primary/5 focus:outline-none rounded-xl w-[495px]"
            />
            <BiSearchAlt
              size={20}
              className="md:absolute block right-4 top-4 text-primary"
            />
          </div>
          <div className="flex items-center gap-10 rounded-lg border border-primary/10  p-3">
            <p>
              Latest News on <span className="text-secondary">Covid-19</span>
            </p>
            <BiChevronRight size={20} />
          </div>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <BiX size={30} className="text-primary" />
          ) : (
            <BiMenu size={30} className="text-primary" />
          )}
        </div>

        <ul className=" absolute top-[75px] left-0 hidden md:flex justify-center items-start  w-[280px] px-[60px] py-4 flex-col mt-4 ">
          {navLink.map((val, index) => (
            <div
              key={index}
              className="flex items-center gap-3 py-4 hover:text-secondary  "
            >
              <i>{val.icon}</i>
              <li>
                <Link className="">{val.tittle}</Link>
              </li>
            </div>
          ))}
        </ul>

        <ul
          className={
            nav
              ? " absolute top-[75px] bg-white right-0 flex justify-center md:hidden p-4 flex-col mt-4 shadow-xl"
              : "hidden right-[100%]"
          }
        >
          {navLink.map((val, index) => (
            <div
              key={index}
              className="flex items-center gap-3 py-4 hover:text-secondary  "
            >
              <i>{val.icon}</i>
              <li>
                <Link className="">{val.tittle}</Link>
              </li>
            </div>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
