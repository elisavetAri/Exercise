import React from 'react';
import './App.css';
import MainPage from './Pages/MainPage';
import { Box, Grid } from '@mui/material';
import background from './assert/background.png';

function App() {
 
  return (
    <div className="App">
<Grid style={{background:"#202E47",  backgroundImage:`url(${background})`}}>
 <MainPage></MainPage>
 </Grid> 
</div>
)
}

export default App;                     
