import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'


const pages = [ ['Home',"/"] , ['Leaderboard',"/leaderboard"] ];

function ResponsiveAppBar() {

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            
          </Box>
          <DirectionsRunIcon />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PSU Sport
          </Typography>
          
        </Toolbar>
      </Container >
    </AppBar>
  );
}
export default ResponsiveAppBar;
