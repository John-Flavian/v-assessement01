import Image from "next/image";
import logo from "../images/Logomark.png";
import { FaSearch, FaHome } from "react-icons/fa";
import {
  FiBarChart2,
  FiLayers,
  FiCheckSquare,
  FiFlag,
  FiUsers,
  FiSettings,
} from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { GoSignOut } from "react-icons/go";

const iconStyle = "mr-2 text-gray-500 text-[30px]";
const badgeStyle = "ml-2 bg-gray-300 text-black text-xs px-3 py-1 rounded-full";

const navLinks = [
  {
    title: "Home",
    icon: <FaHome className={iconStyle} />,
    badge: null,
  },
  {
    title: "Dashboard",
    icon: <FiBarChart2 className={iconStyle} />,
    badge: 10,
  },
  {
    title: "Projects",
    icon: <FiLayers className={iconStyle} />,
    badge: null,
  },
  {
    title: "Tasks",
    icon: <FiCheckSquare className={iconStyle} />,
    badge: null,
  },
  {
    title: "Reporting",
    icon: <FiFlag className={iconStyle} />,
    badge: null,
  },
  {
    title: "Users",
    icon: <FiUsers className={iconStyle} />,
    badge: null,
  },
];

const NavBar = () => {
  return (
    <nav className="mx-10 w-[300px] border-solid border-2">
      {/* Header Section */}
      <header className="flex mt-5 mb-5">
        <Image src={logo} alt="logo" width={32} height={32} />
        <h1 className="text-[20px] ">Untitled UI</h1>
      </header>

      <div className="relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

        <input
          className="pl-10 py-2 border rounded-md focus:ring focus:ring-blue-300 w-full"
          placeholder=" Search"
        />
      </div>
      {/* NavLinks Section  */}
      <div className="mt-4">
        <ul className="list-none md:flex flex-row gap-10">
          {navLinks.map((link, index) => {
            return (
              <li
                key={index}
                className="flex items-center mt-3 border-solid border-4 relative"
              >
                {link.icon}
                <p className="text-gray-700">{link.title}</p>
                {link.badge && <span className={badgeStyle}>{link.badge}</span>}
              </li>
            );
          })}
        </ul>
      </div>
      {/* Support and features section */}
      <div>
        <ul>
          <li className="flex items-center">
            <HiOutlineSupport className={iconStyle} />
            <p>Support</p>
          </li>
          <li className="flex items-center">
            <FiSettings className={iconStyle} />
            <p>Settings</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
