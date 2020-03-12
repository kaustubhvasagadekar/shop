import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MainFeaturedPost from "./MainFeaturedPost";

const mainFeaturedPost = {
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…"
};

export default function Blog() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" maxHight="xl">
        <main>
          <Grid sx>
            <MainFeaturedPost post={mainFeaturedPost} />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
