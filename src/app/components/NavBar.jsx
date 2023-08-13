import Image from "next/image";
import logo from "../images/Logomark.png";
import { FaSearch } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { GoSignOut } from "react-icons/go";
import { navLinks } from "../data";
import { iconStyle, navLiStyle, badgeStyle } from "../styles";

const NavBar = () => {
  return (
    <nav className="px-[20px] w-[300px] mb-4 border-solid border-2 overflow-y-auto">
      {/* Header Section */}
      <header className="flex mt-5 mb-5">
        <Image src={logo} alt="logo" width={32} height={32} />
        <h1 className="text-[20px] ">Untitled UI</h1>
      </header>

      {/* Search Input Section  */}
      <div className="relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

        <input
          className="pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full"
          placeholder=" Search"
        />
      </div>

      {/* NavLinks Section  */}
      <div className="mt-4">
        <ul className="list-none md:flex flex-col gap-1">
          {navLinks.map((link, index) => {
            return (
              <li key={index} className={navLiStyle}>
                {link.icon}
                <p className="text-gray-700">{link.title}</p>
                {link.badge && <span className={badgeStyle}>{link.badge}</span>}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Support / features / User Account section */}
      <div className="mt-5">
        <ul className="list-none md:flex flex-col gap-1">
          <li className={navLiStyle}>
            <HiOutlineSupport className={iconStyle} />
            <p className="text-gray-700">Support</p>
          </li>
          <li className={navLiStyle}>
            <FiSettings className={iconStyle} />
            <p className="text-gray-700">Settings</p>
          </li>
        </ul>

        {/* Features */}
        <div className="mt-5 py-6 bg-gray-50 rounded-lg flex-col items-center justify-center px-4">
          <div className="my-1">
            <h4 className="font-bold">New features available!</h4>
            <p className="text-gray-700 my-2 text-[15px]">
              Check out the new dashboard view. Pages now load faster.
            </p>
          </div>
          <div>
            <div className="my-6 rounded-lg">
              <iframe
                className="rounded-lg"
                width="220"
                height="200"
                src="https://www.youtube.com/embed/k4szRq1R-08"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex-start mt-4 space-x-5">
              <button className="text-gray-700">Dismiss</button>
              <button className="text-purple-500 font-bold">
                {"What's new?"}
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t my-8" />

        {/* Account */}
        <div className="mb-4 mx-auto flex items-center w-full space-x-5">
          <div className="flex-auto">
            <Image
              className="rounded-full"
              height={50}
              width={50}
              src={"/images/woman-1.jpg"}
              alt="profile-picture"
            />
          </div>
          <div className="flex-auto">
            <h4 className="font-bold">Olivia Rhye</h4>
            <span className="text-[14px] text-gray-700">
              olivia@untiltledui.com
            </span>
          </div>
          <div className="flex-auto">
            <GoSignOut className={iconStyle} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
