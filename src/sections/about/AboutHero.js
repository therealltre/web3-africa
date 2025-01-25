import { m } from "framer-motion";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import { Box, Button, Card, Container, Divider, Link, Typography } from "@mui/material";
// components
import Image from "../../components/Image";
import { MotionContainer, MotionViewport, varFade } from "../../components/animate";
import NextLink from "next/link";
import AboutWhat from "./AboutWhat";
import AboutVision from "./AboutVision";
import AboutTeam from "./AboutTeam";
import AboutTestimonials from "./AboutTestimonials";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  position: "sticky",
  top: 0,
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  zIndex: 1,
  width: "100%",
  height: "100vh",
  // objectfit: "fill",
  backgroundColor: "#060606",

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
    <MotionContainer>
      <RootStyle>
        <Container
          component={MotionViewport}
          sx={{
            // backgroundImage: `url('/assets//illustrations/kente-pattern.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right",
            height: "100%",
            objectfit: "fit",
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
                  mt: 10,
                  fontSize: { xs: 42, lg: 72 },
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "common.white",
                  textAlign: "center", // Ensure text is centered
                  // margin: "0 auto",    // Center text block
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
                  color: "common.white",
                  textAlign: "center", // Aligns all text to center
                }}
              >
                Web3 Africa Group (W3AG) is a visionary organization committed to
                spearheading the decentralized digital revolution across Africa. As
                the parent company of various Web 3 hubs across the continent, W3AG
                aims to establish innovation centers that will drive education, policy
                advocacy, and community development in the Web 3 ecosystem. Our
                flagship hub, Web 3 Accra (W3A), based in Ghana, serves as a pioneering
                incubator and a launchpad for entrepreneurs, creators, and innovators
                within the decentralized space.
              </Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <m.div
                animate={{
                  scale: [1, 1.1, 1], // Pulsing effect
                }}
                transition={{
                  duration: 6, // Duration of each pulse
                  repeat: Infinity, // Infinite repeat
                  repeatType: "loop",
                }}
              >
                <Image
                  visibleByDefault
                  disabledEffect
                  alt="W3A Logo"
                  src="/assets/images/brand/w3a-logo.png"
                  sx={{
                    marginTop: 4,
                    width: 300,
                    height: "auto",
                    mx: "auto",
                    display: "block",
                  }}
                />
              </m.div>
            </m.div>

          </Box>
        </Container>

      </RootStyle>
      <Box
        sx={{
          height: "auto",
          background: theme.palette.background.default,
          position: "relative",
          zIndex: 2
        }}
      >

        <AboutWhat id="about-what" />
        <AboutVision id="about-vision" />
        <Divider
          orientation="vertical"
          sx={{ my: 10, mx: "auto", width: 2, height: 40 }}
        />
        <AboutTeam />
        <AboutTestimonials />
      </Box>
    </MotionContainer>
  );
}
