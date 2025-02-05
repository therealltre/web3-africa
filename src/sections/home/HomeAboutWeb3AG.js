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
    title: "Technology",
    description:
      " Implementing blockchain solutions that foster financial inclusion and economic growth. ",
    // href: "#contact"
  },
  {
    imageUrl: "/assets/images/home/ellipse-yellow.svg",
    title: "Policy & Advocacy",
    description:
      " Working with regulators to develop progressive policies for blockchain adoption.",
    // href: "#about"
  },
  {
    imageUrl: "/assets/images/home/ellipse-green.svg",
    title: "Education",
    description:
      "Equipping individuals and organizations with the knowledge to thrive in Web 3 ecosystems.",
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
    minHeight: 200,
    margin: "auto",
    textAlign: "start",
    padding: theme.spacing(5, 5, 5),
    boxShadow: theme.customShadows.z12,
    backgroundColor: "#181A20",
    color: '#fff',
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor: "#181A20",
      color: '#fff'
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
                Blockchain?
              </Typography>
            </Stack>
          </m.div>

          <Box
            sx={{
              // display: "flex",
              // justifyContent: "center",
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
                Web 3 technologies—blockchain, decentralized finance (DeFi), tokenization, and digital identity
                allow Africa to leapfrog traditional barriers in finance, governance, and innovation.
              </Typography>
            </m.div>
            <m.div variants={varFade().inDown}>
              <Typography
                variant="body1" // Use a smaller typography variant
                sx={{
                  fontWeight: "regular",
                  lineHeight: 1.5,
                  mt: 2
                }}
              >
                However, widespread adoption requires accessible, high-quality education that demystifies
                these innovations and showcases their real-world applications.
              </Typography>
            </m.div>
            <m.div variants={varFade().inDown}>
              <Typography
                variant="body1" // Use a smaller typography variant
                sx={{
                  fontWeight: "regular",
                  lineHeight: 1.5,
                  mt: 2
                }}
              >
                W3A ensures these technologies are accessible, understood, and used to create economic
                opportunities.
              </Typography>
            </m.div>
          </Box>
        </Box>

        {IMAGE_POSITIONS.map((pos, index) => (
          <m.div key={`image-${index}`} variants={varFade().inUp}>
            <Image
              key={index}
              src={`/assets/images/home/button-${index + 1}.png`} // Dynamically use button-1, button-2, button-3
              sx={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                width: "90px",
                height: "90px",
                display: { xs: "none", lg: "block" },
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)"
                }
              }}
            />
          </m.div>
        ))}

      </Container>
    </RootStyle>
  );
}
