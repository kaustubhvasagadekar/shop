import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[10],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(1),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
 
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${post.image})`, height: "600px" }}
    ></Paper>
    
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object
};
