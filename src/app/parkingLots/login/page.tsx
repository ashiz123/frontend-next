"use client";
import React, { useState } from "react";
import fetchLotLogin from "./fetchLotLogin";
import { useRouter } from "next/navigation";

type loginType = {
  lot_name: string;
  lot_pin: string;
};

const initialState: loginType = {
  lot_name: "",
  lot_pin: "",
};

export default function Login() {
  const [formData, setFormData] = useState<loginType>(initialState);
  const router = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = await fetchLotLogin(formData);
      localStorage.setItem("lot_auth", data.token);
      setFormData(initialState);
      router.push("/parkingLots/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-3xl font-bold text-gray-900 m-4">
        Parking Lot Login
      </h1>

      <div className="mt-6 w-full max-w-lg">
        <form id="lotLoginForm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="lot_name"
              className="block text-sm font-medium text-gray-700"
            >
              Lot Name
            </label>
            <input
              type="text"
              id="lot_name"
              name="lot_name"
              onChange={handleChange}
              value={formData.lot_name}
              required
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lot_pin"
              className="block text-sm font-medium text-gray-700"
            >
              Security Pin
            </label>
            <input
              type="password"
              id="lot_pin"
              name="lot_pin"
              onChange={handleChange}
              value={formData.lot_pin}
              required
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
