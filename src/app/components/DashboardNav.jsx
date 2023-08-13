"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { dashboardNavLiStyle, dashboardNavUlStyle } from "../styles";
import useScroll from "./useScroll";
import { dashboardLinks } from "../data";

const DashboardNav = () => {
  const [active, setActive] = useState("");
  const docRef = useRef(null);
  useScroll(docRef);

  return (
    <div className="mt-5 overflow-x-auto" ref={docRef}>
      <div className="flex w-[800px]">
        <ul className={dashboardNavUlStyle}>
          {dashboardLinks.map((link, index) => (
            <li
              key={link.id}
              className={` ${dashboardNavLiStyle}
              ${index === 0 ? "rounded-l-lg" : ""}
              ${active === link.title ? "bg-gray-50" : "bg-white"}
              ${
                index === dashboardLinks.length - 1
                  ? "rounded-r-lg"
                  : "border-r-2"
              }
            `}
              onClick={() => setActive(link.title)}
            >
              <Link href={`#${link.id}`}>{link.title} </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardNav;
