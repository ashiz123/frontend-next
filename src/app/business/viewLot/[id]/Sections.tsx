import React, { useEffect, useState } from "react";
import { fetchSectionsByLotId } from "./fetchSectionsByLotId";
import { useRouter } from "next/navigation";

interface sectionPropInterface {
  lotId: number;
}

interface Section {
  id: number;
  section_name: string;
  total_spots: number;
  occupied_spaces: number;
  security_features: string;
  vehicle_allow_type: string;
}

const Sections: React.FC<sectionPropInterface> = ({ lotId }) => {
  const [sections, setSections] = useState<Section[]>([]);
  const router = useRouter();
  useEffect(() => {
    const getSections = async (lotId: number) => {
      const data = await fetchSectionsByLotId(lotId);
      console.log(data);
      setSections(data);
    };

    getSections(lotId);
  }, [lotId]);

  function addParkingSection() {
    router.push(`/business/parking_sections/create?id=${lotId}`);
  }

  return (
    <section className="space-y-6 mt-8">
      <h2 className="text-xl font-semibold text-gray-700">Parking Sections</h2>
      <div className="flex p-4 justify-between shadow-md rounded-lg  bg-gray-100">
        <div>
          <table>
            <thead>
              <tr>
                <th className="py-2 px-4 text-left">Section Name</th>
                <th className="py-2 px-4 text-left">Total Spaces</th>
                <th className="py-2 px-4 text-left">Occupied</th>
                <th className="py-2 px-4 text-left">Vehicle Allow</th>

                {/* <th className="py-2 px-4 text-left">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {sections.length > 0 ? (
                sections.map((section: Section) => (
                  <tr
                    key={section.id}
                    className="hover:bg-gray-200 cursor-pointer"
                  >
                    <td className="py-2 px-4">{section.section_name}</td>
                    <td className="py-2 px-4">{section.total_spots}</td>
                    <td className="py-2 px-4">{section.occupied_spaces}</td>
                    <td className="py-2 px-4 text-green-500">
                      {section.vehicle_allow_type}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-collapse">
                  <td
                    colSpan={4}
                    className="py-2 px-4 text-center border-collapse"
                  >
                    This lot does not have any sections.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <button
        onClick={addParkingSection}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Add Parking Section
      </button>
    </section>
  );
};

export default Sections;
