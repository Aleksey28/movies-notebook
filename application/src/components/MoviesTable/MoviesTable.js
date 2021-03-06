import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

import MoviesDialog from '../MoviesDialog/MoviesDialog';

import withHocs from './MoviesTableHoc';
import MoviesSearch from '../MoviesSearch/MoviesSearch';

const MoviesTable = ({ onOpen, classes, data }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [stateData, setStateData] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      data.fetchMore({
        variables: { name: searchText },
        updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult,
      });
    }
  };

  const handleDialogClose = () => { setOpenDialog(false); };
  const handleDialogOpen = () => { setOpenDialog(true); };

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

  const { movies = [] } = data;

  return (
    <>
      <Paper>
        <MoviesSearch
          searchText={searchText}
          handleChangeSearchText={handleChangeSearchText}
          handleSearch={handleSearch}
        />
      </Paper>
      <MoviesDialog open={openDialog} handleClose={handleDialogClose} id={stateData.id} />
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell align="right">Rate</TableCell>
              <TableCell>Director</TableCell>
              <TableCell>Watched</TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie) => (
              <TableRow key={movie.id}>
                <TableCell component="th" scope="row">{movie.name}</TableCell>
                <TableCell>{movie.genre}</TableCell>
                <TableCell align="right">{movie.rate}</TableCell>
                <TableCell>{movie.director ? movie.director.name : ''}</TableCell>
                <TableCell>
                  <Checkbox checked={movie.watched} disabled />
                </TableCell>
                <TableCell align="right">
                  <>
                    <IconButton color="inherit" onClick={(e) => handleClick(e, movie)}>
                      <MoreIcon />
                    </IconButton>
                    <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                      <MenuItem onClick={handleEdit}>
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

export default withHocs(MoviesTable);
