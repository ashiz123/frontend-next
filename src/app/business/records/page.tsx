"use client";
import withAuth from "@/app/hoc/withAuth";
import { columns, RecordType } from "./columns";
import { DataTable } from "./data-table";
import { fetchParkingRecords } from "./fetchParkingRecords";
import { UserDataInterface } from "../contexts/user/UserDataInterface";
import { useEffect, useState } from "react";

async function getData(auth_id: number): Promise<RecordType[]> {
  try {
    const response = await fetchParkingRecords(auth_id);
    return response;
  } catch (error) {
    console.error("Error fetching parking records:", error);
    throw error; // Re-throwing the error for higher-level handling
  }
}

interface WithAuthProps {
  user: UserDataInterface | null;
}

function Page({ user }: WithAuthProps) {
  const [data, setData] = useState<RecordType[]>([]);

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const result = await getData(user.id);
        setData(result);
      };

      fetchData();
    }
  }, [user]);

  const rows = data.map((row, index) => ({
    id: index + 1,
    ...row,
  }));

  return (
    <main className="container mx-auto px-4 py-6">
      <DataTable columns={columns} data={rows} />
    </main>
  );
}

export default withAuth(Page);
