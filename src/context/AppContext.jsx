import React, { createContext, useState } from "react";
import { StepStatus } from "../types/step";
import { stepData } from "../componenta/Header/stepsData";

// Context creation
export const AppContext = createContext();

export default function AppProvider({ children }) {
  // const navigate = useNavigate();
  const initialSteps = stepData;
  const [steps, setSteps] = useState(initialSteps);

  // Function that handles the click on a step
  const handleClick = (clickedIndex) => {
    const clickedStep = steps[clickedIndex];
    if (clickedStep.status !== StepStatus.Success) return;

    const updatedSteps = steps.map((step, index) => {
      if (index < clickedIndex) {
        return step;
      } else if (index === clickedIndex) {
        return { ...step, status: StepStatus.Completed };
      } else {
        return { ...step, status: StepStatus.Todo };
      }
    });

    setSteps(updatedSteps);
  };

  // Handles transition to the next step
  const goToNextStep = () => {
    const currentIndex = steps.findIndex(
      (step) => step.status === StepStatus.Completed
    );

    if (currentIndex === -1 || currentIndex === steps.length - 1) return;

    const updatedSteps = steps.map((step, index) => {
      if (index === currentIndex) {
        return { ...step, status: StepStatus.Success };
      } else if (index === currentIndex + 1) {
        return { ...step, status: StepStatus.Completed };
      } else {
        return step;
      }
    });

    setSteps(updatedSteps);
  };

  // Function that allows moving to the previous step

  const goToPrevSteps = () => {
    const currentIndex = steps.findIndex(
      (step) => step.status === StepStatus.Completed
    );

    if (currentIndex === -1 || currentIndex === steps.length - 1) return;
    const prevUpdatedSteps = steps.map((step, index) => {
      if (index === currentIndex) {
        return { ...step, status: StepStatus.Todo };
      } else if (index === currentIndex - 1) {
        return { ...step, status: StepStatus.Completed };
      } else {
        return step;
      }
    });
    setSteps(prevUpdatedSteps);
  };

  // Value passed through the context
  const value = {
    steps,
    handleClick,
    goToNextStep,
    goToPrevSteps,
  };

  return (
    <AppContext.Provider value={value}>
      {/* Fournir le contexte aux composants enfants */}
      {children}
    </AppContext.Provider>
  );
}
