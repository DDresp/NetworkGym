import { Box } from "@chakra-ui/react";
import { useState } from "react";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import EditableCell from "./EditableCell";

function setupTableColumns(contactData) {
  if (contactData.length === 0) {
    return [];
  }

  const columns = Object.keys(contactData[0]).map((key, index) => {
    return {
      accessorKey: `${key}`,
      header: `${key}`,
      cell: EditableCell,
    };
  });

  return columns;
}

const TaskTable = ({ contactData, onUpdateData }) => {
  let data = contactData;
  const columns = setupTableColumns(data);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    meta: {
      updateData: onUpdateData,
    },
  });

  return (
    <Box>
      <Box className="table" w={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Box className="tr" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Box className="th" key={header.id} w={header.getSize()}>
                {header.column.columnDef.header}

                <Box
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`resizer ${
                    header.column.getIsResizing() ? "isResizing" : " "
                  }`}
                ></Box>
              </Box>
            ))}
          </Box>
        ))}

        {table.getRowModel().rows.map((row) => (
          <Box className="tr" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Box className="td" w={cell.column.getSize()} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default TaskTable;
