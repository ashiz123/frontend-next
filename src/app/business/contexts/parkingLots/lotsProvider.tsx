"use client";
import React, { useState } from "react";
// import { lotsContextType } from './lotsContext';
import { ParkingLot } from "../../dashboard/type";
import LotsContext from "./lotsContext";

const LotsProvider = ({ children }: { children: React.ReactNode }) => {
  const [lots, setLots] = useState<ParkingLot[] | null>(null);

  const getLotById = (id: number) => {
    if (!lots) return null;
    return lots.find((lot) => lot.id === id) || null; // Return null if not found
  };

  return (
    <LotsContext.Provider value={{ lots, setLots, getLotById }}>
      {children}
    </LotsContext.Provider>
  );
};

export default LotsProvider;
