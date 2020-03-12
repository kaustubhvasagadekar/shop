import React, { Fragment } from "react";
import Header from "./Layouts/Header"


export default function app(props) {
    return (
      <Fragment  >
      <div>
         <Header />
            </div>
            <div>
                {props.children }
            </div>
      </Fragment>
    );
  }

