import React, { useState } from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import MoviesTable from '../MoviesTable/MoviesTable';
import MoviesForm from '../MoviesForm/MoviesForm';

import withHocs from './MoviesHoc';

const Movies = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const [stateData, setStateData] = useState({
    id: null,
    name: '',
    genre: '',
    watched: false,
    rate: 0,
    directorId: '',
  });

  const handleClickOpen = (data) => {
    setOpen(true);
    setStateData({
      ...data,
      directorId: data && data.director ? data.director.id : '',
    });
  };

  const handleClose = () => {
    setOpen(false);
    setStateData({
      name: '',
      genre: '',
      watched: false,
      rate: 0,
      directorId: '',
      id: null,
    });
  };

  const handleSelectChange = ({ target }) => {
    setStateData((prev) => ({
      [target.name]: target.value,
      ...prev,
    }));
  };

  const handleChange = (name) => ({ target }) => {
    setStateData((prev) => ({
      [name]: target.value,
      ...prev,
    }));
  };

  const handleCheckboxChange = (name) => ({ target }) => {
    setStateData((prev) => ({
      [name]: target.checked,
      ...prev,
    }));
  };

  const {
    id, name, genre, watched, rate, directorId,
  } = stateData;

  return (
    <>
      <MoviesForm
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        handleCheckboxChange={handleCheckboxChange}
        selectedValue={{
          id, name, genre, watched, rate, directorId,
        }}
        open={open}
        onClose={handleClose}
      />
      <div className={classes.wrapper}>
        <MoviesTable onOpen={handleClickOpen} onClose={handleClose} />
        <Fab onClick={() => handleClickOpen()} color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </div>
    </>
  );
};

export default withHocs(Movies);
