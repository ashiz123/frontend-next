"use client";
import React from "react";
import Navigation from "./components/navigation";
import { AuthLotProvider } from "./contexts/lot/authLotProvider";

const ParkingLotLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AuthLotProvider>
      <Navigation />
      <main className="container mx-auto">{children}</main>
    </AuthLotProvider>
  );
};

export default ParkingLotLayout;
