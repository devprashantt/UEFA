import { DataGrid } from "@mui/x-data-grid";
import players from "../constants/player";

const columns = [
  {
    field: "id",
    headerName: "Serial",
    width: 100,
  },
  { field: "player_name", headerName: "Name", width: 130 },
  { field: "club", headerName: "Club", width: 130 },
  { field: "position", headerName: "Position", type: "number", width: 90 },
  { field: "assists", headerName: "Assists", type: "number", width: 90 },
  {
    field: "corner_taken",
    headerName: "Corner Taken",
    type: "number",
    width: 90,
  },
  { field: "offsides", headerName: "Offsides", type: "number", width: 90 },
  { field: "dribbles", headerName: "Dribbles", type: "number", width: 50 },
  {
    field: "match_played",
    headerName: "Match Played",
    type: "number",
    width: 50,
  },
];

export default function DataTable() {
  return (
    <DataGrid
      rows={players.map((row, index) => ({ id: index.toString(), ...row }))}
      columns={columns}
      getRowId={(row) => row.id}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  );
}
