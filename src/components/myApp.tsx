
import React from 'react';
import { AppProps } from 'next/app';
import { VehicleProvider } from '@/contexts/Vehicle/VehicleProvider';


export default function MyApp({Component, pageProps} : AppProps) {
  return (
   <VehicleProvider>
      <Component {...pageProps}  />
    </VehicleProvider>
  )
}
