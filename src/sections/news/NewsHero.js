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

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  zIndex: 1,
  overflow: "hidden",
  backgroundColor: "#060606", // Ensure this matches the hero image background
  [theme.breakpoints.up("lg")]: {
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
      background: theme.palette.background.default, // Adjust as needed
      clipPath: "polygon(100% 100%, 50% 100%, 75% 0, 100% 0)", // Slash effect visible on large screens
    },

  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignItems: "center",
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
      padding: theme.spacing(15)
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
      <RootStyle>
        <HeroImgStyle
          alt="hero"
          src="/assets/images/home/hero1.png"
          variants={varFade().inUp}
        />

        <Container>
          <ContentStyle>
            <Grid container>
              <Grid item xs={12} md={8}>
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
                      Discover the latest updates, expert opinions, <br />and in-depth
                      analysis shaping our world today.
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
                      justifyContent: "center"
                    }}
                  >
                    <Image
                      src="/assets/images/home/african-warrior-mask.png"
                      alt="news-hero-graphic"
                      width={
                        isSmallScreen ? 210 : 650 || isMediumScreen ? 370 : 610
                      }
                      height={
                        isSmallScreen ? 230 : 690 || isMediumScreen ? 396 : 650
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
    </MotionContainer>
  );
}
