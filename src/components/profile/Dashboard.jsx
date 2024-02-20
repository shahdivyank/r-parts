"use client";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import Table from "./Table";
import { items } from "@/data/mock/Data";
import { columns } from "@/data/Columns";

const Dashboard = ({ current, empty }) => {
  const data = items;
  const [filters, setFilters] = useState([{ id: "name", value: "" }]);
  const [selected, setSelected] = useState([]);

  const {
    getHeaderGroups,
    getRowModel,
    getState,
    previousPage,
    getCanPreviousPage,
    nextPage,
    getCanNextPage,
    getPageCount,
  } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setSelected,
    enableRowSelection: true,
    state: {
      rowSelection: selected,
      columnFilters: filters,
    },
  });

  return (
    <div className="w-full p-3">
      <p className="font-medium text-2xl my-3 font-outfit">{current}</p>
      <Table
        setFilters={setFilters}
        getHeaderGroups={getHeaderGroups}
        getRowModel={getRowModel}
        getState={getState}
        previousPage={previousPage}
        getCanPreviousPage={getCanPreviousPage}
        nextPage={nextPage}
        getCanNextPage={getCanNextPage}
        getPageCount={getPageCount}
        empty={empty}
        totalNumItems={data.length}
      />
    </div>
  );
};

export default Dashboard;
