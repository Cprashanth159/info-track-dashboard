import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateTableData } from "../../redux/actions/tableAction";
import { setSelectedTableData } from "../../redux/actions/selctedTableAction";
import axios from "axios";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useDebounce } from "use-debounce";
import Grid from "@mui/material/Grid";

export default function DataTable() {
  const dispatch = useDispatch();
  let rows = useSelector((state) => state.tableData.products);
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue] = useDebounce(searchValue, 500);
  let selectedTableRows = useSelector(
    (state) => state.selectedTableData.products
  );

  const handleDeleteRow = (id) => {
    console.log("Deleted row with ID:", id);
    const updatedRows = rows.filter((row) => row.id !== id);
    dispatch(updateTableData(updatedRows));
  };

  const handleSelectedRow = (id) => {
    console.log("Selected row with ID:", id);
    const selectedRow = rows.filter((row) => row.id === id);
    let found = false;

    for (const obj of selectedTableRows) {
      if (obj.id === selectedRow[0].id) {
        found = true;
        break;
      }
    }
    if (!found) {
      const updatedRows = [...selectedTableRows, selectedRow[0]];
      console.log(updatedRows);
      dispatch(setSelectedTableData(updatedRows));
    }
  };

  const columns = [
    { field: "id", headerName: "S.No", width: 90, sortable: false },
    { field: "title", headerName: "Title", width: 420, sortable: false },
    { field: "price", headerName: "Price ($)", width: 100, sortable: false },
    { field: "category", headerName: "Category", width: 150, sortable: false },
    {
      field: "rating.rate",
      headerName: "Rate",
      width: 100,
      sortable: false,
      valueGetter: (params) => params.row.rating.rate,
    },
    {
      field: "select",
      headerName: "Select",
      width: 140,
      sortable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => handleSelectedRow(params.row.id)}
        >
          Select
        </Button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 140,
      sortable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => handleDeleteRow(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const fetchTableData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      dispatch(updateTableData(response.data));
    } catch (error) {
      console.error("Error fetching table data:", error);
    }
  };

  rows = React.useMemo(() => {
    return rows.filter((row) => {
      return Object.values(row).some((value) =>
        String(value).toLowerCase().includes(debouncedSearchValue.toLowerCase())
      );
    });
  }, [rows, debouncedSearchValue]);

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <>
      <div>
        {" "}
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Records
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Search"
              value={searchValue}
              onChange={handleSearchInputChange}
              variant="outlined"
              style={{ "float":"right","marginBottom":'12px'}}
              size="small"
            />
          </Grid>
        </Grid>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          filterModel={{
            items: [
              {
                columnField: "title",
                operatorValue: "contains",
                value: debouncedSearchValue,
              },
            ],
          }}
        />
      </div>
    </>
  );
}