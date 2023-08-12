import React, { useRef, useState } from "react";
import { FiMail } from "react-icons/fi";

const userEmail = "olivia@untiltledui.com";

const EmailForm = () => {
  const [email, setEmail] = useState(userEmail);
  const [isAlternativeEmailSelected, setIsAlternativeEmailSelected] =
    useState(false);
  const handleRadioChange = (event) => {
    setIsAlternativeEmailSelected(event.target.checked);
  };
  const inputRef = useRef(null);

  return (
    <form>
      <div
        className="flex items-start py-1"
        onClick={() => setEmail(userEmail)}
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
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        <input
          className="px-1 radio-button"
          type="radio"
          id="alternativeEmail"
          name="emailGroup"
          onChange={handleRadioChange}
        />
        <label className="block mx-6 mt-[-6px]" htmlFor="alternativeEmail">
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </label>
      </div>
    </form>
  );
};

export default EmailForm;
