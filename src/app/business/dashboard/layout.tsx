import React from 'react';
import LotsProvider from '../contexts/parkingLots/lotsProvider'; 


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LotsProvider>
      {children}  
    </LotsProvider>
  );
};

export default DashboardLayout;