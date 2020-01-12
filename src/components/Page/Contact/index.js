import React, { Fragment } from "react";
import {Paper, Grid, Divider, Typography, } from "@material-ui/core"
import SimpleMap from "../../Layouts/map"

import "../../../class.css"








export default function VerticalDividers() {


  return (
    <Fragment   >
    <Paper>
   <h1> Contact us .</h1>
   </Paper >
   <Grid container alignItems="center" >
   <grid>
   <SimpleMap classname="App-logo"/>
   </grid>

   <Divider orientation="vertical" />
   
   
   <Grid justify="flex-end">

   <Typography>phone no:040-1809-6060 </Typography>
   <Typography>email-id: example@gmail.com </Typography>
   
   </Grid>
 </Grid>
 
    </Fragment>
  );
  }
