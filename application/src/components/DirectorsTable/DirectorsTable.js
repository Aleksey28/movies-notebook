import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

import DirectorsDialog from '../DirectorsDialog/DirectorsDialog';

import withHocs from './DirectorsTableHoc';

const DirectorsTable = ({ onOpen, classes, data }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [stateData, setStateData] = useState({});

  const handleDialogOpen = () => { setOpenDialog(true); };
  const handleDialogClose = () => { setOpenDialog(false); };

  const handleClick = ({ currentTarget }, newData) => {
    setAnchorEl(currentTarget);
    setStateData(newData);
  };

  const handleClose = () => { setAnchorEl(null); };

  const handleEdit = () => {
    onOpen(stateData);
    handleClose();
  };

  const handleDelete = () => {
    handleDialogOpen();
    handleClose();
  };

  const { directors = [] } = data;

  return (
    <>
      <DirectorsDialog open={openDialog} handleClose={handleDialogClose} id={stateData.id} />
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell>Movies</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {directors.map((director) => (
              <TableRow key={director.id}>
                <TableCell component="th" scope="row">{director.name}</TableCell>
                <TableCell align="right">{director.age}</TableCell>
                <TableCell>
                  {director.movies.map((movie, key) => (
                    <div key={movie.name}>
                      {`${key + 1}. `}
                      {movie.name}
                    </div>
                  ))}
                </TableCell>
                <TableCell align="right">
                  <>
                    <IconButton color="inherit" onClick={(e) => handleClick(e, director)}>
                      <MoreIcon />
                    </IconButton>
                    <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                      <MenuItem onClick={() => handleEdit(director)}>
                        <CreateIcon />
                        {' '}
                        Edit
                      </MenuItem>
                      <MenuItem onClick={handleDelete}>
                        <DeleteIcon />
                        {' '}
                        Delete
                      </MenuItem>
                    </Menu>
                  </>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default withHocs(DirectorsTable);
