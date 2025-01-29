"use client";
import React, { useEffect, useState } from "react";
import { initialSectionForm, sectionProps } from "../type";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchAddSection } from "../fetchAddSection";
import { format } from "path";

export default function Page() {
  const [formData, setFormData] = useState<sectionProps>(initialSectionForm);
  const [status, setStatus] = useState({
    submitted: false,
    error: false,
    disable: false,
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const lotId: number = Number(searchParams.get("id"));

  useEffect(() => {
    if (lotId) {
      setFormData((prevState) => ({
        ...prevState,
        parking_lot_id: lotId,
      }));
    }
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((props) => ({ ...props, [name]: value }));
  }

  const formattedData = {
    ...formData,
    max_height: Number(formData.max_height),
    total_spots: Number(formData.total_spots),
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetchAddSection(formattedData);
      console.log(response);
      if (response?.status === 200) {
        setStatus({ submitted: true, error: false, disable: true });
        setFormData(initialSectionForm);
        router.push(`/parkingLots/dashboard`);
      }
    } catch (error) {
      console.log(error);
      setStatus({ submitted: false, error: true, disable: false });
    }
  };

  function goBack() {
    router.back();
  }

  return (
    <>
      <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-center p-5">
        Create Parking Seciton
      </h2>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <h2 className="text-base/7 font-semibold text-gray-900">
                  <label htmlFor="section_name">Parking section name</label>
                </h2>
                <div className="mt-2">
                  <input
                    placeholder="Name of parking lot"
                    value={formData?.section_name}
                    onChange={handleChange}
                    type="text"
                    name="section_name"
                    id="section_name"
                    autoComplete="name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="total_spots"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Total space
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Add total space"
                    type="text"
                    value={formData?.total_spots}
                    onChange={handleChange}
                    name="total_spots"
                    id="total_spots"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="state"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Max height
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Add maximum height"
                    name="max_height"
                    id="max_height"
                    value={formData?.max_height}
                    onChange={handleChange}
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="vehicle_allow_type"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Vehicle allow type
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Add vehicle allow type"
                    name="vehicle_allow_type"
                    id="vehicle_allow_type"
                    value={formData?.vehicle_allow_type || " "}
                    onChange={handleChange}
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6 pb-5">
              {/* <BusinessSuccessAlert msg="Parking lot created successfully" /> */}

              <button
                type="button"
                className="text-sm/6 font-semibold text-gray-900"
                onClick={goBack}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
