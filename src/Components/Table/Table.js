// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'Id', width: 70 },
//   { field: 'firstName', headerName: 'Name', width: 130 },
//   { field: 'lastName', headerName: 'Description', width: 130 },
  
// ];

// export default function DataTable(props) {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={props.products}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//       />
//     </div>
//   );
// }

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'description', headerName: 'Description', width: 190 },
];

export default function DataTable(props) {
  return (
    <div style={{ height: 400, width: '80%', margin:'0 auto' }}>
      <DataGrid
        rows={props.products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
