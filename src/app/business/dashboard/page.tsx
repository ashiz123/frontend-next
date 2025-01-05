"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import withAuth from "@/app/hoc/withAuth";
import { UserDataInterface } from "../contexts/user/UserDataInterface";
import fetchParkingLots from "./fetchParkingLots";
import { useLotsContext } from "../contexts/parkingLots/useLotsContext";

interface dashboardProps {
  isAuthenticated: boolean;
  user: UserDataInterface | null;
}

const Dashboard: React.FC<dashboardProps> = ({ user }) => {
  const router = useRouter();
  const { lots, setLots } = useLotsContext();

  useEffect(() => {
    const getAllParkingLots = async () => {
      try {
        if (user) {
          console.log(user);
          const data = await fetchParkingLots(user.id);
          setLots(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllParkingLots();
  }, [user]);

  const addParkingLot = () => {
    router.push("/business/create_parking_lot");
  };

  function selectLot(id: number) {
    router.push(`/business/viewLot/${id}`);
  }

  return (
    <>
      <h1 className="text-center text-3xl font-bold text-gray-900 m-4 pt-5">
        Parking Dashboard
      </h1>
      <main className="container mx-auto px-4 py-6">
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-4 rounded-lg shadow">
            {/* add logo here */}
            <h2 className="text-lg font-semibold">Total Parking Lots</h2>
            <p className="text-3xl font-bold  mt-2 text-business">12</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Total Spaces</h2>
            <p className="text-3xl font-bold text-business mt-2">350</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Occupied Spaces</h2>
            <p className="text-3xl font-bold text-business mt-2">245</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Available Spaces</h2>
            <p className="text-3xl font-bold text-business mt-2">105</p>
          </div>
        </section>

        {/* <!-- Parking Space Availability --> */}
        <section className="bg-white p-6 rounded-lg shadow mb-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-4">
              Parking Space Availability
            </h2>
            <button
              onClick={addParkingLot}
              className="bg-teal-800 text-white py-2 px-4 rounded-md hover:bg-teal-400 focus:outline-none"
            >
              Add Parking Lot
            </button>
          </div>

          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="w-full bg-business text-white">
                <th className="py-2 px-4 text-left">Parking Lot</th>
                <th className="py-2 px-4 text-left">Total Spaces</th>
                <th className="py-2 px-4 text-left">Occupied</th>
                <th className="py-2 px-4 text-left">Available</th>
                <th className="py-2 px-4 text-left">Sections</th>
                {/* <th className="py-2 px-4 text-left">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {lots && lots.length > 0 ? (
                lots.map((lot) => {
                  return (
                    <tr
                      className="hover:bg-gray-200 cursor-pointer"
                      key={lot.id}
                      onClick={() => selectLot(lot.id)}
                    >
                      <td className="py-2 px-4">{lot.name}</td>
                      <td className="py-2 px-4">{lot.total_spots}</td>
                      <td className="py-2 px-4">35</td>
                      <td className="py-2 px-4 text-green-500">15</td>
                      <td className="py-2 px-4 ">
                        {lot.grouped ? "yes" : "no"}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4} className="py-2 px-4 text-center">
                    No any parking lot added
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
        {/* 
    <!-- Parking Control Panel --> */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Parking Control Panel</h2>
          <div className="flex space-x-4">
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
              Open Parking Gate
            </button>
            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
              Close Parking Gate
            </button>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
              Refresh Availability
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default withAuth(Dashboard);
