"use client";
import { useState } from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { paymentCards } from "../data";
import { paymentDivStyle } from "../styles";

const PaymentForm = () => {
  const [activePayment, setActivePayment] = useState("");

  return (
    <div className="flex-auto">
      <form className="flex flex-col gap-y-4">
        {paymentCards.map((card) => {
          return (
            <div
              onClick={() => setActivePayment(card.type)}
              key={card.id}
              className={`${
                activePayment === card.type
                  ? "bg-purple-50 border-2 border-purple-300 text-purple-600"
                  : "bg-white text-gray-500"
              } ${paymentDivStyle}`}
            >
              <input
                className="px-3 radio-button absolute top-6 right-4"
                type="radio"
                id={card.type}
                checked={activePayment === card.type}
                onChange={() => setActivePayment(card.type)}
                name="paymentGroup"
              />
              <label
                className="flex items-start mx-4 gap-4"
                htmlFor={card.type}
              >
                <Image
                  src={card.logo}
                  alt={`${card.type} - payment`}
                  width={50}
                  height={50}
                />

                <div>
                  <p>
                    <span className="font-bold">
                      {card.type} ending in {card.cardNo}
                    </span>
                    <span className="block font-medium text-gray-400">
                      Expiry {card.expiry}
                    </span>
                  </p>
                  <div className="mt-2 flex gap-x-5">
                    <button className="font-medium text-gray-400">
                      Set as default
                    </button>
                    <button className="text-purple-500 font-semibold">
                      Edit
                    </button>
                  </div>
                </div>
              </label>
            </div>
          );
        })}

        <div>
          <button className="flex items-center gap-x-2 text-gray-400 font-semibold">
            <FiPlus className="text-2xl" />
            <span> Add new payment method</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
