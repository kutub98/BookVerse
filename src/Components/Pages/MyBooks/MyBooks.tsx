/* eslint-disable @typescript-eslint/no-explicit-any */

import { DataGrid, GridAddIcon, GridDeleteIcon } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'Sl', width: 70 },
  { field: 'AuthorName', headerName: 'Author Name', width: 130 },
  { field: 'Title', headerName: 'Title', width: 130 },
  {
    field: 'Genre',
    headerName: 'Genre',
    type: 'string',
    width: 130,
  },
  {
    field: 'PublicationDate',
    headerName: 'Publication Date',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params:any) =>
      `${params.row.AuthorName || ''} ${params.row.Title || ''}`,
  },
  {
    field: 'Action',
    headerName: 'Action',
    type: 'number',
    width: 130,
    renderCell: (params: { row: { id: any; }; }) => (
      <div>
        <IconButton aria-label="delete" size="large" onClick={() => handleDelete(params.row.id)}>
          <GridDeleteIcon />
        </IconButton>
        <IconButton aria-label="add" size="large" onClick={() => handleAddMore(params.row.id)}>
          <GridAddIcon />
        </IconButton>
      </div>
    ),
  },
];

const rows = [
  { id: 1, Title: 'Snow', AuthorName: 'Jon', Genre: 35 , style:{textAlign: "center", background: "red"}},
  { id: 2, Title: 'Lannister', AuthorName: 'Cersei', Genre: 42 },
  { id: 3, Title: 'Lannister', AuthorName: 'Jaime', Genre: 45 },
  { id: 4, Title: 'Stark', AuthorName: 'Arya', Genre: 16 },
  { id: 5, Title: 'Targaryen', AuthorName: 'Daenerys', Genre: 66 },
  { id: 6, Title: 'Romance', AuthorName: "KUTUB", Genre: 150 },
  { id: 7, Title: 'Clifford', AuthorName: 'Ferrara', Genre: 44 },
  { id: 8, Title: 'Frances', AuthorName: 'Rossini', Genre: 36 },
  { id: 9, Title: 'Roxie', AuthorName: 'Harvey', Genre: 65 },
  { id: 10, Title: 'Snow', AuthorName: 'Jon', Genre: 35 },
  { id: 11, Title: 'Lannister', AuthorName: 'Cersei', Genre: 42 },
  { id: 12, Title: 'Lannister', AuthorName: 'Jaime', Genre: 45 },
  { id: 13, Title: 'Stark', AuthorName: 'Arya', Genre: 16 },
  { id: 14, Title: 'Targaryen', AuthorName: 'Daenerys', Genre: 66 },
  { id: 15, Title: 'Melisandre', AuthorName: null, Genre: 150 },
  { id: 16, Title: 'Clifford', AuthorName: 'Ferrara', Genre: 44 },
  { id: 17, Title: 'Frances', AuthorName: 'Rossini', Genre: 36 },
  { id: 18, Title: 'Roxie', AuthorName: 'Harvey', Genre: 65 },
];
const handleDelete = (id: any) => {
  // Add your delete logic here
  console.log(`Deleting row with id: ${id}`);
};

const handleAddMore = (id: any) => {
  // Add your add more logic here
  console.log(`Adding more data after row with id: ${id}`);
};

export default function MyBooks() {
  return (
    <div style={{ height: 450, width: '80%', margin:"auto", display: "flex", justifyContent: "center", alignItems: 'center', textAlign: "center"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20, 25, 30]}
        checkboxSelection
      />
    </div>
  );
}
