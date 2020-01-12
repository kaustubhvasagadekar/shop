import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../component/actions/cartActions";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
  Divider,
  Grid
} from "@material-ui/core";

class All extends Component {
  handleClick = id => {
    this.props.addToCart(id);
    alert( "The item Is Sent To your Cart");
  };

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <Grid item xs={6} sm={4} key={item.id}>
          <Card style={{ maxWidth: 270 }} elevation="5">
            <CardActionArea>
              <img src={item.image} alt={item.title} style={{ width: 150 }} />
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
      );
    });

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

            {itemList}
          </Grid>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(All);
