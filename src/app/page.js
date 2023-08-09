import Image from "next/image";
import logo from "./Logomark.png";
import { FaSearch, FaHome } from "react-icons/fa";

const Home = () => {
  return (
    <div className="mx-10">
      <nav>
        <header className="flex mt-5 mb-2">
          <Image src={logo} alt="logo" width={32} height={32} />
          <h1>Untitled UI</h1>
        </header>

        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

          <input
            className="pl-10 py-2 border rounded-md focus:ring focus:ring-blue-300"
            style={{ fontFamily: "FontAwesome" }}
            placeholder=" Search"
          />
        </div>

        <div className="mt-2">
          <ul className="list-none md:flex flex-row gap-10">
            <li className="flex items-center">
              <FaHome
                className="mr-2 text-gray-500 text-[30px]"
                // style={{ color: "grey", fontSize: "20px", marginTop: "3px" }}
              />{" "}
              <p>Home</p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Home;
