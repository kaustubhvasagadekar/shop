import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CssBaseline from '@material-ui/core/CssBaseline';

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { Grid, Link, Divider } from "@material-ui/core";
// import {index, Men, Women, Kids} from "../Page/ProductPage"


//const index = index

const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  media: {
   
    width: '100%',
  },
  title: {
    text: "this an sample "
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
    <Grid style={{ padding:"20px", paddingTop:"10"   }}>
      <Grid container justify="center" spacing={5} >
        <Grid item xs={3} >
          <Card className={classes.card} elevation="20" >
            <Link href="/men" color="inherit">
              <CardActionArea  >
              
                <img
                src="http://pngimg.com/uploads/suit/suit_PNG8121.png"
                alt="men"
                style={{ width: 150,  }}
              />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  <Divider  />
                  MEN
                  </Typography>
                </CardContent>
              </CardActionArea>
              
            </Link>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card} elevation="20">
            <Link href="/women" color="inherit">
              <CardActionArea>
                <img
                src="https://cdn10.bigcommerce.com/s-ngnvc9z/products/206/images/1366/THE_NAVY_PANT_SUIT_1__17162.1466139945.1280.1280.jpg?c=2"
                alt="women"
                style={{ width: 150 , }}
              />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                <Divider  />
                WOMEN
                </Typography>
              </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card} elevation="20">
            <Link href="/kids" color="inherit">
              <CardActionArea>
                
                <img
                src="https://img2.exportersindia.com/product_images/bc-full/2019/2/6167276/kids-party-wear-suit-1550817057-4740153.jpeg"
                alt="kids"
                style={{ width: 150  }}
              />
                
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                <Divider  />
                KIDS
                </Typography>
              </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </Grid>
    </React.Fragment>
  );
}
