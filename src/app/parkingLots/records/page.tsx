"use client";
import { UserDataInterface } from "@/app/business/contexts/user/UserDataInterface";
import withLotAuth from "../hoc/withLotAuth";
import { columns, RecordType } from "@/app/business/records/columns";
import { DataTable } from "@/app/business/records/data-table";
import { fetchParkingRecords } from "@/app/business/records/fetchParkingRecords";

import { useEffect, useState } from "react";
import { ParkingLot } from "@/app/types/parkingLot";

async function getData(auth_id: number): Promise<RecordType[]> {
  try {
    const response = await fetchParkingRecords("lot", auth_id);
    return response;
  } catch (error) {
    console.error("Error fetching parking records:", error);
    throw error; // Re-throwing the error for higher-level handling
  }
}

const Page = ({
  lot,
  isAuthenticated,
}: {
  lot: ParkingLot;
  isAuthenticated: boolean;
}) => {
  const [data, setData] = useState<RecordType[]>([]);

  useEffect(() => {
    if (lot) {
      const fetchData = async () => {
        const result = await getData(lot.id);
        setData(result);
      };

      fetchData();
    }
  }, [lot, isAuthenticated]);

  const rows = data.map((row, index) => ({
    id: index + 1,
    ...row,
  }));

  return (
    <main className="container mx-auto px-4 py-6">
      <DataTable columns={columns} data={rows} />
    </main>
  );
};

export default withLotAuth(Page);
