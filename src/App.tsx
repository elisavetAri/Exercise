import React from 'react';
import './App.css';
import MainPage from './Pages/MainPage';
import { Box, Grid, Typography } from '@mui/material';
import background from './assert/background.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: '#9400D3',
  //     },
  
  //     secondary: {
  //       main: '#FFA500',
  //     },
  //   },
  // });
  return (
    <div className="App">
<Grid xs={6} md={3}>
{/* <ThemeProvider theme={theme}> */}
 <MainPage></MainPage>
 {/* </ThemeProvider> */}
 </Grid> 
</div>
)
}

export default App;                     
