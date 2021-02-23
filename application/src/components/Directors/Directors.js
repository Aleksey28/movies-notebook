import React, { useState } from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import DirectorsTable from '../DirectorsTable/DirectorsTable';
import DirectorsForm from '../DirectorsForm/DirectorsForm';

import withHocs from './DirectorsHoc';

const Directors = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const [stateData, setStateData] = useState({
    id: null,
    name: '',
    age: 0,
  });

  const handleClickOpen = (data) => {
    setOpen(true);
    setStateData((prev) => ({
      ...prev, ...data,
    }));
  };

  const handleClose = () => {
    setOpen(false);
    setStateData({
      name: '',
      age: 0,
      id: null,
    });
  };

  const handleChange = (name) => ({ target }) => {
    setStateData((prev) => ({
      ...prev,
      [name]: target.value,
    }));
  };

  const { name, age, id } = stateData;
  return (
    <>
      <DirectorsForm
        handleChange={handleChange}
        selectedValue={{ name, age, id }}
        open={open}
        onClose={handleClose}
      />
      <div className={classes.wrapper}>
        <DirectorsTable onOpen={handleClickOpen} onClose={handleClose} />
        <Fab onClick={() => handleClickOpen(null)} color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </div>
    </>
  );
};

export default withHocs(Directors);
