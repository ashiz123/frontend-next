"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// status:
// | "parking"
// | "reserved"
// | "paid"
// | "Exempt"
// | "failed"
// | "free"
// | "employee"
// | "cancelled"
// | "violation";
export type RecordType = {
  reservation_id: number;
  vehicle_reg: string;
  vehicle_type: string;
  vehicle_year: number;
  vehicle_make: string;
  status: number;
  lot_id: number;
  lot_name: string;
  section_id: number;
  section_name: string;
  entry_time: string;
  exit_time: string;
  created_at: string;
  updated_at: string;
};

export const columns: ColumnDef<RecordType>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "vehicle_reg",
    header: "Registeration",
  },
  {
    accessorKey: "vehicle_type",
    header: "Type",
  },

  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ getValue }) => {
      const status = getValue() as number;
      console.log(status);
      const statusMap: { [key: number]: { text: string; color: string } } = {
        0: { text: "Pending", color: "text-orange-500" },
        1: { text: "Approved", color: "text- green-500" },
        2: { text: "Violated", color: "text-red-500" },
        3: { text: "Void", color: "text-purple-500" },
      };

      const statusInfo = statusMap[status] || {
        text: "Unknown Lot",
        color: "text-gray-500",
      };
      return <span className={statusInfo.color}>{statusInfo.text}</span>;
    },
  },
  {
    accessorKey: "lot_name",
    header: "Lot",
  },
  {
    accessorKey: "section_name",
    header: "Section",
  },
  {
    accessorKey: "entry_time",
    header: "Entry_time",
  },
  {
    accessorKey: "exit_time",
    header: "Exit_time",
  },
];
