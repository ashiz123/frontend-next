import Link from "next/link";
import React from "react";
import withLotAuth from "../hoc/withLotAuth";
import { ParkingLot } from "@/app/types/parkingLot";

const Navigation = ({ lot }: { lot: ParkingLot }) => {
  return (
    <nav className="bg-blue-600 p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex justify-center flex-grow">
          {lot && (
            <div className="space-x-6">
              <Link
                href="/parkingLots/dashboard"
                className="text-white hover:text-blue-200"
              >
                Dashboard
              </Link>
              <Link
                href="/parkingLots/records"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Records
              </Link>
              <Link href="/contact" className="text-white hover:text-blue-200">
                Pricing & Payments
              </Link>
              <Link href="/contact" className="text-white hover:text-blue-200">
                Analytics & Reports
              </Link>
              <Link href="/contact" className="text-white hover:text-blue-200">
                Helpπ
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default withLotAuth(Navigation);
