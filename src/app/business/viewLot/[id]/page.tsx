"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchLotById } from "./fetchLotById";
import { ParkingLot } from "../../dashboard/type";
import Sections from "./Sections";
import withAuth from "@/app/hoc/withAuth";

function ViewLot() {
  const { id } = useParams();
  const [lotDetails, setLotDetails] = useState<ParkingLot | null>(null);
  const lotId = Number(id);

  useEffect(() => {
    const getLotById = async (lotId: number) => {
      const data = await fetchLotById(lotId);
      console.log(data[0]);
      setLotDetails(data[0]);
      try {
      } catch (error) {
        console.log(error);
      }
    };

    getLotById(Number(lotId));
  }, [lotId]);

  function handleEditClick() {}

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {lotDetails && (
        <>
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {lotDetails.name} Details
          </h1>

          {/* Address Section */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700">Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-gray-700">
                  <strong>Postcode:</strong> {lotDetails.postcode}
                </p>
                <p className="text-gray-700">
                  <strong>State:</strong> {lotDetails.state}
                </p>
                <p className="text-gray-700">
                  <strong>City:</strong> {lotDetails.city}
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
                  <strong>Total Spots:</strong> {lotDetails.total_spots}
                </p>
                <p className="text-gray-700">
                  <strong>Max Height:</strong> {lotDetails.max_height} meters
                </p>
                <p className="text-gray-700">
                  <strong>Surface Type:</strong> {lotDetails.surface_types}
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-gray-700">
                  <strong>Vehicle Type Allowed:</strong>{" "}
                  {lotDetails.vehicle_allow_type}
                </p>
                <p className="text-gray-700">
                  <strong>Security Features:</strong>{" "}
                  {lotDetails.security_features}
                </p>
              </div>
            </div>
          </section>

          {/* Additional Information Section */}

          {lotDetails.grouped ? <Sections lotId={lotId} /> : ""}

          <section className="space-y-6 mt-8">
            <h2 className="text-xl font-semibold text-gray-700">
              Additional Information
            </h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-gray-700">
                <strong>Latitude:</strong> {lotDetails.latitude}
              </p>
              <p className="text-gray-700">
                <strong>Longitude:</strong> {lotDetails.longitude}
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
                {new Date(lotDetails.created_at).toLocaleDateString()}
              </p>
              <p>
                <strong>Updated:</strong>{" "}
                {new Date(lotDetails.updated_at).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={handleEditClick}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Edit Lot
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default withAuth(ViewLot);
