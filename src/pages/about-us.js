// @mui
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";
// layouts
import Layout from "../layouts";
// components
import Page from "../components/Page";
// sections
import {
  AboutHero,
  AboutWhat,
  AboutVision,
  AboutTestimonials,
  AboutTeam
} from "../sections/about";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
    height: "100%"
  // paddingTop: theme.spacing(8),
  // [theme.breakpoints.up("md")]: {
  //   paddingTop: theme.spacing(11)
  // }
}));

// ----------------------------------------------------------------------

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function About() {
  return (
    <Page title="About us">
      <RootStyle>
        <AboutHero id="about-hero" />
        {/* <AboutWhat id="about-what" />
        <AboutVision id="about-vision" />
        <Divider
          orientation="vertical"
          sx={{ my: 10, mx: "auto", width: 2, height: 40 }}
        />
        <AboutTeam />
        <AboutTestimonials /> */}
      </RootStyle>
    </Page>
  );
}
