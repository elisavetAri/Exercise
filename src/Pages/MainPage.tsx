import { Box, Button, Card, CardContent, Grid, Typography, colors } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import React, { useEffect, useState } from 'react';
import CardContentPage from './CardContentPage';
import SignUp from './SignUp';
import Header from './Header';


const MainPage = () =>{
//   const [data, setData] = useState<Data>();
//   const getData = () => {
//     fetch('https://api.coinlore.net/api/tickers/').then(res => res.json())
//   .then(data => setData(data))
// }
// useEffect(() => {
//   getData()
// },[])


// const rows = data?.data.map((row) => {
//   return {
//       id: row.id,
//       name: row.name,
//       symbol: row.symbol,
//       price_usd:row.price_usd,
//       percent_change_24h: row.percent_change_24h


//   }
// })

// console.log('rows',rows)
// console.log(data?.data.filter((c)=> c.name === 'Bitcoin'))
// const bitcoin = data?.data.filter((c)=> c.name === 'Bitcoin')
// bitcoin?.map((test)=> test.name)
    return(
      <Grid>
        <Header></Header>
      <Typography component="div" style={{color:"#FFFFFF", font:'Roboto' }}>
      <Box sx={{ lineHeight: 'normal', m: 1, textAlign: 'center', }}> TRADE WITH</Box>
      <Box sx={{ lineHeight: 2, m: 1, textAlign: 'center', }}>Zero Swaps on All XM Ultra Low Accounts for more than 25 instruments!</Box>
      <Box sx={{ lineHeight: 2, m: 1, textAlign: 'center', }}>Enjoy spreads as low as 0.6 pips and leverage up to 1000:1 on instruments like EURUSD, USDJPY, EURJPY, GBPUSD, and Gold.</Box>
    <Button variant="contained" style={{background:'#29A643'}}>OPEN ACCOUNT</Button>
    <Box sx={{ lineHeight: 2, m: 1, textAlign: 'center', }}> New to trading? Try a Demo account.</Box>
    <Box sx={{ lineHeight: 2, m: 1, textAlign: 'center', }}> Terms and Conditions apply*. To read the full T&Cs, click here.</Box>
      <CardContentPage></CardContentPage>
     <SignUp></SignUp>
     </Typography>
    </Grid>
)
}
export default MainPage