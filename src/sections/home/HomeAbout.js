import { m } from "framer-motion";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  Stack,
  Typography
} from "@mui/material";
// components
import Image from "../../components/Image";
import { MotionViewport, varFade } from "../../components/animate";
import { Icon } from "@iconify/react";
import NextLink from "next/link";
// ----------------------------------------------------------------------

const CARDS = [
  {
    imageUrl: "/assets/images/home/ellipse-red.svg",
    title: "How Our Agency Can Help You To Boost Your Business",
    description:
      "We are the top digital marketing agency for  branding corp. We offer a full rang  engine ....",
    href: "#contact"
  },
  {
    imageUrl: "/assets/images/home/ellipse-yellow.svg",
    title: "How Our Agency Can Help You To Boost Your Business",
    description:
      "We are the top digital marketing agency for  branding corp. We offer a full rang  engine ....",
    href: "#about"
  },
  {
    imageUrl: "/assets/images/home/ellipse-green.svg",
    title: "How Our Agency Can Help You To Boost Your Business",
    description:
      "We are the top digital marketing agency for  branding corp. We offer a full rang  engine ....",
    href: "#"
  }
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
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
    // maxWidth: 365,
    width: "100%",
    height: "100%",
    minHeight: 300,
    margin: "auto",
    textAlign: "start",
    padding: theme.spacing(5, 5, 5),
    boxShadow: theme.customShadows.z12,
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor: "White"
    },
    "&.cardLeft": {
      [theme.breakpoints.up("md")]: { marginTop: -40 }
    },
    "&.cardCenter": {
      [theme.breakpoints.up("md")]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.default,
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
          backgroundColor: theme.palette.background.default,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    }
  };
});

// ----------------------------------------------------------------------

export default function HomeAbout() {
  const theme = useTheme();

  const isLight = theme.palette.mode === "light";

  return (
    <RootStyle>
      <Container
        component={MotionViewport}
        sx={{
          backgroundImage: `url('/assets/images/home/african-warrior-dance.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "right",
          // height: "60vh",
          padding: theme.spacing(2, 2)
        }}
      >
      
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 10, md: 10 }
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography
              component="div"
              variant="overline"
              sx={{ mb: 2, color: "text.disabled" }}
            >
              Web3AfricaGroup
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Stack
              direction={"row"}
              spacing={1}
              sx={{ justifyContent: "center" }}
            >
              <Typography variant="h2">Why</Typography>
              <Typography
                variant="h2"
                sx={{
                  backgroundcolor: "primary",
                  backgroundImage: `linear-gradient(45deg, #FF8C42 , #02735E)`,
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 600
                }}
              >
                Choose Us?
              </Typography>
            </Stack>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography variant="body1" sx={{ fontWeight: "regular" }}>
              Lorem ipsum dolor sit amet consectetur. Mi in maecenas sodales
              velit molestie pharetra id consequat. Viverra bibendum id diam id
              eu malesuada montes in dui. Lectus diam auctor donec euismod
              semper. In tortor dictum sit cursus vulputate non.
            </Typography>
          </m.div>

          <Box
            sx={{ width: 200, justifyContent: "center", textAlign: "center" }}
          ></Box>
        </Box>

        <Grid container spacing={2}>
          {CARDS.map((card, index) => (
            <Grid item xs={12} lg={4} key={card.title}>
              {/* <Grid item xs={12} lg={index === 0 ? 12 : 6} key={card.title}> */}
              <m.div variants={varFade().inUp}>
                <CardStyle>
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    sx={{
                      mb: 3,
                      width: 20,
                      height: 20,
                      filter: (theme) => shadowIcon(theme.palette.primary.main),
                      ...(index === 0 && {
                        filter: (theme) => shadowIcon(theme.palette.info.main)
                      }),
                      ...(index === 1 && {
                        filter: (theme) => shadowIcon(theme.palette.error.main)
                      })
                    }}
                  />
                  <Typography
                    variant="h5"
                    paragraph
                    sx={{ textAlign: "start" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: isLight ? "text.secondary" : "common.white",
                      textAlign: "start"
                    }}
                  >
                    {card.description}
                  </Typography>

                  <Button
                    variant="contained"
                    href={card.href}
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      backgroundColor: theme.palette.primary.main,
                      color: "#fff",
                      marginTop: 2,
                      border: "2px solid transparent", // Ensures a default border is present
                      borderRadius: 1, // Border radius stays consistent
                      transition:
                        "color 0.3s ease, background-color 0.3s ease, transform 0.3s ease",
                      "&:hover": {
                        color: "#fff", // Text color changes to white on hover

                        borderRadius: 1, // Border radius stays consistent
                        backgroundColor: theme.palette.primary.dark, // Background changes to black
                        transform: "translateY(-5px)" // Moves the button up by 5px on hover
                      }
                    }}
                  >
                    Read More
                    <Icon
                      icon="material-symbols:arrow-forward-ios-rounded"
                      width="14"
                      height="14"
                    />{" "}
                  </Button>
                </CardStyle>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
