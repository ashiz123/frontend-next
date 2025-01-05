import React, {createContext} from 'react';
import { ParkingLot } from '../../dashboard/type';

export interface lotsContextType{
lots : ParkingLot[] | null;
setLots : React.Dispatch<React.SetStateAction<ParkingLot[] | null>>;
getLotById : (id:number) => ParkingLot | null;
}

const LotsContext = createContext<lotsContextType | undefined>(undefined);


export default LotsContext;