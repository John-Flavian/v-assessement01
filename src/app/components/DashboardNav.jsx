import { useState } from "react";
import Link from "next/link";
import { dashboardNavLiStyle, dashboardNavUlStyle } from "../styles";

const dashboardLinks = [
  {
    id: "my-details",
    title: "My details",
  },
  {
    id: "profile",
    title: "Profile",
  },
  {
    id: "password",
    title: "Password",
  },
  {
    id: "team",
    title: "Team",
  },
  {
    id: "plan",
    title: "Plan",
  },
  {
    id: "billing",
    title: "Billing",
  },
  {
    id: "notifications",
    title: "Notifications",
  },
  {
    id: "integration",
    title: "Integration",
  },
  {
    id: "api",
    title: "Api",
  },
];

const DashboardNav = () => {
  const [active, setActive] = useState("");

  return (
    <div className="mt-5 overflow-x-auto">
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
