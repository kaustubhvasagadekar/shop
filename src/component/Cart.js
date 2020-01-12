import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "./actions/cartActions";
import { Button, Container, Card, CssBaseline, CardContent, CardMedia, Divider, Grid } from "@material-ui/core";
import Recipe from "./Recipe";



class Cart extends Component {
  //to remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <div>
            <Grid className="collection-item avatar" key={item.id}>
              <CardMedia className="item-img">
                <img src={item.image} alt={item.image} />
              </CardMedia>

              <div className="item-desc">
                <span className="title">{item.title}</span>
                <p>
                  <b>Price: {item.price}$</b>
                </p>
                <p>
                  <b>Quantity: {item.quantity}</b>
                </p>

                <Button
                  variant="contained"
                  className="waves-effect waves-light btn pink remove"
                  onClick={() => {
                    this.handleRemove(item.id);
                  }}
                >
                  Remove
                </Button>
              </div>
            </Grid>
            <Divider variant="fullWidth" />
          </div>
        );
      })
    ) : (
      <p>Cart Is Empty</p>
    );
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Card inlist>
            <h5>You have ordered:</h5>
            <ul className="collection">
              <CardContent>
                <CardMedia>{addedItems}</CardMedia>
              </CardContent>
            </ul>
            <Divider variant="fullWidth" inlist  />
            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignItems="flex-end"
            >
              <Recipe />
            </Grid>
          </Card>

          <Container></Container>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
