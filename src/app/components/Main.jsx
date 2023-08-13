"use client";
import { FiDownloadCloud } from "react-icons/fi";
import DashboardNav from "./DashboardNav";
import EmailForm from "./EmailForm";
import PaymentForm from "./PaymentForm";
import BillingsTable from "./BillingsTable";

const Main = () => {
  return (
    <div className="px-8 py-5 bg-gray-50 flex-auto overflow-y-auto">
      {/* Header section  */}
      <header className="mt-16 md:mt-0">
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

        <div className="flex flex-col gap-y-8 py-2 md:gap-24 md:py-4 md:flex-row">
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

      {/* Card Section  */}
      <div className="flex flex-col gap-y-8 py-4 md:gap-24 md:flex-row">
        <div>
          <h2 className="font-medium text-gray-700">Card details</h2>
          <p className="text-gray-500">Select default payment method.</p>
        </div>

        {/* Payment Card Form  */}
        <PaymentForm />
      </div>

      {/* Table section  */}
      <div className="mt-3">
        <div className="flex flex-col gap-y-4 md:flex-row justify-between items-start py-5 text-gray-600">
          <h3 className="text-xl font-semibold">Billing history</h3>

          <button className="flex font-semibold bg-white gap-x-2 p-3 border-solid border-2 shadow-sm rounded-lg">
            <FiDownloadCloud className="text-2xl" />
            Download all
          </button>
        </div>

        {/* Table  */}
        <BillingsTable />
      </div>
    </div>
  );
};

export default Main;
