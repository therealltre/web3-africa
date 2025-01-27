import { m } from "framer-motion";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { MotionContainer, varFade } from "../../components/animate";
import Image from "next/image";
import NewsBlog from "./NewsBlog";

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: "sticky",
  top: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  overflow: "hidden",
  backgroundColor: "#060606",
  [theme.breakpoints.up("sm")]: {
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
      background: "#060606",
      clipPath: "polygon(100% 100%, 45% 100%, 65% 0, 100% 0)",
    },
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
  },
}));

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  backgroundColor: "#060606",
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
    },
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
          src="/assets/images/news/news-hero.png"
          variants={varFade().inUp}
        />

        <Container>
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
                        color: "common.white",
                      }}
                    >
                      Stay Informed with <br /> Latest News <br /> & Insights
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: { xs: 18, lg: 24 },
                        marginTop: 2,
                        color: "common.white",
                      }}
                    >
                      Discover the latest updates, <br /> expert opinions, and
                      in-depth analysis <br /> shaping our world today.
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
                        opacity: 0.3,
                      }}
                      priority
                    />
                    <m.div>
                      <video
                        src="/assets/videos/davos-2025.mp4"
                        width={isSmallScreen ? 350 : 450 || isMediumScreen ? 500 : 610}
                        height={isSmallScreen ? 350 : 450 || isMediumScreen ? 500 : 610}
                        autoPlay
                        muted
                        loop
                        style={{
                          borderRadius: "50%", // To match the globe shape
                          objectFit: "cover",
                        }}
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
          zIndex: 2,
        }}
      >
        <NewsBlog />
      </Box>
    </MotionContainer>
  );
}
