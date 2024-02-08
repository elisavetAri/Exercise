import {  Box, Card, CardHeader, CardMedia, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Bitcoin from '../assert/Bitcoin.png';
import Ethereum from '../assert/Ethereum.png'
import XRP from '../assert/XRP.png'
import LiteCoin from '../assert/Litecoin.png'
import BitCoinCash from '../assert/BitcoinCash.png'


const CardContentPage = () => {
    const [data, setData] = useState<Data>();
    const getData = () => {
      fetch('https://api.coinlore.net/api/tickers/').then(res => res.json())
    .then(data => setData(data))
  }
  useEffect(() => {
    getData()
  },[])

const bitcoin = data?.data.filter((c)=> c.name === 'Bitcoin')
const ethereum = data?.data.filter((c)=> c.name === 'Ethereum')
const ripple = data?.data.filter((c)=> c.name === 'XRP')
const liteCoin = data?.data.filter((c)=> c.name === 'Litecoin')
const biteCoinCash = data?.data.filter((c)=> c.name === 'Bitcoin Cash')

return (
  <Grid container columns={20}  >
      <Grid xs={12} md={5} lg={4}>
<Card sx={{ background:"#A7A7A7",color:"#FFFFFF", height: 150, top:750,left:53, radius: 14.31, border:0.95, maxWidth: 204 }}>
     <Card variant="outlined"  sx={{ background:"#A7A7A7",color:"#FFFFFF", height: 150, top:750,left:53, radius: 14.31, border:0.95, maxWidth: 204 }}>
      <Box sx={{ p: 1 }} >
        <Stack direction="row" justifyContent="space-between" alignItems="center">

<CardHeader avatar={
  <CardMedia
  component="img"
  width= "31.22px"
  image={Bitcoin}
  alt={'BTC'}
/>
}>
</CardHeader>
<Typography gutterBottom variant="body2" component="div">
          {bitcoin?.map((d)=> d.symbol)}
          </Typography>
  <Chip label={bitcoin?.map((d)=> d.name)}  size="small" style={{background:"#FFF8D6"
}}/>
        </Stack>
        <Divider border-width="5"/>
        <Typography color="#FFFFFF" variant="body2">
        {bitcoin?.map((d)=> d.price_usd)}
        </Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography gutterBottom variant="body2" color="#B1FFC2">
        {bitcoin?.map((d)=> d.percent_change_24h)}
        </Typography>
      </Box>
    </Card>
    </Card>
    </Grid>
<Grid xs={12} md={5} lg={4}>
    <Card variant="outlined" sx={{background:"#A7A7A7",color:"#FFFFFF" , height: 150, top:750,left:53, radius: 14.31, border:0.95, maxWidth: 204  }}>
      <Box sx={{ p: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">

<CardHeader avatar={
  <CardMedia
  component="img"
  width= "31.22px"
  image={Ethereum}
  alt={'ETH'}
/>
}>
</CardHeader>
<Typography gutterBottom variant="body2" component="div" color="#FFFFFF" >
          {ethereum?.map((d)=> d.symbol)}
          </Typography>
  <Chip label= {ethereum?.map((d)=> d.name)}  size="small"  style={{background:"#FFF8D6"
}}/>
        </Stack>
        <Divider border-width="5"/>
        <Typography color="#FFFFFF"  variant="body2">
        {ethereum?.map((d)=> d.price_usd)}
        </Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography gutterBottom variant="body2" color="#FFA3A6" >
        {ethereum?.map((d)=> d.percent_change_24h)}
        </Typography>
      </Box>
    </Card>
    </Grid>

    <Grid xs={12} md={5} lg={4}>
    <Card variant="outlined" sx={{ background:"#A7A7A7", color: "#FFFFFF",
 height: 150, top:750,left:53, radius: 14.31, border:0.95, maxWidth: 204  }}>
      <Box sx={{ p: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">

<CardHeader avatar={
  <CardMedia
  component="img"
  width= "31.22px"
  image={XRP}
  alt={'XRP'}
/>
}>
</CardHeader>
<Typography gutterBottom variant="body2" component="div" color="#FFFFFF" >
          {ripple?.map((d)=> d.symbol)}
          </Typography>
  <Chip label= {ripple?.map((d)=> d.name)} size="small" style={{background:"#FFF8D6"
}}/>
        </Stack>
        <Divider border-width="5"/>
        <Typography variant="body2" color="#FFFFFF" >
        {ripple?.map((d)=> d.price_usd)}
        </Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography gutterBottom variant="body2" color="#B1FFC2" >
        {ripple?.map((d)=> d.percent_change_24h)}
        </Typography>
      </Box>
    </Card>
    </Grid>
    <Grid xs={12} md={5} lg={4}>
    <Card variant="outlined" sx={{background:"#A7A7A7",color: "#FFFFFF", height: 150, top:750,left:53, radius: 14.31, border:0.95, maxWidth: 204 }}>
      <Box sx={{ p: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">

<CardHeader avatar={
  <CardMedia
  component="img"
  width= "31.22px"
  image={LiteCoin}
  alt={'LTC'}
/>
}>
</CardHeader>
<Typography gutterBottom variant="body2" component="div" color="#FFFFFF" >
          {liteCoin?.map((d)=> d.symbol)}
          </Typography>
  <Chip label= {liteCoin?.map((d)=> d.name)}  size="small" style={{background:"#FFF8D6"
}}/>
        </Stack>
        <Divider border-width="5"/>
        <Typography variant="body2" color="#FFFFFF" >
        {liteCoin?.map((d)=> d.price_usd)}
        </Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography gutterBottom variant="body2" color="#FFA3A6" >
        {liteCoin?.map((d)=> d.percent_change_24h)}
        </Typography>
      </Box>
    </Card>
    </Grid>
    <Grid xs={12} md={5} lg={4}>
    <Card variant="outlined" sx={{ background:"#A7A7A7",color: "#FFFFFF",height: 150, top:750,left:53, radius: 14.31, border:0.95, maxWidth: 204 }}>
      <Box sx={{ p: 1}}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">

<CardHeader avatar={
  <CardMedia
  component="img"
  width= "31.22px"
  image={BitCoinCash}
  alt={'BCH'}
/>
}>
</CardHeader>
<Typography gutterBottom variant="body2" component="div">
          {biteCoinCash?.map((d)=> d.symbol)}
          </Typography>
  <Chip label= {biteCoinCash?.map((d)=> d.name)} size="small"  style={{background:"#FFF8D6"
}}/>
        </Stack>
        <Divider border-width="5"/>
        <Typography color="#FFFFFF" variant="body2">
        {biteCoinCash?.map((d)=> d.price_usd)}
        </Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography gutterBottom variant="body2" color="#B1FFC2" >
        {biteCoinCash?.map((d)=> d.percent_change_24h)}
        </Typography>
      </Box>
    </Card>
    </Grid>
</Grid>

)
}
export default CardContentPage