import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable';
import './users.scss';
import { userRows } from '../../data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'avatar',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || '/noavatar.png'} alt='' />;
    },
  },

  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 200,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'string',
    width: 200,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 200,
  },

  {
    field: 'verified',
    headerName: 'Verified',
    type: 'boolean',
  },
];

const Users = () => {
  return (
    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <DataTable columns={columns} slug={`users`} rows={userRows} />
    </div>
  );
};

export default Users;
