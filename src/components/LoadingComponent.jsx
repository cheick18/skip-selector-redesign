
import { Spinner } from "flowbite-react";

// Loading spinner displayed while waiting for API response
export function Loading() {
  return (
    <div className="flex flex-col justify-end h-[30vh] bg-dark ">
    
      <div className="text-center">
        <Spinner  color="info" aria-label="Center-aligned spinner example" />
      </div>
    
    </div>
  );
}
