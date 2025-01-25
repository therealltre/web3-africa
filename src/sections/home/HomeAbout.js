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
    title: "Empowering Africa’s Decentralized Future",
    description:
      "At Web3 Africa Group, our mission is to drive Africa's digital transformation by establishing a network of Web 3 hubs..",
    // href: "#contact"
  },
  {
    imageUrl: "/assets/images/home/ellipse-yellow.svg",
    title: "How Our Company Can Boost Your Business",
    description:
      "We are the top digital marketing agency for  branding corp. We offer a full rang  engine ....",
    // href: "#about"
  },
  {
    imageUrl: "/assets/images/home/ellipse-green.svg",
    title: "Our Core Values",
    description:
      "Leading the charge in developing and scaling digital solutions. Ensuring communities across Africa benefit from digital growth. Providing the tools and education needed for economic ...",
    // href: "#"
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
      backgroundColor: "#fff"
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
          backgroundColor: "#fff",
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    }
  };
});

const IMAGE_POSITIONS = [
  { top: { xs: 590, md: 530 }, left: { xs: 50, md: 500 } },
  { top: { xs: 590, md: 530 }, left: { xs: 50, md: 900 } },
  { top: { xs: 590, md: 530 }, left: { xs: 50, md: 1300 } }
];
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
          // position: "absolute",
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

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: 2, // Reduced padding
              maxWidth: 700, // Limit the maximum width of the Box
              margin: "auto" // Center align within its container
            }}
          >
            <m.div variants={varFade().inDown}>
              <Typography
                variant="body1" // Use a smaller typography variant
                sx={{
                  fontWeight: "regular",
                  lineHeight: 1.5 // Set a comfortable line height
                }}
              >
                At Web3 Africa Group, our mission is to drive Africa's digital
                transformation by establishing a network of Web 3 hubs that
                foster innovation, education, and policy development. <br />
                We are dedicated to empowering entrepreneurs, creators, and
                communities with the tools and knowledge needed to thrive in the
                decentralized economy, while shaping a sustainable and inclusive
                digital future for the continent.
              </Typography>
            </m.div>
          </Box>
        </Box>

        {IMAGE_POSITIONS.map((pos, index) => (
          <m.div variants={varFade().inUp}>
            <Image
              key={index}
              src={"/assets/images/home/africa-button.png"}
              sx={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                width: "90px",
                height: " 90px",
                display: { xs: "none", lg: "block" }, // Hide on xs, show on sm and up
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // Added box-shadow for a smooth hover effect
                "&:hover": {
                  // borderRadius: 2, // Border radius stays consistent
                  transform: "translateY(-5px)" // Moves the card up by 5px
                  // boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)" // Adds a subtle shadow for depth
                }
              }}
            />
          </m.div>
        ))}
        <Grid container spacing={2}>
          {CARDS.map((card, index) => (
            <Grid item xs={12} lg={4} key={card.index}>
              <m.div variants={varFade().inUp}>
                <CardStyle
                  sx={{
                    padding: { xs: 3, md: 5 },
                    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Added box-shadow for a smooth hover effect
                    "&:hover": {
                      borderRadius: 2, // Border radius stays consistent
                      transform: "translateY(-5px)", // Moves the card up by 5px
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)" // Adds a subtle shadow for depth
                    }
                  }}
                >
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


                </CardStyle>
              </m.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            href={'/about-us'}
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
        </Box>
      </Container>
    </RootStyle>
  );
}
