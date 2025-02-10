import React, { useMemo, useState } from "react";
import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender } from "@tanstack/react-table";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  RadarController,
  PieController,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// ✅ Register Chart.js Components
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  RadarController,
  PieController,
  Title,
  Tooltip,
  Legend
);

const TeamStatsPage = () => {
  const [selectedRowId, setSelectedRowId] = useState(null);

  // ✅ Example Team Stats
  const teamStats = {
    name: "Team Totals",
    gp: 15,
    pa: 450,
    ab: 400,
    h: 200,
    "1B": 120,
    "2B": 50,
    "3B": 10,
    hr: 20,
    r: 180,
    rbi: 150,
    bb: 50,
    k: 40,
    avg: 0.500,
    obp: 0.560,
    slg: 0.860,
    ops: 1.420,
  };

  // ✅ 15 Example Players
  const playerData = useMemo(() => [
    { name: "John Smith", gp: 15, pa: 45, ab: 40, h: 20, "1B": 10, "2B": 5, "3B": 2, hr: 3, r: 18, rbi: 12, bb: 5, k: 4, avg: 0.500, obp: 0.550, slg: 0.850, ops: 1.400 },
    { name: "Mike Johnson", gp: 15, pa: 50, ab: 44, h: 22, "1B": 12, "2B": 4, "3B": 1, hr: 5, r: 20, rbi: 15, bb: 6, k: 3, avg: 0.500, obp: 0.560, slg: 0.860, ops: 1.420 },
    { name: "Chris Davis", gp: 15, pa: 38, ab: 35, h: 17, "1B": 9, "2B": 3, "3B": 1, hr: 4, r: 14, rbi: 10, bb: 3, k: 5, avg: 0.486, obp: 0.530, slg: 0.810, ops: 1.340 },
    { name: "Player 4", gp: 15, pa: 45, ab: 40, h: 20, "1B": 10, "2B": 5, "3B": 2, hr: 3, r: 18, rbi: 12, bb: 5, k: 4, avg: 0.500, obp: 0.550, slg: 0.850, ops: 1.400 },
    { name: "Player 5", gp: 15, pa: 50, ab: 44, h: 22, "1B": 12, "2B": 4, "3B": 1, hr: 5, r: 20, rbi: 15, bb: 6, k: 3, avg: 0.500, obp: 0.560, slg: 0.860, ops: 1.420 },
    { name: "Player 6", gp: 15, pa: 38, ab: 35, h: 17, "1B": 9, "2B": 3, "3B": 1, hr: 4, r: 14, rbi: 10, bb: 3, k: 5, avg: 0.486, obp: 0.530, slg: 0.810, ops: 1.340 },
    { name: "Player 7", gp: 15, pa: 45, ab: 40, h: 20, "1B": 10, "2B": 5, "3B": 2, hr: 3, r: 18, rbi: 12, bb: 5, k: 4, avg: 0.500, obp: 0.550, slg: 0.850, ops: 1.400 },
    { name: "Player 8", gp: 15, pa: 50, ab: 44, h: 22, "1B": 12, "2B": 4, "3B": 1, hr: 5, r: 20, rbi: 15, bb: 6, k: 3, avg: 0.500, obp: 0.560, slg: 0.860, ops: 1.420 },
    { name: "Player 9", gp: 15, pa: 38, ab: 35, h: 17, "1B": 9, "2B": 3, "3B": 1, hr: 4, r: 14, rbi: 10, bb: 3, k: 5, avg: 0.486, obp: 0.530, slg: 0.810, ops: 1.340 },
    { name: "Player 10", gp: 15, pa: 45, ab: 40, h: 20, "1B": 10, "2B": 5, "3B": 2, hr: 3, r: 18, rbi: 12, bb: 5, k: 4, avg: 0.500, obp: 0.550, slg: 0.850, ops: 1.400 },
    { name: "Player 11", gp: 15, pa: 50, ab: 44, h: 22, "1B": 12, "2B": 4, "3B": 1, hr: 5, r: 20, rbi: 15, bb: 6, k: 3, avg: 0.500, obp: 0.560, slg: 0.860, ops: 1.420 },
    { name: "Player 12", gp: 15, pa: 38, ab: 35, h: 17, "1B": 9, "2B": 3, "3B": 1, hr: 4, r: 14, rbi: 10, bb: 3, k: 5, avg: 0.486, obp: 0.530, slg: 0.810, ops: 1.340 },
    { name: "Player 13", gp: 15, pa: 45, ab: 40, h: 20, "1B": 10, "2B": 5, "3B": 2, hr: 3, r: 18, rbi: 12, bb: 5, k: 4, avg: 0.500, obp: 0.550, slg: 0.850, ops: 1.400 },
    { name: "Player 14", gp: 15, pa: 50, ab: 44, h: 22, "1B": 12, "2B": 4, "3B": 1, hr: 5, r: 20, rbi: 15, bb: 6, k: 3, avg: 0.500, obp: 0.560, slg: 0.860, ops: 1.420 },
    { name: "Player 15", gp: 15, pa: 38, ab: 35, h: 17, "1B": 9, "2B": 3, "3B": 1, hr: 4, r: 14, rbi: 10, bb: 3, k: 5, avg: 0.486, obp: 0.530, slg: 0.810, ops: 1.340 },
  ], []);

  const columns = useMemo(
    () => [
      { accessorKey: "name", header: "Player" },
      { accessorKey: "gp", header: "GP" },
      { accessorKey: "pa", header: "PA" },
      { accessorKey: "ab", header: "AB" },
      { accessorKey: "h", header: "Hits" },
      { accessorKey: "1B", header: "1B" },
      { accessorKey: "2B", header: "2B" },
      { accessorKey: "3B", header: "3B" },
      { accessorKey: "hr", header: "HR" },
      { accessorKey: "rbi", header: "RBIs" },
      { accessorKey: "r", header: "Runs" },
      { accessorKey: "bb", header: "BB" },
      { accessorKey: "k", header: "K" },
      { accessorKey: "avg", header: "BA" },
      { accessorKey: "obp", header: "OBP" },
      { accessorKey: "slg", header: "SLG" },
      { accessorKey: "ops", header: "OPS" },
    ],
    []
  );

  const table = useReactTable({
    data: playerData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const handleRowClick = (rowId) => {
    setSelectedRowId((prevSelectedRowId) => (prevSelectedRowId === rowId ? null : rowId));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#7c866b] text-[#dbe0da]">
      <main className="flex-grow p-8">
        {/* ✅ Team Stats & Record */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-[#545e46] text-[#dbe0da] p-4 rounded-lg shadow-md text-center col-span-1">
            <h2 className="text-xl font-bold mb-4">Team Record</h2>
            <table className="min-w-full bg-[#545e46] text-[#dbe0da]">
              <thead>
                <tr>
                  <th className="border p-2">Wins</th>
                  <th className="border p-2">Losses</th>
                  <th className="border p-2">Ties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">10</td>
                  <td className="border p-2">5</td>
                  <td className="border p-2">2</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#545e46] text-[#dbe0da] p-4 rounded-lg shadow-md text-center col-span-3">
            <h2 className="text-xl font-bold mb-4">Team Stats</h2>
            <table className="min-w-full bg-[#545e46] text-[#dbe0da]">
              <thead>
                <tr>
                  {columns.map(column => (
                    <th key={column.accessorKey} className="border p-2">
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {columns.map(column => (
                    <td key={column.accessorKey} className="border p-2">
                      {teamStats[column.accessorKey]}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ✅ Player Stats Table */}
        <div className="overflow-auto h-[500px] mt-6 bg-[#545e46] p-4 rounded-lg shadow-md text-center text-[#dbe0da] player-stats-table">
          <h2 className="text-xl font-bold mb-4">Player Stats</h2>
          <table className="min-w-full bg-[#545e46] text-[#dbe0da]">
            <thead>
              <tr>
                {table.getHeaderGroups().map(headerGroup => (
                  <React.Fragment key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th
                        key={header.id}
                        className="border p-2 cursor-pointer"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getIsSorted() ? (header.column.getIsSorted() === "desc" ? " 🔽" : " 🔼") : ""}
                      </th>
                    ))}
                  </React.Fragment>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr
                  key={row.id}
                  className={`border ${selectedRowId === row.id ? 'bg-[#7c866b]' : ''}`}
                  onClick={() => handleRowClick(row.id)}
                >
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="border p-2">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default TeamStatsPage;