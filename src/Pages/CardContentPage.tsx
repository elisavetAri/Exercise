import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { useState, useEffect } from "react";
// import Bitcoin from './assert/Bitcoin.png';
import Bitcoin from '../assert/Bitcoin.png';

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
  <Grid>
<Card>
<CardContent>
     {bitcoin?.map((d)=> d.name)}
     <img src={Bitcoin} style={ {width: '139.21px',
height: '48.25px',
top: '23px',
left: '90px', }}>
  </img>
     {bitcoin?.map((d)=> d.percent_change_24h)}
     {bitcoin?.map((d)=> d.price_usd)}
     {bitcoin?.map((d)=> d.symbol)}
    </CardContent>
    </Card>
    <Grid> 
      <Card>
<CardContent>
     {ethereum?.map((d)=> d.name)}
     {ethereum?.map((d)=> d.percent_change_24h)}
     {ethereum?.map((d)=> d.price_usd)}
     {ethereum?.map((d)=> d.symbol)}
    </CardContent>
    </Card>
</Grid>
<Card>
    <CardContent>
     {ripple?.map((d)=> d.name)}
     {ripple?.map((d)=> d.percent_change_24h)}
     {ripple?.map((d)=> d.price_usd)}
     {ripple?.map((d)=> d.symbol)}
    </CardContent>
    </Card>

    <Card>
    <CardContent>
     {liteCoin?.map((d)=> d.name)}
     {liteCoin?.map((d)=> d.percent_change_24h)}
     {liteCoin?.map((d)=> d.price_usd)}
     {liteCoin?.map((d)=> d.symbol)}
    </CardContent>
    </Card>

    <Card>
    <CardContent>
     {biteCoinCash?.map((d)=> d.name)}
     {biteCoinCash?.map((d)=> d.percent_change_24h)}
     {biteCoinCash?.map((d)=> d.price_usd)}
     {biteCoinCash?.map((d)=> d.symbol)}
    </CardContent>
    </Card>
    

</Grid>
)
}
export default CardContentPage