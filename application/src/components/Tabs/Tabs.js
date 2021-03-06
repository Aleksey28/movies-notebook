import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import CameraIcon from '@material-ui/icons/Camera';

import Movies from '../Movies/Movies';
import Directors from '../Directors/Directors';

import withHocs from './TabsHoc';

const TabContainer = ({ children, dir }) => (
  <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
    {children}
  </Typography>
);

const SimpleTabs = ({ classes, theme }) => {
  const [stateValue, setStateValue] = useState(0);

  const handleChange = (event, value) => { setStateValue(value); };
  const handleChangeIndex = (index) => { setStateValue(index); };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={stateValue} onChange={handleChange}>
          <Tab label="Movies" icon={<CameraIcon />} />
          <Tab label="Directors" icon={<MovieCreationIcon />} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={stateValue}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}><Movies /></TabContainer>
        <TabContainer dir={theme.direction}><Directors /></TabContainer>
      </SwipeableViews>
    </div>
  );
};
export default withHocs(SimpleTabs);
