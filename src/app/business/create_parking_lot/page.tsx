"use client";
import { useUserContext } from "../contexts/user/userContext";
import withAuth from "@/app/hoc/withAuth";
import { ChangeEvent, useState } from "react";
import {
  FormError,
  ParkingLotFormData,
  InitialCreateParkingForm,
} from "./type";
import { addParkingLot } from "./addParkingLot";
import BusinessSuccessAlert from "../components/BusinessSuccessAlert";
import { useRouter } from "next/navigation";

const Page = () => {
  const [formData, setFormData] = useState<ParkingLotFormData>(
    InitialCreateParkingForm
  );
  const { user } = useUserContext();
  const [validationError, setValidationError] = useState<FormError | null>(
    null
  );
  const router = useRouter();

  const [status, setStatus] = useState({
    submitted: false,
    error: false,
    disable: false,
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type, value } = event.target;

    const newValue = type === "checkbox" ? event.target.checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (user) {
        const response = await addParkingLot(user.id, formData);
        if (response?.status === 200) {
          setStatus({ submitted: true, error: false, disable: true });
          setFormData(InitialCreateParkingForm);
          router.push("/business/dashboard");
        } else {
          setStatus({ submitted: false, error: true, disable: false });
        }
      }
    } catch (error) {
      console.log(error);
      setStatus({ submitted: false, error: true, disable: false });
    }
  };

  return (
    <>
      <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-center p-5">
        Create Parking Lot
      </h2>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <h2 className="text-base/7 font-semibold text-gray-900">
                  <label htmlFor="name">Parking lot name</label>
                </h2>
                <div className="mt-2">
                  <input
                    placeholder="Name of parking lot"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Address Detail
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="postcode"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Post Code
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Post code"
                    type="text"
                    value={formData.postcode}
                    onChange={handleChange}
                    name="postcode"
                    id="postcode"
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
                  State
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="State"
                    name="state"
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    id="city"
                    name="city"
                    placeholder="City"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="longitude"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Longitude
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="longitude"
                    id="longitude"
                    placeholder="Longitude"
                    value={
                      formData.longitude !== null ? formData.longitude : ""
                    }
                    onChange={handleChange}
                    autoComplete="address-level2"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="latitude"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Latitude
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="latitude"
                    name="latitude"
                    placeholder="Latitude"
                    value={formData.latitude !== null ? formData.latitude : ""}
                    onChange={handleChange}
                    autoComplete="address-level1"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Address Ammenties
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="security_features"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Security Features
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="security_features"
                    placeholder="Security Features"
                    onChange={handleChange}
                    value={formData.security_features}
                    id="security_features"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="surface_type"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Surface Type
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="surface_type"
                    name="surface_types"
                    onChange={handleChange}
                    value={formData.surface_types}
                    autoComplete="country-name"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                    required
                  >
                    <option value="" disabled>
                      Select surface type
                    </option>
                    <option value="grass">Grass</option>
                    <option value="Concrete">Concrete</option>
                    <option value="Asphalt">Asphalt</option>
                    <option value="Gravel">Gravel</option>
                  </select>
                  <svg
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
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
                    id="vehicle_allow_type"
                    name="vehicle_allow_type"
                    placeholder="Add the vehicle allowed"
                    onChange={handleChange}
                    value={formData.vehicle_allow_type}
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Address Capability
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="total_spots"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Total spaces
                </label>
                <div className="mt-2">
                  <input
                    id="total_spots"
                    name="total_spots"
                    onChange={handleChange}
                    value={formData.total_spots}
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                    placeholder="Total spaces"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="max_height"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Max height
                </label>
                <div className="mt-2">
                  <input
                    id="max_height"
                    name="max_height"
                    onChange={handleChange}
                    value={formData.max_height}
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                    required
                    placeholder="Maximum height allowed"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-6 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      id="grouped"
                      aria-describedby="offers-description"
                      name="grouped"
                      onChange={handleChange}
                      checked={formData.grouped}
                      type="checkbox"
                      className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-teal-600 checked:bg-teal-600 indeterminate:border-teal-600 indeterminate:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />
                    <svg
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        className="opacity-0 group-has-[:checked]:opacity-100"
                        d="M3 8L6 11L11 3.5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                        d="M3 7H11"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-sm/6">
                  <label
                    htmlFor="grouped"
                    className="font-medium text-gray-900"
                  >
                    Grouped
                  </label>
                  {/* <p id="offers-description" className="text-gray-500">Write something to make it clear.</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6 pb-5">
          {status.submitted && (
            <BusinessSuccessAlert msg="Parking lot created successfully" />
          )}
          {status.error && <p>Oops! Something went wrong. Please try again.</p>}

          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
            disabled={status.disable}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default withAuth(Page);
