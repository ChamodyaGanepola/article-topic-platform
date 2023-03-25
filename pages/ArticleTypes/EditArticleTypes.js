import Navbar from '../../components/Navbar';
import TablePaginationActions from '../../components/TablePaginationActions';
import TopTab from '../../components/TopTab';

import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';




function createData(id, name) {
  return { id, name };
}

const rows = [
  createData(1, 'Article Type 1'),
  createData(2, 'Article Type 2'),
  createData(3, 'Article Type 3'),
  createData(4, 'Article Type 4'),
  createData(5, 'Article Type 5'),
  createData(6, 'Article Type 6'),
  createData(7, 'Article Type 7'),
  createData(8, 'Article Type 8'),
]



function EditArticleTypes() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [articleType, setArticleType] = React.useState('');


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditButtonClick = (id) => {
    // Find the row with the given id
    const row = rows.find((r) => r.id === id);

    // Set the initial value of the text field
    setArticleType(row.name);

    // Open the dialog
    setOpenDialog(true);
  };

  return (
    <div >

      <Navbar />

 
      <TablePaginationActions/>
      <TopTab />
      <Box
        sx={{
          padding: '20px',
          marginTop: '2px',
          marginLeft: '300px',
          marginRight: '260px',
          backgroundColor: '#242444',
          color: 'white',
        }}
      >
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Edit Article Type</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Article Type"
              fullWidth
              value={articleType}
              onChange={(e) => setArticleType(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button onClick={() => {
              // Save the updated value of the article type and i have to code this further
              // and close the dialog
              setOpenDialog(false);
            }} color="primary">
             Update
            </Button>
          </DialogActions>
        </Dialog>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="custom pagination table">
            <TableHead >

              <TableRow sx={{ backgroundColor: '#b3b3b3' }}>
                <TableCell sx={{ fontSize: '1.1rem', color: 'white' }}>Article Type Id</TableCell>
                <TableCell sx={{ fontSize: '1.1rem', color: 'white' }}>Article Type</TableCell>
                <TableCell sx={{ fontSize: '1.1rem', color: 'white' }}>Edit</TableCell>
              </TableRow>

            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell style={{ width: 260 }} align="Left">
                    {row.name}
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={() => handleEditButtonClick(row.id)}>
                      Edit
                    </Button>
                  </TableCell>

                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );


}
export default EditArticleTypes;
