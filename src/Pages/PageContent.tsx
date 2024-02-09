import { Card, Typography, Box, Button, Grid, CardActions, CardContent, Divider, Container, CardHeader, CardMedia, Paper, Skeleton } from "@mui/material"
import background from '../assert/background.png';
import CardContentPage from "./CardContentPage";
import FastExecusion from "../assert/FastExecusion.png"
import Competive from "../assert/Competive.png"
import Tech from "../assert/Tech.png"
import Dollar from "../assert/Dollar.png"
import Line from "../assert/Line.png"
import Registered from "./Registered";
import Event from "./Event"

const styles = {
    paperContainer: {
        backgroundImage:`url(${background})`,
        color:"#FFFFFF",
        font:'Roboto'
    }
};
const PageContent = () => {
    return(
        <Paper style={styles.paperContainer}>
    <Grid>
    <Card sx={{ minWidth: 275, padding:15}} style={{background:"#202E47" }}>
      <CardContent style={styles.paperContainer} >
        <Typography sx={{ fontSize: 14 }} gutterBottom>
        TRADE WITH
        </Typography>
        <Typography variant="h5" component="div">
        Zero Swaps on All XM Ultra Low <br/>
        Accounts for more than 25 instruments!
        </Typography>
        <Typography sx={{ mb: 1.5, padding:3 }}>
        Enjoy spreads as low as 0.6 pips and leverage up to 1000:1 on instruments like EURUSD, USDJPY, EURJPY, GBPUSD, and Gold.
        </Typography>
        <Button variant="contained" style={{background:'#29A643'}} >OPEN ACCOUNT</Button>
        <Typography variant="body2" sx={{ mb: 1.5, padding:3 }}>
        New to trading? Try a Demo account.
          <br />
        </Typography>
      <Typography variant="caption" sx={{ minWidth: 275, padding:15}}>
      Terms and Conditions apply*. To read the full T&Cs, click here.
          <br />
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={6} md={3}>
      <CardContentPage></CardContentPage>
      </Grid>
      <div>
    <Divider border-width="10"/>
    </div>
    <Grid  >
    <Card  sx={{ minWidth: 300, padding:10}} style={{color:"#FFFFFF",  maxWidth:"100%",font:'Roboto', background:"#202E47"}}>
      <CardContent style={{ background:"#202E47", backgroundImage:`url(${background})`}} >
        <div>
        <Typography  variant="h3" align="center" gutterBottom style={{ background:"#202E47"}}>
        Why Trade with XM?
        </Typography>
        </div>
        <Divider color='#29A643'></Divider>
        <Typography  sx={{ mb: 1.5, padding:3 }} component="div" style={{ background:"#202E47"}}>
        We have been providing traders around the world with the same premium experience for over a decade. <br></br>As an industry-leader, we know what the modern trader needs to be successful in the markets.
        </Typography>
      </CardContent>
    </Card>

    <Grid container direction="row"
  alignItems="center"
  justifyContent="center" padding-left={10} sx={{ padding:1}} style={{color:"#FFFFFF", maxWidth:"100%", font:'Roboto', background:"#202E47"}}>
    <Grid container spacing={2}
   xs={6}>
    

      </Grid>
<Grid container direction="row"
  // alignItems="center"
  justifyContent="center" 
  >
<Grid container xs={6} style={{color:"#FFFFFF", maxWidth:"100%", font:'Roboto', background:"#202E47"}}>



</Grid>
</Grid>
</Grid>

    </Grid>

<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={2} style={{background:"#202E47"}}>

  <Grid  item  xs={8} md={6} >
 <Card  style={{width: "307px",
height: "450px",
background: "#0B0819",
color:"#FFFFFF", 
top: "1159px",
left: "93px"
}}>
<CardContent>
<Typography
          color="#FFFFFF"
          gutterBottom variant="h5"
        >
          Superior Trade Execution
        </Typography>
        <img src={Line} style={{margin:"left", display:"flex", padding:"10px"}}>
        </img>
        <Typography
        style={{
          width: "225px",
height: "60px",
top: "1216px",
left: "145px",
color:"#FFFFFF",
font: "Roboto"
        }}
          gutterBottom
        >
        99% of trades are executed in less than a second, with no requotes or rejections.
        </Typography>
</CardContent>

<CardHeader avatar={
    <CardMedia
    component="img"
    width= "31.22px"
    image={FastExecusion}
 
  />
  }>
  </CardHeader>
      </Card>
  </Grid>


  <Grid item  xs={8} md={6}>
 <Card style={{width:"700px",
height: "300px",
top: "1424px",
left: "1109px",
background: "#0B0819",
color:"#FFFFFF"
}}>
<CardContent>
  
<Typography
          color="#FFFFFF"
          gutterBottom variant="h5"
        >
          Competitive Pricing
        </Typography>               
        <img src={Line} style={{margin:"left", display:"flex", padding:"10px"}}>
        </img>
        
<CardHeader avatar={
    <CardMedia
     sx={{  }}
    style = {{
      width:" 90px",
      height:"90px"
    }}
    component="img"
    image={Competive}
 
  />
  }>
  </CardHeader>
        <Typography
        style={{
          width: "225px",
height: "60px",
top: "1216px",
left: "145px",
color:"#FFFFFF",
font: "Roboto"
        }}
          gutterBottom
        >
        We offer some of the lowest spreads and we don’t charge commissions.
        </Typography>

</CardContent>
      </Card>

 
  </Grid>
  <Grid item xs={6} md={4}>
 <Card style={{width: "500px",
height: "279px",
top: "1444px",
left: "433px",
background: "#0B0819",
color:"#FFFFFF"
}}>
  
<CardHeader avatar={
    <CardMedia
    style = {{
      width:" 90px",
      height:"90px"
    }}
    component="img"
    image={Tech}
 
  />
  }>
  </CardHeader>    
<CardContent>
  
<Typography
          color="#FFFFFF"
          gutterBottom variant="h5"
        >
          Advanced Technology
         </Typography>
                   
        <img src={Line} style={{margin:"left", display:"flex", padding:"10px"}}>
        </img>
        <Typography
        style={{
          width: "225px",
height: "60px",
top: "1216px",
left: "145px",
color:"#FFFFFF",
font: "Roboto"
        }}
          gutterBottom
        >
Trade on MT4 or MT5, with expert tools, across desktop, web and mobile.
        </Typography>

</CardContent>
      </Card>
  </Grid>
  <Grid item xs={6} md={4}>
 <Card style={{width: "328px",
height: "285px",
top: "1444px",
left: "433px",
background: "#0B0819",
color:"#FFFFFF"
}}>
<CardContent>
  
<Typography
          color="#FFFFFF"
          gutterBottom variant="h5"
        >
        Start with $5
         </Typography>
        
<CardHeader avatar={
    <CardMedia
     sx={{  }}
    style = {{
      width:" 90px",
      height:"90px"
    }}
    component="img"
    image={Dollar}
 
  />
  }>
  </CardHeader>               
        <img src={Line} style={{margin:"left", display:"flex", padding:"10px"}}>
        </img>
        <Typography
        style={{
          width: "225px",
height: "60px",
top: "1216px",
left: "145px",
color:"#FFFFFF",
font: "Roboto"
        }}
          gutterBottom
        >
Start trading your preferred instruments with as little as a $5 minimum deposit.
        </Typography>

</CardContent>
      </Card>
  </Grid>
</Grid>
</Box>

<Grid  padding={10} style={{background:"#202E47"}}>
<Typography variant="h2">
                  - Register Here -
                  </Typography>
                  <Typography variant="h5">
                  Join us to celebrate our biggest night of the year.
                  </Typography>
</Grid>
<Grid container padding={10} style={{ background:"#202E47"}}>
<Registered></Registered>

</Grid>

<Grid item >
<Event></Event>
</Grid>
    </Paper>
    )
}

export default PageContent