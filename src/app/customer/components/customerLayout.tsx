import React from 'react';
import Header from './header'; // Make sure the import path is correct
import Footer from './footer'; // Make sure the import path is correct
import { VehicleProvider } from '../VehicleContext/VehicleProvider';


const CustomerLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <VehicleProvider>
      <Header />
      <main className='container mx-auto'>{children}</main>
      <Footer />
    </VehicleProvider>
  );
};
 
export default CustomerLayout;