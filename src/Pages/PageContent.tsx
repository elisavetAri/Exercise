import { Card, Typography, Box, Button, Grid, CardActions, CardContent, Divider, Container, CardHeader, CardMedia, Paper } from "@mui/material"
import background from '../assert/background.png';
import CardContentPage from "./CardContentPage";
import Superior from "../assert/Superior.png"
import Competitive from "../assert/Competitive.png"
import StartWith from "../assert/StartWith.png"
import AdvanceTechnology from "../assert/AdvanceTechnology.png"
import SignUp from "./SignUp";

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
        <Grid item display="grid" xs={6} md={3} style={{ background:"#202E47"}} >
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
    <Grid item xs={6} md={3} >
      <CardContentPage></CardContentPage>
      </Grid>
    <Card />
    <div>
    <Divider border-width="10"/>
    </div>
    <Grid>
    <Card sx={{ minWidth: 275, padding:8}} style={{color:"#FFFFFF",display:"flex", font:'Roboto',background:"#202E47"}}>
      <CardContent >
        <Typography  variant="h3" gutterBottom>
        Why Trade with XM?
        </Typography>
        <Divider color='#29A643'></Divider>
        <Typography  sx={{ mb: 1.5, padding:3 }} component="div">
        We have been providing traders around the world with the same premium experience for over a decade. <br></br>As an industry-leader, we know what the modern trader needs to be successful in the markets.
        </Typography>
      </CardContent>
    </Card>

    <Box >
    <Grid container columns={12} >
  <Grid xs={12} md={5} lg={4} columns={2}>
    <Grid xs={6} lg={3}>
  <CardHeader avatar={
    <CardMedia
    component="img"
    width= "31.22px"
    image={Superior}
 
  />
  }>
  </CardHeader>
  </Grid>
  </Grid>

  <Grid xs={8} md={7} lg={8}>
  <Grid xs={8} lg={3}>
  <CardHeader avatar={
    <CardMedia
    component="img"
    width= "31.22px"
    image={Competitive}
  />
  }>
  </CardHeader> 
  </Grid>
  </Grid>
  <Grid columns={6} xs={6} md={7} lg={8}> 
  <Grid xs={3} lg={3}>
  <CardHeader avatar={
    <CardMedia
    component="img"
    width= "31.22px"
    image={AdvanceTechnology}
  />
  }>
  </CardHeader> 
  </Grid>
  <Grid xs={3} lg={3}>
  <CardHeader avatar={
    <CardMedia
    component="img"
    width= "31.22px"
    image={StartWith}
  />
  }>
  </CardHeader> 
  </Grid>
</Grid>
</Grid>
  </Box>

  <Grid item xs={3} md={3} >
  <Typography component="h1" variant="h5">
                  - Register Here -
                  </Typography>
                  <Typography component="h4" >
                  Join us to celebrate our biggest night of the year.
                  </Typography>
      <SignUp></SignUp>
      </Grid>
    </Grid>


    {/* </Container> */}
    </Grid> 
    </Paper>
    )
}

export default PageContent