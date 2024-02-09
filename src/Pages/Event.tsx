import { Grid, Box, Paper, Typography, CardHeader, CardContent, Card, CardMedia } from "@mui/material";
import Frame from "../assert/Frame.png"
import Frame2 from "../assert/Frame2.png"
import React from "react";
const Event = () =>{
    const [spacing, setSpacing] = React.useState(2);
return(
    <Paper >
        <Typography padding={120} variant="h2" sx={{ mb: 1.5, padding:3 }}>
        Event Gallery
        </Typography>

        <Grid sx={{ flexGrow: 1 }} padding={15} container spacing={0}>
      <Grid item xs={8}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1, 2,3,4,5].map((value) => (
            <Grid padding-left={190} key={value} item>
              <Paper
                sx={{
                  height: 200,
                  width: 200,
                  backgroundColor:"grey",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>

<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

  <Grid item xs={6}>
  <Card>
<CardHeader avatar={
    <CardMedia
    style = {{
        width: "49.26",
        height: "56.47",
        top: "3072",
        left: "453.13"
    }}
    component="img"
    image={Frame}

  />
  }>
  </CardHeader>
    <CardContent>
    <Typography
        style={{
font: "Roboto"
        }}
          gutterBottom
          variant="h3"
        >
Authorised and Regulated </Typography>
<Typography variant="h4">
    At XM, we adhere to all regulatory standards and are fully authorised and regulated by FSC.
    </Typography>
    </CardContent>
</Card>
  </Grid>
  <Grid item xs={6}>
  <Card>
<CardHeader avatar={
    <CardMedia
    style = {{
        width: "49.26",
        height: "56.47",
        top: "3072",
        left: "453.13"
    }}
    component="img"
    image={Frame2}

  />
  }>
  </CardHeader>
    <CardContent>
    <Typography
        style={{
font: "Roboto"
        }}
          gutterBottom
          variant="h3"
        >
Committed and Fair </Typography>
<Typography variant="h4">
We operate with complete transparency and adhere to the highest professional and ethical standards.
    </Typography>
    </CardContent>
</Card>
 
  </Grid>
  <Grid item xs={6}>
  <Card>
<CardHeader avatar={
    <CardMedia
    style = {{
        width: "49.26",
        height: "56.47",
        top: "3072",
        left: "453.13"
    }}
    component="img"
    image={Frame}

  />
  }>
  </CardHeader>
    <CardContent>
    <Typography
        style={{
font: "Roboto"
        }}
          gutterBottom
          variant="h3"
        >
Multi-Award-Winning </Typography>
<Typography variant="h4">
Over the years we have received over 40 awards for the quality of our products and services.
    </Typography>
    </CardContent>
</Card>
  </Grid>
  <Grid item xs={6}>
  <Card>
<CardHeader avatar={
    <CardMedia
    style = {{
        width: "49.26",
        height: "56.47",
        top: "3072",
        left: "453.13"
    }}
    component="img"
    image={Frame}

  />
  }>
  </CardHeader>
    <CardContent>
    <Typography
        style={{
font: "Roboto"
        }}
          gutterBottom
          variant="h3"
        >
24/7 Support </Typography>
<Typography variant="h4">
Our support agents are on hand 24/7 to answer your questions or assist you with any issues.    </Typography>
    </CardContent>
</Card>
  </Grid>
</Grid>
</Paper>
)
}
export default Event;