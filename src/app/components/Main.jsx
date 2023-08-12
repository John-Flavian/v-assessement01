"use client";
import Image from "next/image";
import { useState } from "react";
import { FiDownloadCloud, FiArrowDown, FiCheck } from "react-icons/fi";
import DashboardNav from "./DashboardNav";
import EmailForm from "./EmailForm";
import PaymentForm from "./PaymentForm";

const images = [
  "/images/man-1.jpg",
  "/images/man-2.jpg",
  "/images/man-3.jpg",
  "/images/man-4.jpg",
  "/images/man-5.jpg",
];

const Main = () => {
  const [activePayment, setActivePayment] = useState("");

  return (
    <div className="px-8 py-5 bg-gray-50 flex-auto overflow-y-auto">
      {/* Header section  */}
      <header>
        <h2 className="font-medium text-3xl">Settings</h2>
        <p className="text-gray-500 py-2">
          Manage your team and preferences here.
        </p>
      </header>

      {/* Nav section */}
      <DashboardNav />

      {/* Payment section  */}
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

          {/* Email Form  */}
          <EmailForm />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t my-5" />

      <div className="flex gap-28 py-4">
        <div>
          <h2 className="font-medium text-gray-700">Card details</h2>
          <p className="text-gray-500">Select default payment method.</p>
        </div>

        {/* Payment Cards Form  */}
        <PaymentForm />
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

        {/* Table section  */}
        <div className="overflow-x-auto">
          <div className="table w-[800px] lg:w-full border-solid border rounded-lg">
            <div className="table-row-group">
              <div className="table-row px-3">
                <div className="table-cell w-3/9 border-b pl-8 py-2 text-xs text-gray-500">
                  <div className="flex gap-x-2 items-end">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>Invoice</span>
                    <FiArrowDown className="w-4 h-4" />
                  </div>
                </div>
                <div className="table-cell w-1/9 border-b py-2 text-xs text-gray-500">
                  <span>Amount</span>
                </div>
                <div className="table-cell w-1/9 border-b py-2 text-xs text-gray-500">
                  <span>Date</span>
                </div>
                <div className="table-cell w-1/9 border-b py-2 text-xs text-gray-500">
                  <span>Status</span>
                </div>
                <div className="table-cell w-2/9 border-b py-2 text-xs text-gray-500">
                  <span>Users on Plan</span>
                </div>
                <div className="table-cell w-1/9 border-b py-2 text-xs text-gray-500"></div>
              </div>
            </div>

            <div className="table-row-group text-sm">
              <div className="table-row">
                <div className="table-cell w-2/7 border-b pl-8 py-6 bg-white text-sm font-semibold">
                  <div className="flex gap-x-2 items-end">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>Basic Plan - Dec 2022</span>
                  </div>
                </div>
                <div className="table-cell w-1/7 text-gray-500 border-b py-6 bg-white text-sm">
                  <span>USD $1.00</span>
                </div>
                <div className="table-cell w-1/7 text-gray-500 border-b py-6 bg-white text-sm">
                  <span>Dec 1, 2022</span>
                </div>
                <div className="table-cell w-1/7 text-gray-500 border-b py-6 bg-white text-sm">
                  <div className="flex gap-x-1 rounded-full py-1 px-2 bg-green-300 w-4/5 text-green-700">
                    <FiCheck />
                    <span className="text-xs">Paid</span>
                  </div>
                </div>
                <div className="table-cell w-1/7 text-gray-500 border-b py-6 bg-white text-sm">
                  <span>Users on Plan</span>
                </div>
                <div className="table-cell w-1/7 bg-white border-b py-2 text-sm pr-1">
                  <FiDownloadCloud className="text-2xl text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {/* <Image src={images[0]} alt="images" width={100} height={100} /> */}
        <div className="flex items-center">
          {images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className={`relative w-8 h-8 rounded-full overflow-hidden border-2 border-white ${
                index === 0 ? "" : "-ml-3"
              }`}
              // style={{ zIndex: images.length - index }}
            >
              <Image
                src={image}
                width={100}
                height={100}
                alt={`Image ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {images.length > 3 && (
            <div className="w-8 h-8 bg-gray-200 text-sm rounded-full flex items-center justify-center z-10 -ml-3">
              +{images.length - 3}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
