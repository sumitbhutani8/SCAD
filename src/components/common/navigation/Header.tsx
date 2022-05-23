import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppLogo from './../../../assets/deloitte-2.svg';


const ResponsiveAppBar = () => {

  return (
    // <AppBar style={{ background: '#1C304A' }}>
    <AppBar style={{ background: '#000' , height: '70px'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
              <img src={AppLogo} alt="React Logo" width={100} />
          </Typography>
          <Typography
            noWrap
            component="div" style={{ fontSize: '1.3rem', fontWeight: '100' }}
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
           Savanah College of Art & Design
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;