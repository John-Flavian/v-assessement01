"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { FiMail, FiPlus, FiDownloadCloud } from "react-icons/fi";
import mastercard from "../images/mastercard.png";
import visa from "../images/visa.png";

const Main = () => {
  const [active, setActive] = useState("");
  const [activePayment, setActivePayment] = useState("");
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
          <div>
            <h2 className="font-medium text-gray-700">Contact email</h2>
            <p className="text-gray-500">Where should invoices be sent?</p>
          </div>

          <div>
            <form>
              <div
                className="flex items-start py-1"
                onClick={() => setIsAlternativeEmailSelected(false)}
              >
                <input
                  className="px-1 radio-button"
                  type="radio"
                  id="originalEmail"
                  name="emailGroup"
                />
                <label className="block mx-6 mt-[-6px]" htmlFor="originalEmail">
                  <span className="font-semibold text-gray-700">
                    Send to my account email
                  </span>
                  <p className="">olivia@untiltledui.com</p>
                </label>
              </div>

              <div
                className="flex items-start py-1 mt-3"
                onClick={() => inputRef.current.focus()}
              >
                <input
                  className="px-1 radio-button"
                  type="radio"
                  id="alternativeEmail"
                  name="emailGroup"
                  onChange={handleRadioChange}
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
                      ref={inputRef}
                      className="pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full shadow-md"
                      placeholder="alternative@mail.com"
                    />
                  </div>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t my-6" />

      <div className="flex gap-28 py-4">
        <div>
          <h2 className="font-medium text-gray-700">Card details</h2>
          <p className="text-gray-500">Select default payment method.</p>
        </div>

        <div className="flex-auto">
          <form className="flex flex-col gap-y-4">
            <div
              onClick={() => setActivePayment("visa-card")}
              className={`${
                activePayment === "visa-card"
                  ? "bg-purple-50 border-2 border-purple-300 text-purple-600"
                  : "bg-white text-gray-500"
              } relative flex items-start py-5 px-2 w-full border-solid border-2 shadow-md rounded-lg `}
            >
              <input
                className="px-3 radio-button absolute top-6 right-4"
                type="radio"
                id="visaPayment"
                checked={activePayment === "visa-card" ? true : false}
                name="paymentGroup"
              />
              <label
                className="flex items-start mx-4 gap-4"
                htmlFor="visaPayment"
              >
                <Image
                  src={visa}
                  alt="visa-card-payment"
                  width={50}
                  height={50}
                />
                {/* <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
                <div className="">
                  <p>
                    <span className="font-bold">Visa ending in 2345</span>
                    <span className="block font-medium text-gray-400">Expiry 06/24</span>
                  </p>
                  <div className="mt-2 flex gap-x-5">
                    <button className="font-medium text-gray-400">Set as default</button>
                    <button className="text-purple-500 font-semibold">Edit</button>
                  </div>
                </div>
              </label>
            </div>

            <div
              onClick={() => setActivePayment("mastercard")}
              className={`${
                activePayment === "mastercard"
                  ? "bg-purple-50 border-2 border-purple-300 text-purple-600"
                  : "bg-white text-gray-500"
              } relative flex items-start py-5 px-2 w-full border-solid border-2 shadow-md rounded-lg `}
            >
              <input
                className="px-3 radio-button absolute top-6 right-4"
                type="radio"
                id="mastercard"
                checked={activePayment === "mastercard" ? true : false}
                name="paymentGroup"
              />
              <label
                className="flex items-start mx-4 gap-4"
                htmlFor="mastercard"
              >
                <Image
                  src={mastercard}
                  alt="mastercard-payment"
                  width={50}
                  height={50}
                />
                {/* <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
                <div className="">
                  <p>
                    <span className="font-bold">Mastercard ending in 2345</span>
                    <span className="block font-medium text-gray-400">Expiry 06/24</span>
                  </p>
                  <div className="mt-2 flex gap-x-5">
                    <button className="font-medium text-gray-400">Set as default</button>
                    <button className="text-purple-500 font-semibold">Edit</button>
                  </div>
                </div>
              </label>
            </div>

            <div>
              <button className="flex items-center gap-x-2 bg-white text-gray-400 font-semibold">
                <FiPlus className="text-2xl" />  
                <span> Add new payment method</span>
              </button>
            </div>
          </form>
        </div>
      </div>
       
      {/* Table section  */}

      <div className="mt-3">
        <div className="flex justify-between items-start py-5 text-gray-600">
          <h3 className="text-xl font-semibold">Billing history</h3>

          <button className="flex font-semibold bg-white gap-x-2 p-3 border-solid border-2 shadow-sm rounded-lg">
          <FiDownloadCloud className="text-2xl" /> 
            Download all
          </button>
        </div>
        <div>
          Table
        </div>
      </div>

      <div className="">
        <h2>Card details</h2>
        <p>Select default payment method.</p>
      </div>
    </div>
  );
};

export default Main;
