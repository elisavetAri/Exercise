import { Box, Button, Card, CardContent, Grid, Paper, Typography, colors } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import React, { useEffect, useState } from 'react';
import CardContentPage from './CardContentPage';
import SignUp from './SignUp';
import Header from './Header';
import PageContent from './PageContent';

const MainPage = () =>{
    return(
      <Grid item xs={6} md={3}>
        <Grid item xs={6} md={3}>
        <Header></Header>
        </Grid>
        <Grid item xs={6} md={3}>
    <PageContent></PageContent>
    </Grid>
  
      <Grid>
     {/* <SignUp></SignUp> */}
     </Grid>
    </Grid>
)
}
export default MainPage