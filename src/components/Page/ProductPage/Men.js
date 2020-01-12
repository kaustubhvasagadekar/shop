import React from "react";
import {
  makeStyles,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
  Divider,
  Grid

} from "@material-ui/core";






import storeProducts from "../../../data";



const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    flexDirection: "row"
  },
  rowtest: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  card: {
    maxWidth: 270,
    
  },
  media: {
    height: 150,
    width: 60,
    justifyItems: "center"
  },
  gridList: {
    width: "auto",
    height: "auto"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

export default function Men(props) {
  const locationRef = props.location.pathname.slice(1);
  const productsByRef = storeProducts.filter(ref => {
    if(ref.category === locationRef) {
      return ref;
    }
  });


 
  const Card = useStyles();

  return (
    <div>
      <Container fixed>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Typography
              gutterBottom
              variant="h4"
              component="h2"
              style={{ textAlign: "center", paddingTop: "2.2%" }}
            >
              Products
            </Typography>
            <Divider orientation="horizontal" />
          </Grid>

          {productsByRef.map((item, index) => (
            <Grid item xs={6} sm={4} key={index.id}>
              <Card style={{ maxWidth: 270 }} elevation="5">
                <CardActionArea>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: 150 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="h4">
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      this.handleClick(item.id);
                    }}
                  >
                    Buy Now
                  </Button>
                  <text justify="flex-end">Rs{item.price}</text>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
