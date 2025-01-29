"use client";

import React from "react";
import withLotAuth from "../hoc/withLotAuth";
import Sections from "@/app/business/viewLot/[id]/Sections";
import { ParkingLot } from "@/app/types/parkingLot";

const Dashboard = ({
  lot,
  logout,
}: {
  lot: ParkingLot;
  logout: () => void;
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {lot && (
        <>
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {lot.name} Details
          </h1>

          <section className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold">Activated Lot</h2>
              <p className="text-3xl font-bold text-business mt-2">
                {lot.name}
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              {/* add logo here */}
              <h2 className="text-lg font-semibold">Total Spaces</h2>
              <p className="text-3xl font-bold  mt-2 text-business">
                {lot.total_spots}
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold">Available Spaces</h2>
              <p className="text-3xl font-bold text-business mt-2">
                {lot.total_spots - lot.occupied_spaces}
              </p>
            </div>
          </section>

          {/* Address Section */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700">Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-gray-700">
                  <strong>Postcode:</strong> {lot.postcode}
                </p>
                <p className="text-gray-700">
                  <strong>State:</strong> {lot.state}
                </p>
                <p className="text-gray-700">
                  <strong>City:</strong> {lot.city}
                </p>
              </div>
            </div>
          </section>

          {/* Lot Details Section */}
          <section className="space-y-6 mt-8">
            <h2 className="text-xl font-semibold text-gray-700">
              Parking Lot Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-gray-700">
                  <strong>Total Spots:</strong> {lot.total_spots}
                </p>
                <p className="text-gray-700">
                  <strong>Max Height:</strong> {lot.max_height} meters
                </p>
                <p className="text-gray-700">
                  <strong>Surface Type:</strong> {lot.surface_types}
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-gray-700">
                  <strong>Vehicle Type Allowed:</strong>{" "}
                  {lot.vehicle_allow_type}
                </p>
                <p className="text-gray-700">
                  <strong>Security Features:</strong> {lot.security_features}
                </p>
              </div>
            </div>
          </section>

          {/* Additional Information Section */}

          {lot.grouped ? <Sections lotId={lot.id} /> : ""}

          <section className="space-y-6 mt-8">
            <h2 className="text-xl font-semibold text-gray-700">
              Additional Information
            </h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-gray-700">
                <strong>Latitude:</strong> {lot.latitude}
              </p>
              <p className="text-gray-700">
                <strong>Longitude:</strong> {lot.longitude}
              </p>
            </div>
          </section>

          <section className="space-y-6 mt-8">
            <h2 className="text-xl font-semibold text-gray-700">
              Additional Information
            </h2>
          </section>

          <div className="flex justify-between mt-8">
            <div className="text-sm text-gray-500">
              <p>
                <strong>Created:</strong>{" "}
                {new Date(lot.created_at).toLocaleDateString()}
              </p>
              <p>
                <strong>Updated:</strong>{" "}
                {new Date(lot.updated_at).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={logout}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Logout lot
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default withLotAuth(Dashboard);
