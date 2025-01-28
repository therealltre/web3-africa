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
import HomeKeyMarkets from "./HomeKeyMarkets";
import { HomeCarousel, HomeFocusAreas, HomeTrustedBy } from ".";
import NextLink from "next/link";

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: "sticky",
  top: 0,
  width: "100%",
  // height: "100vh",
  zIndex: 1,
  backgroundColor: "#060606",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage:
    'url(/assets/images/home/african-patter-no-bg.png)',
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
  }
}));

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
  width: "100%",
  height: "100%",
  objectfit: "conver",
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
    padding: theme.spacing(15, 2),
    [theme.breakpoints.up("md")]: {
      textAlign: "start", // Center text for medium screens
      justifyContent: "center", // Center content horizontally
      alignItems: "center", // Center content vertically
      // padding: theme.spacing(15)
    }
  })
);

// ----------------------------------------------------------------------

export default function HomeHero() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MotionContainer>
      <RootStyle>
        {/* <HeroImgStyle
          alt="hero"
          src="/assets/images/home/african-patter-no-bg.png"
          // src="/assets/images/home/bg-african-pattern.png"
          // src="/assets/images/home/hero2.png"
          variants={varFade().inUp}
        /> */}

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
                        lineHeight: 1,
                        color: "common.white",
                        mt: 5
                      }}
                    >
                      Leading Africa's <br /> Decentralized <br /> Revolution
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontSize: { xs: 18, lg: 24 },
                        marginTop: 2,
                        color: "common.white"
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
                    <NextLink passHref href="/contact-us">
                      <Button
                        variant="contained"
                        sx={{
                          position: "relative",
                          overflow: "hidden",
                          backgroundColor: theme.palette.primary.main,
                          color: "#fff",
                          marginTop: 2,
                          border: "2px solid transparent",
                          borderRadius: 1,
                          transition: "color 0.3s ease, background-color 0.3s ease, transform 0.3s ease",
                          "&:hover": {
                            color: "#fff",
                            backgroundColor: theme.palette.primary.dark,
                            transform: "translateY(-5px)"
                          }
                        }}
                      >
                        Contact Us
                      </Button>
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
        <HomeFocusAreas />
        <HomeKeyMarkets />
        <HomeCarousel />

      </Box>
    </MotionContainer>
  );
}
