import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";


export default function DataTable() {
  const rows = useSelector((state) => state.selectedTableData.products);
  const columns = [
    { field: "id", headerName: "S.No", width: 90, sortable: false },
    { field: "title", headerName: "Title", width: 310, sortable: false },
    { field: "price", headerName: "Price ($)", width: 100, sortable: false },
    {
      field: "rating.rate",
      headerName: "Rate",
      width: 100,
      sortable: false,
      valueGetter: (params) => params.row.rating.rate,
    },
  ];

  return (
   

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
  );
}
