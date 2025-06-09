
export enum StepStatus {
  Todo = 'TODO',
  Completed = 'COMPLETED',
  Success = 'SUCCESS',
}

export interface stepItem{
  stepNumber:number;
  title:string;
  route?: string;
  status:string;
}
