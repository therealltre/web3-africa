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
import NextLink from "next/link";
import NewsBlog from "./NewsBlog";

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: "sticky",
  top: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  overflow: "hidden",
  backgroundColor: "#060606", // Ensure this matches the hero image background
  [theme.breakpoints.up("sm")]: {
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
      background: "#060606", // Adjust as needed
      // background: theme.palette.background.default, // Adjust as needed
      clipPath: "polygon(100% 100%, 45% 100%, 65% 0, 100% 0)", // Slash effect visible on large screens
    },

  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    display: 'flex',
    alignItems: 'center'
  },
}));


const HeroImgStyle = styled(m.img)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
  width: "100%",
  height: "100%",
  objectfit: "cover",
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


      // padding: theme.spacing(15)
    }
  })
);

// ----------------------------------------------------------------------

export default function NewsHero() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MotionContainer>
      <RootStyle >
        <HeroImgStyle
          alt="hero"
          src="/assets/images/home/hero1.png"
          variants={varFade().inUp}
        />

        <Container >
          <ContentStyle>
            <Grid container>
              <Grid item xs={12} md={8} mt={10}>
                <Stack spacing={2}>
                  <m.div variants={varFade().inUp}>
                    <Typography
                      sx={{
                        fontSize: { xs: 36, lg: 64 },
                        fontWeight: 700,
                        lineHeight: 1.2,
                        color: "common.white"
                      }}
                    >
                      Stay Informed with <br /> Latest News <br /> & Insights
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: { xs: 18, lg: 24 },
                        marginTop: 2,
                        color: "common.white"
                      }}
                    >
                      Discover the latest updates, <br /> expert opinions,and in-depth
                      analysis  <br /> shaping our world today.
                    </Typography>
                  </m.div>
                </Stack>
              </Grid>

              <Grid item xs={12} md={4} sx={{ mt: 4 }}>
                <m.div>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* Background Image */}
                    <Image
                      src="/assets/images/home/african-warrior-mask.png"
                      alt="background-mask"
                      width={isSmallScreen ? 330 : 470 || isMediumScreen ? 410 : 660}
                      height={isSmallScreen ? 330 : 470 || isMediumScreen ? 410 : 660}
                      style={{
                        position: "absolute",
                        top: { xs: 100, md: 0 },
                        left: 100,
                        zIndex: -2,
                        opacity: 0.3, // Adjust opacity for a subtle background effect

                      }}
                      priority
                    />
                    <m.div
                      // initial={{ scale: 0.8, rotate: 0, opacity: 0 }}
                      animate={{ scale: 1, rotate: 360, opacity: 1 }}
                      transition={{
                        duration: 10,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      <Image
                        src="/assets/images/news/globe.svg"
                        alt="news-hero-graphic"

                        width={
                          isSmallScreen ? 250 : 450 || isMediumScreen ? 400 : 610
                        }
                        height={
                          isSmallScreen ? 250 : 450 || isMediumScreen ? 400 : 610
                        }
                        priority
                      />
                    </m.div>
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

        <NewsBlog />
      </Box>
    </MotionContainer >
  );
}
