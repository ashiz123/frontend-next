import { createContext } from 'react';
import { ParkingLot } from '@/app/types/parkingLot';

// Define the structure of the context value
export interface AuthLotContextType {
  lot: ParkingLot | null;
  setLot: React.Dispatch<React.SetStateAction<ParkingLot | null>>;
}

// Create the context
const AuthLotContext = createContext<AuthLotContextType | undefined>(undefined);

export default AuthLotContext;