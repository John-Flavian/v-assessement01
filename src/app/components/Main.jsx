"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { FiMail } from "react-icons/fi";

const Main = () => {
  const [active, setActive] = useState("");
  const [isAlternativeEmailSelected, setIsAlternativeEmailSelected] =
    useState(false);
  const inputRef = useRef(null);

  const handleRadioChange = (event) => {
    setIsAlternativeEmailSelected(event.target.checked);
  };

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

  return (
    <div className="px-8 py-5 bg-gray-50 flex-auto overflow-y-auto">
      <header>
        <h2 className="font-medium text-3xl">Settings</h2>
        <p className="text-gray-500 py-2">
          Manage your team and preferences here.
        </p>
      </header>

      {/* Nav section */}

      <div className="mt-5 flex">
        <ul className="list-none flex border border-gray-300 rounded-lg">
          {dashboardLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "bg-gray-50" : "bg-white"
              } font-medium hover:bg-gray-100 hover:font-semibold cursor-pointer border border-gray-200 p-3 text-center`}
              onClick={() => setActive(link.title)}
            >
              <Link href={`#${link.id}`}>{link.title} </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <div className="py-4">
          <h2 className="font-semibold text-[20px]">Payment method</h2>
          <p className="text-gray-500">
            Update your billing details and address.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full border-t my-5" />

        <div className="flex gap-28 py-4">
          <div className="">
            <h2 className="font-medium text-gray-700">Contact email</h2>
            <p className="text-gray-500">Where should invoices be sent?</p>
          </div>

          <div className="">
            <div
              className="flex items-start py-1"
              onClick={() => setIsAlternativeEmailSelected(false)}
            >
              <input
                className="px-1 radio-button"
                type="radio"
                id="originalEmail"
                name="radioGroup"
              />
              <label className="block mx-6 mt-[-6px]" htmlFor="originalEmail">
                <span className="font-semibold text-gray-700">
                  Send to my account email
                </span>
                <p className="">olivia@untiltledui.com</p>
              </label>
            </div>

            <div className="flex items-start py-1 mt-3">
              <input
                className="px-1 radio-button"
                type="radio"
                id="alternativeEmail"
                name="radioGroup"
                onChange={handleRadioChange}
                onClick={() => inputRef.current.focus()}
              />
              <label
                className="block mx-6 mt-[-6px]"
                htmlFor="alternativeEmail"
              >
                <span className="font-semibold text-gray-700">
                  Send to an alternative email
                </span>

                <div
                  className={`${
                    !isAlternativeEmailSelected ? "invisible" : "relative"
                  } py-2`}
                >
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                  <input
                    className="pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full shadow-md"
                    placeholder="alternative@mail.com"
                    ref={inputRef}
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t my-8" />

      <div className="">
        <div>
          <h4>Contact email</h4>
          <p>Where should invoices be sent?</p>
        </div>
        <div></div>
      </div>

      <div className="">
        <h2>Card details</h2>
        <p>Select default payment method.</p>
      </div>
    </div>
  );
};

export default Main;
