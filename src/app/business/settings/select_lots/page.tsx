"use client";
import React, { useEffect, useState } from "react";
import { fetchLotsByUserId } from "./fetchLotsByUserId";
import withAuth from "@/app/hoc/withAuth";
import { UserDataInterface } from "../../contexts/user/UserDataInterface";
import { selectUserWithLot } from "./selectUserWithLot";

interface selectLotsProps {
  isAuthenticated: boolean;
  user: UserDataInterface | null;
}

type lotType = {
  id: number;
  name: string;
  postcode: string;
  state: string;
  city: string;
};

const Page: React.FC<selectLotsProps> = ({ user }) => {
  const [lots, setLots] = useState([]);
  const [selectedLot, setSelectedLot] = useState<number>();
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    try {
      const getLots = async (id: number) => {
        const data = await fetchLotsByUserId(id);
        setLots(data);
      };
      if (user) {
        getLots(user.id);
      } else {
        throw new Error("No user found");
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }, [user]);

  function handleSelect(lot: lotType) {
    setSelectedLot(lot.id);
    console.log(lot);
  }

  function confrimSelection(lotId: number) {
    console.log(lotId);
    try {
      const selectParkingLot = async () => {
        const data = await selectUserWithLot(lotId);
        console.log(data);
      };

      if (lotId) {
        selectParkingLot();
      } else {
        throw new Error("No any lot selected");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg  mt-[-10px]">
        <h2 className="text-2xl font-bold text-center mb-4">
          Select Parking Lot
        </h2>
        <ul className="space-y-3">
          {lots.map((lot: lotType) => (
            <li
              key={lot.id}
              className={`p-4 rounded-lg border ${
                selectedLot === lot.id
                  ? "border-blue-500 bg-blue-100"
                  : "border-gray-300"
              } hover:bg-blue-50 cursor-pointer transition`}
              onClick={() => handleSelect(lot)}
            >
              <div className="flex justify-between">
                <span className="text-lg font-semibold">{lot.name}</span>
                <span className="text-sm text-gray-500">{lot.city}</span>
              </div>
            </li>
          ))}
        </ul>
        {selectedLot && (
          <div className="mt-4 text-center">
            {/* <button
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
              onClick={() => alert(`Lot ${selectedLot} activated!`)}
            > */}
            <button
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
              onClick={() => confrimSelection(selectedLot)}
            >
              Confirm Selection
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default withAuth(Page);
