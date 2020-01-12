import React, { Component } from "react";
import { Router, Route, Switch} from "react-router";
import Home from "./Page/Home";
import Products from "./page/Products" ;
import Contact from "./page/Contact" ;
import About from "./page/About" ;
import productPage from "./page/ProductPage/index" ;
import Men from "./page/ProductPage/Men" ;
import Women from "./page/ProductPage/Women" ;
import Kids from "./page/ProductPage/Kids" ;


export default class extends Component {
  render() {
    return (

        
        <Router>
        <Switch>
        <Route exact path="/"  components={Home}   />
        <Route path={"product"}  components={Products} />
        <Route path={"contact"}  components={Contact}/>
        <Route path={"about"} components={About} />
        <Route path="/men" components={Men} />
        <Route path={"women"}  components={Women} />
        <Route path={"kids"}  components={Kids} />
        <Route path={"productpage"}  components={productPage} />
        
        </Switch>
        </Router>
    );
  }
}



 
 
