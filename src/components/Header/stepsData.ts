import {  stepItem, StepStatus } from "../../types/step";

// List of steps for the header with their title, route, and status

export const stepData: stepItem[] = [
 { stepNumber: 1, title: 'Postcode', route: '/postcode', status: StepStatus.Success },
  { stepNumber: 2, title: 'Waste Type', route: '/waste-type', status: StepStatus.Success },
  { stepNumber: 3, title: 'Select Skip', route: '/', status: StepStatus.Completed },
  { stepNumber: 4, title: 'Permit Check', route: '/permit-check', status: StepStatus.Todo },
  { stepNumber: 5, title: 'Choose Date', route: '/choose-date', status: StepStatus.Todo },
  { stepNumber: 6, title: 'Payment', route: '/payment', status: StepStatus.Todo },
];