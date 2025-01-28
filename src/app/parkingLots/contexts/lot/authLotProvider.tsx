import React, { useState } from "react";
import { ParkingLot } from "@/app/types/parkingLot";
import AuthLotContext from "./authLotContext";

interface AuthLotContexProps {
  children: React.ReactNode;
}

export const AuthLotProvider: React.FC<AuthLotContexProps> = ({ children }) => {
  const [lot, setLot] = useState<ParkingLot | null>(null);

  return (
    <AuthLotContext.Provider value={{ lot, setLot }}>
      {children}
    </AuthLotContext.Provider>
  );
};
