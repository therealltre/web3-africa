import { m } from "framer-motion";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  useMediaQuery,
  Button,
  Link
} from "@mui/material";
import { MotionContainer, varFade } from "../../components/animate";
import Image from "next/image";
import HomeAboutWeb3AG from "./HomeAboutWeb3AG";
import HomeEducation from "./HomeEducation";
import HomeCommunity from "./HomeCommunity";
import HomeFaq from "./HomeFaq";
import HomeAbout from "./HomeAbout";
import { AboutTestimonials } from "../about";
import HomeProjects from "./HomeProjects";
import { HomeTrustedBy } from ".";
import NextLink from "next/link";

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: "sticky",
  top: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignItems: "center"
  }
}));

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  backgroundColor: "#060606"
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 2,
    maxWidth: 1440,
    margin: "auto",
    position: "relative",
    textAlign: "start",
    display: "flex",
    justifyContent: "start",
    padding: theme.spacing(10, 2),
    [theme.breakpoints.up("md")]: {
      textAlign: "start",
      padding: theme.spacing(15)
    }
  })
);

// ----------------------------------------------------------------------

export default function HomeHero() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const logos = [
    "/assets/images/home/bank-of-ghana.png",
    "/assets/images/home/gse.png",
    "/assets/images/home/telos-x.png",
    "/assets/images/home/un-digital-library.png",
    "/assets/images/home/global_citizen.png"
  ];

  return (
    <MotionContainer>
      <RootStyle>
        <HeroImgStyle
          alt="hero"
          src="/assets/images/home/hero2.png"
          variants={varFade().inUp}
        />

        <Container>
          <ContentStyle>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Stack spacing={2}>
                  <m.div
                    variants={varFade().inUp}
                    // animate={{ y: [-20, 0, -20] }}
                    // transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 42, lg: 72 },
                        fontWeight: 700,
                        lineHeight: 1
                      }}
                    >
                      Leading Africa's <br /> Decentralized <br /> Revolution
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontSize: { xs: 18, lg: 24 },
                        marginTop: 2
                      }}
                    >
                      Empowering innovators to thrive in blockchain, Defi, and
                      NFTs while shaping Africa's digital future
                    </Typography>
                  </m.div>

                  <m.div
                    variants={varFade().inDown}
                    // animate={{ y: [-20, 0, -20] }}
                    // transition={{ duration: 4, repeat: Infinity }}
                  >
                    <NextLink passhref="true" href="/contact-us">
                      <Link>
                        <Button
                          variant="contained"
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
                          F
                        >
                          Contact Us
                        </Button>
                      </Link>
                    </NextLink>
                  </m.div>
                </Stack>
              </Grid>

              <Grid item xs={12} md={6} sx={{ mt: 4 }}>
                <m.div
                  // variants={varFade().inUp}

                  // animate={{ y: [-20, 0, -20] }}
                  // transition={{ duration: 4, repeat: Infinity }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Image
                      src="/assets/images/home/map-vector.png"
                      alt="map-vector"
                      width={
                        isSmallScreen ? 310 : 650 || isMediumScreen ? 370 : 610
                      }
                      height={
                        isSmallScreen ? 330 : 690 || isMediumScreen ? 396 : 650
                      }
                      priority
                    />
                  </Box>
                </m.div>
              </Grid>
            </Grid>
          </ContentStyle>
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
        <HomeTrustedBy />
        <HomeAbout />
        {/* <HomeAboutWeb3AG /> */}
        <HomeEducation />
        <HomeCommunity />
        <HomeProjects />
        <AboutTestimonials />
      </Box>
    </MotionContainer>
  );
}