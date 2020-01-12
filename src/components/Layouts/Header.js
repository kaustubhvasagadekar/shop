import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  makeStyles,
  IconButton,
  Menu
} from "@material-ui/core/";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Switch, Route, Link } from "react-router-dom";
import "./style.css";
import styled from "styled-components";
import Home from "../Page/Home/index";
import Men from "../Page/ProductPage/Men";
import Women from "../Page/ProductPage/Women";
import Kids from "../Page/ProductPage/kids";
import Cart from "../../component/Cart";
import Products from "../Page/ProductPage/index";
import { withStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Nav
        className="navbar navbar-expand-sm  navbar-dark px-sm-5"
        style={{ padding: "7px" }}
      >
        <AppBar
          position="relative"
          color="default"
          style={{
            flexGrow: 1,
            display: "flexGrow",
            justifyContentnt: "flexGrow"
          }}
        >
          <Toolbar>
            <Link to="/" style={{ color: "black" }}>
              <Typography
                style={{
                  marginLeft: "-2%"
                }}
                variant="overline"
                component="menu"
                color="inherit"
                gutterBottom
              >
                <MenuItem>Home</MenuItem>
              </Typography>
            </Link>

            <div>
              <Link style={{ color: "black" }}>
                <Typography
                  variant="overline"
                  component="menu"
                  color="inherit"
                  gutterBottom
                  aria-controls="customized-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  hover={true}
                >
                  <MenuItem>Product</MenuItem>
                </Typography>
              </Link>

              <div>
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClick={handleClose}
                >
                  <Link to="/products" style={{ color: "black" }}>
                    <MenuItem>
                      <ListItemText primary="All" />
                    </MenuItem>
                  </Link>
                  <Link to="/men" style={{ color: "black" }}>
                    <MenuItem>
                      <ListItemText primary="Men" />
                    </MenuItem>
                  </Link>
                  <Link to="/women" style={{ color: "black" }}>
                    <MenuItem>
                      <ListItemText primary="Women" />
                    </MenuItem>
                  </Link>
                  <Link to="/kids" style={{ color: "black" }}>
                    <MenuItem>
                      <ListItemText primary="Kids" />
                    </MenuItem>
                  </Link>
                </StyledMenu>
              </div>
            </div>
            <Link to="contact" style={{ color: "black" }}>
              <Typography
                variant="overline"
                component="menu"
                color="inherit"
                gutterBottom
              >
                <MenuItem>Contact us</MenuItem>
              </Typography>
            </Link>

            <Typography
              variant="overline"
              component="menu"
              color="inherit"
              gutterBottom
              className={classes.title}
            >
              <Link to="about" style={{ color: "black" }}>
                <MenuItem>About</MenuItem>
              </Link>
            </Typography>

            <Link to="/cart" style={{ color: "black" }}>
              <IconButton>
                <ShoppingCartIcon type="button" color="inherit" />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </Nav>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/men" component={Men} />
          <Route path="/women" component={Women} />
          <Route path="/kids" component={Kids} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
          <Route
            render={function() {
              return (
                <dir>
                  <dir>
                    <p>
                      404...
                      <br />
                      page Not found
                    </p>
                  </dir>
                </dir>
              );
            }}
          />
        </Switch>
      </div>
    </div>
  );
}
const Nav = styled.nav`
text-shadow-offset: 10px 5px;  
background: ;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;
