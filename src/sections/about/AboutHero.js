import { m } from "framer-motion";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import { Box, Button, Card, Container, Link, Typography } from "@mui/material";
// components
import Image from "../../components/Image";
import { MotionViewport, varFade } from "../../components/animate";
import NextLink from "next/link";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  // backgroundImage: `url('/assets/illustrations/kente-pattern.svg')`,
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  height: "100vh",
  // objectFit: "fill",
  // backgroundColor: "#060606",

  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === "light"
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    border: 0,
    maxWidth: 365,
    minHeight: 227,
    margin: "auto",
    textAlign: "center",
    padding: theme.spacing(5, 5, 5),
    boxShadow: theme.customShadows.z12,
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
    },
    "&.cardLeft": {
      [theme.breakpoints.up("md")]: { marginTop: -40 }
    },
    "&.cardCenter": {
      [theme.breakpoints.up("md")]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        "&:before": {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: "auto",
          position: "absolute",
          width: "calc(100% - 40px)",
          height: "calc(100% - 40px)",
          borderRadius: Number(theme.shape.borderRadius) * 2,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    }
  };
});

// ----------------------------------------------------------------------

export default function AboutHero() {
  const theme = useTheme();

  const isLight = theme.palette.mode === "dark";

  return (
    <RootStyle>
      <Container
        component={MotionViewport}
        sx={{
          // backgroundImage: `url('/assets//illustrations/kente-pattern.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right",
          height: "100%",
          objectFit: "fit",
          padding: theme.spacing(2, 2)
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 10, md: 10 }
          }}
        >
          <Image
            visibleByDefault
            disabledEffect
            alt="image shape"
            src="/assets/images/home/shape.svg" //replace with african pattern
            sx={{
              top: 0,
              right: 0,
              bottom: 0,
              width: 720,
              height: 720,
              opacity: 0.48,
              my: "auto",
              position: "absolute",
              display: { xs: "none", md: "block" }
            }}
          />
          <m.div variants={varFade().inUp}>
            <Typography
              sx={{
                fontSize: { xs: 42, lg: 72 },
                fontWeight: 800,
                lineHeight: 1
                // color: "common.white"
              }}
            >
              ABOUT WEB3 <br />
              AFRICA GROUP
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography
              sx={{
                marginTop: 2,
                textAlign: "center"
                // color: "common.white"
                // width: 500
                // fontSize: { xs: 18, lg: 24 }
              }}
            >
              Web3 Africa Group (W3AG) is a visionary organization committed to
              spearheading the decentralized digital revolution across Africa.
              As the parent company of various Web 3 hubs across the continent,
              W3AG aims to establish innovation centers that will drive
              education, policy advocacy, and community development in the Web 3
              ecosystem. Our flagship hub, Web 3 Accra (W3A), based in Ghana,
              serves as a pioneering incubator and a launchpad for
              entrepreneurs, creators, and innovators within the decentralized
              space.
            </Typography>
          </m.div>
        </Box>
      </Container>
      {/* <Box sx={{ height: { md: "100vh" } }} /> */}
    </RootStyle>
  );
}
