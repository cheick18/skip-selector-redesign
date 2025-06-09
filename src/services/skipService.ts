import { Skip } from "../types/skip";

// Gets skip data from the server based on location
export const getSkips = async (): Promise<Skip[]> => {
  const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
  
  const data = await response.json();
  return data;
};