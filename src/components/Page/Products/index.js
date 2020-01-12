import React, { Fragment } from "react";
import {Paper, Divider} from "@material-ui/core"
// import men0 from '../../../img/men0.png';
import MediaCard from "../../Layouts/card"


export default props => (
    <Fragment>
   
    <Paper style= {{minHeight: "69vh"}} >
   
    <h1 >Product </h1>
   
    <Divider orientation="horizontal" color="warning.main"  />
 
    <MediaCard/>
    
       
    </Paper>
    
    </Fragment>
  );



