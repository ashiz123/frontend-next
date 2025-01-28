import React from "react";
import Header from "./header"; // Make sure the import path is correct
import Footer from "./footer"; // Make sure the import path is correct
import { VehicleProvider } from "../VehicleContext/VehicleProvider";
import { AuthLotProvider } from "@/app/parkingLots/contexts/lot/authLotProvider";

const CustomerLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AuthLotProvider>
      <VehicleProvider>
        <Header />
        <main className="container mx-auto">{children}</main>
        <Footer />
      </VehicleProvider>
    </AuthLotProvider>
  );
};

export default CustomerLayout;
