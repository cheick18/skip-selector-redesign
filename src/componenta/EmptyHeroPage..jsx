import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

// Layout component for pages other than the index page, with a button to continue to the next step
export default function EmptyHeroPage({ title, nextLink }) {
  const navigate = useNavigate();
  const { goToNextStep } = useContext(AppContext);

  // Function to move to the next step and navigates to its page
  const goToNextStepWithLink = () => {
    goToNextStep();
    if (title === "Waste Type") navigate("/");
    else navigate(nextLink);
  };
  return (
    <div>
      <h5 className="text-2xl sm:text-3xl text-center sm:text-start">
        {title} Page
      </h5>
      {title === "Payment" ? (
        <></>
      ) : (
        <div className=" pt-16 pl-0 sm:pl-6 flex items-center sm:items-start w-full  justify-center sm:justify-between">
          <button
            onClick={goToNextStepWithLink}
            className="bg-blue-600 text-white hover:bg-blue-900 transition-colors duration-300 px-4 py-2 rounded"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
