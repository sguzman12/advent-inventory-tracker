import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import "./InventoryTable.css";

// Will auto update stock prices
// useEffect(() => {}, [data]);

const columns = [
  {
    headerClassName: "theme--header",
    field: "serialID",
    description: "Serial Number",
    headerName: "Serial Number",
    headerAlign: "center",
    align: "center",
    flex: 0.3,
  },
  {
    headerClassName: "theme--header",
    field: "equipLocation",
    description: "Equipment Location",
    headerName: "Equipment Location",
    headerAlign: "center",
    align: "center",
    flex: 0.3,
  },
  {
    headerClassName: "theme--header",
    field: "equipStatus",
    description: "Equipment Status",
    headerName: "Equipment Status",
    headerAlign: "center",
    align: "center",
    flex: 0.3,
  },
];

const data = [
  { serialID: 1, equipLocation: "ER", equipStatus: "In Storage" },
  { serialID: 2, equipLocation: "Central Supply", equipStatus: "Checked Out" },
  { serialID: 3, equipLocation: "Central Supply", equipStatus: "Checked Out" },
];

export default function InventoryTable() {
  return (
    <Box sx={{ display: "flex", width: 700, margin: "auto" }}>
      {data ? (
        <DataGrid
          autoHeight
          getRowId={(row) => row.serialID}
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          sx={{ textAlign: "center" }}
        />
      ) : (
        <p>Nothing found</p>
      )}
    </Box>
  );
}
