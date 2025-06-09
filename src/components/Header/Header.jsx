import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { StepStatus } from '../../types/step';


export default function StepNavigation() {
   const { steps, handleClick} = useContext(AppContext);

  return (
    <ol className="relative ml-0 sm:ml-10 text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 
     sm:fixed z-1 sm:z-10  h-auto">
      {steps.map((step, index) => {
        let statusClass = '';
        let icon;

        if (step.status === StepStatus.Success) {
          statusClass = 'bg-green-200';
          icon = (
            <svg
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          );
        } else if (step.status === StepStatus.Completed) {
          statusClass = 'bg-blue-200';
          icon = <span className="text-blue-700 font-bold text-sm">{step.stepNumber}</span>;
        } else {
          statusClass = 'bg-gray-100';
          icon = <span className="text-gray-500 font-bold text-sm">{step.stepNumber}</span>;
        }

        const content = (
          <li className="mb-10 ms-6 cursor-pointer" key={step.stepNumber}>
            <span
              className={`absolute flex items-center ml-5 sm:ml-0 justify-center w-6 h-6   sm:w-8 sm:h-8  ${statusClass} rounded-full -start-4 ring-4 ring-white`}
            >
              {icon}
            </span>
            <h3 className=" font-light sm:font-medium leading-tight pl-3 sm:pl-0">{step.title}</h3>
          </li>
        );

        return (
          <div key={step.stepNumber} onClick={() => handleClick(index)}>
            {step.route ? (
              <Link
                to={step.route}
                className={step.status === StepStatus.Todo ? 'pointer-events-none opacity-50' : ''}
              >
                {content}
              </Link>
            ) : (
              content
            )}
          </div>
        );
      })}
    </ol>
  );
}
