import React, { Component } from "react";
import { connect } from "react-redux";
import Paypal from "./PayPalButton";
import { Grid, Button } from "@material-ui/core";
// import { addShipping } from './actions/cartActions'
class Recipe extends Component {
  componentWillUnmount() {
    if (this.refs.shipping.checked) this.props.substractShipping();
  }

  handleChecked = e => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };

  render() {
    return (
      <div className="container" style={{ padding: "5%" }}>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <div className="collection" style={{paddingRight:"15px"}}>
            <li className="collection-item"  >
              <label >
                <input
                  type="checkbox"
                  ref="shipping"
                  onChange={this.handleChecked}
                />
                <span >Shipping(+Rs60)</span>
              </label>
            </li>

         

            <li className="collection-item" style={{paddingLeft:"20px", paddingTop:"10px" }}>
              <b>Total: {this.props.total} Rs</b>
            </li>
          </div>
         

          <div className="checkout">
            <Button
              className="waves-effect waves-light btn"
              onclick={Paypal}
              variant="contained"
              color="inherit"
            >
              Checkout
            </Button>
          </div>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
