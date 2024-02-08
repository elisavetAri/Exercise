import { Grid, Box, Typography, CssBaseline, AppBar, Toolbar, IconButton, createTheme, ThemeProvider, Stack } from "@mui/material";
import xmlogo from "../assert/xmlogo.png";

import useMediaQuery from '@mui/material/useMediaQuery';
const Header = () => {

const navItems = ['XMHomepage', 'Support'];
const matches = useMediaQuery('(min-width:300px)');
function appBarLabel() {
  return (
   
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <img src={xmlogo} style={ {width: '139.21px',
height: '48.25px',
top: '23px',
left: '90px', display: 'grid'}}>
</img>
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {'XM Homepage'}
      </Typography>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {'Support'}
      </Typography>
    </Toolbar>
  );
}
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});
return (
  <Grid item xs={6} md={3}>
  <Stack spacing={2} sx={{ flexGrow: 1 }}>
  <ThemeProvider theme={darkTheme}>
    <AppBar position="static" color="primary">
      {appBarLabel()}
    </AppBar>
  </ThemeProvider>
</Stack>
</Grid>
)
}
export default Header;