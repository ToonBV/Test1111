import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { Toolbar } from '@mui/material';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Toolbar disableGutters>
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon /> } component={Link} to="/"/>
        <BottomNavigationAction label="Leaderboard" icon={<FormatListNumberedIcon />} component={Link} to="/leaderboard"/>
      </BottomNavigation>
    </Box>
    </Toolbar>
  );
}
