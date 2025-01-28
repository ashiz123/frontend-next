import React from "react";
import { AppProps } from "next/app";
import ParkingLotLayout from "../layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParkingLotLayout>
      <Component {...pageProps} />
    </ParkingLotLayout>
  );
}
