import { m } from "framer-motion";
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  Button,
  Card,
  CardActions,
  CardMedia,
  Link
} from "@mui/material";
import { MotionContainer, varFade } from "../../components/animate";
import NextLink from "next/link";
import { useState } from "react";
import Image from "next/image";


// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  paddingTop: theme.spacing(15),
  position: "sticky",
  top: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(15),
    display: "flex",
    alignItems: "center"
  }

}));

const ContentStyle = styled((props) => <Stack {...props} />)(({ theme }) => ({
  zIndex: 2,
  maxWidth: 1440,
  margin: "10",
  position: "relative",
  textAlign: "start",
  display: "flex",
  justifyContent: "start",
  padding: theme.spacing(10, 2),
  [theme.breakpoints.up("md")]: {
    textAlign: "start",
    // padding: theme.spacing(15)
  }
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === "dark"
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    cursor: "pointer",
    position: "relative", // Enable positioning for overlay
    border: 0,
    maxWidth: 668,
    minWidth: 358,
    minHeight: 350,
    // minHeight: 272,
    maxHeight: 480,
    margin: "auto",
    textAlign: "start",
    overflow: "hidden", // Ensure image doesn't overflow the card
    // padding: theme.spacing(5, 5, 5),
    boxShadow: theme.customShadows.z12,
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor: "transparent"
      //   backgroundColor:
      //     theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
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

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(3),
  background: `linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)`,

  // background: `linear-gradient(to top, ${theme.palette.grey[900]} 0%,${alpha(
  //   theme.palette.grey[900],
  //   0
  // )} 100%)`,

  color: theme.palette.common.white
}));

// ----------------------------------------------------------------------

const videoList = [
  {
    title: "Web3Africa News",
    thumbnail: "/assets/videos/thumbnail/web3africa-img.png",
    videoSrc: "/assets/videos/news.mp4",
    type: "mp4"
  },
  {
    title: "Exploring Blockchain",
    thumbnail: "/assets/videos/thumbnail/web3africa-img.png",
    videoSrc: "https://www.youtube.com/embed/FExp9YuTzbY",
    type: "youtube"
  },
  {
    title: "The Rise of NFTs",
    thumbnail: "/assets/videos/thumbnail/web3africa-img.png",
    videoSrc: "/assets/videos/news.mp4",
    type: "mp4"
  }
];

const newsCards = [
  {
    title: "Blockchain & Financial Inclusion",
    description:
      "Empowering the Unbanked with CBDCs A conversation between Ourfounder Del Titus Bawuah, Head of fintech Kwame Oppong and the University of Ethereum.",
    href: "https://blog.ueth.org/p/blockchain-and-financial-inclusion",
    image: "/assets/images/news/blockchain-financial-inclusion.png"
  },
  {
    title: "What Is Web 3.0 and Can It Help End Extreme Poverty?",
    description:
      "We spoke to a Ghanaian techpreneur to find out how Web 3.0 can alleviate poverty for Africa’s youth.",
    href: "https://www.globalcitizen.org/en/content/what-is-web-30-and-can-it-end-extreme-poverty/",
    image: "/assets/images/news/what-is-web3.png"

  },
  {
    title: "Vitalik Buterin Headlines The Web 3 Accra Annual “Africa Summit",
    description:
      "",
    href: "https://newsghana.com.gh/vitalik-buterin-mo-ghoneim-and-kwame-a-a-opoku-debate-the-value-of-web3-to-africa-at-the-inaugural-africa-web-3-summit-in-accra/",
    image: "/assets/images/news/vitalik-buterin-headlines-the-web3-accra.png"
  },
  {
    title: "Del Titus Bawuah Addresses the University of the United Nations",
    description:
      "at EDCON 2024 in Japan alongside 24 other global leaders, hosted by Vitalik Buterin and the Ethereum Foundation.",
    href: "https://www.youtube.com/live/7dPKrzSVUTs",
    image: "/assets/images/news/blog-4.png"
  }
];

export default function NewsBlog() {
  const theme = useTheme();
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);

  return (
    <MotionContainer>
      <RootStyle>
        <Container>
          {/* Section 1 */}
          <ContentStyle>
            <Box
              sx={{
                textAlign: "start",
                mb: { xs: 10, md: 10 }
              }}
            >
              <m.div variants={varFade().inDown}>
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
                  Videos
                </Typography>
              </m.div>
            </Box>


            <Grid container spacing={2}>
              {/* Video Player */}
              <Grid item xs={12} md={8}>
                {currentVideo.type === "mp4" ? (
                  <video
                    key={currentVideo.videoSrc} // Force re-render for MP4 videos
                    width="100%"
                    height="450"
                    controls
                    src={currentVideo.videoSrc}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    key={currentVideo.videoSrc} // Force re-render for YouTube videos
                    width="100%"
                    height="450"
                    src={currentVideo.videoSrc}
                    title="Video Player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </Grid>

              {/* Video List */}
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    padding: theme.spacing(2),
                    height: "100%",
                    overflowY: "auto",
                  }}
                >
                  {videoList.map((video, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                        cursor: "pointer",
                        "&:hover": { opacity: 0.8 },
                      }}
                      onClick={() => setCurrentVideo(video)}
                    >
                      <CardMedia
                        component="img"
                        image={video.thumbnail}
                        alt={video.title}
                        sx={{
                          width: 100,
                          height: 56,
                          borderRadius: 1,
                          objectFit: "cover",
                        }}
                      />
                      <Typography variant="body1" fontWeight={500}>
                        {video.title}
                      </Typography>
                    </Box>
                  ))}
                </Card>
              </Grid>
            </Grid>
          </ContentStyle>

          {/* Section 2 */}
          <RootStyle>
            <Container sx={{ backgroundColor: theme.palette.background.default }}>
              <ContentStyle>
                <Box
                  sx={{
                    textAlign: "start",
                    mb: { xs: 10, md: 10 }
                  }}
                >
                  <m.div variants={varFade().inDown}>
                    <Stack
                      direction={{ xs: "column", md: "row" }}
                      spacing={1}
                    // sx={{ justifyContent: "start" }}
                    >
                      <Typography variant="h2">News &</Typography>
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
                        Insights
                      </Typography>
                    </Stack>
                  </m.div>
                </Box>

                <Box
                  sx={{
                    display: "grid",
                    gap: { xs: 4, md: 3 },
                    gridTemplateColumns: {
                      xs: "repeat(1, 1fr)",
                      md: "repeat(2, 1fr)",
                      lg: "repeat(2, 1fr)"
                    }
                  }}
                >

                  {newsCards.map((news, index) => (
                    <m.div key={news.title} variants={varFade().inUp}>
                      <NextLink href={news.href} passHref>
                        <Link
                          underline="none"
                          sx={{
                            textDecoration: "none",
                            display: "block",
                            cursor: "pointer"
                          }}
                        >

                          <CardStyle
                            sx={{
                              // maxWidth: { xs: "100%", sm: 360, md: 400, lg: 640 },
                              padding: { xs: 3, md: 5 },
                              transition: "transform 0.3s ease, box-shadow 0.3s ease", // Added box-shadow for a smooth hover effect
                              "&:hover": {
                                color: "#fff", // Text color changes to white on hover
                                borderRadius: 1, // Border radius stays consistent
                                transform: "translateY(-5px)", // Moves the card up by 5px
                                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)" // Adds a subtle shadow for depth
                              }
                            }}
                          >
                            <Image
                              src={news.image}
                              alt={news.title}
                              layout="fill"
                              objectFit="cover"
                              sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectfit: "cover" // Ensure the image covers the card
                              }}
                            />


                            <ContentWrapper sx={{ textAlign: "start" }}>
                              <Typography variant="h5" paragraph>
                                {news.title}
                              </Typography>
                              <Typography variant="body1">
                                {news.description}
                              </Typography>
                            </ContentWrapper>
                          </CardStyle>
                        </Link>
                      </NextLink>
                    </m.div>
                  ))}

                </Box>
              </ContentStyle>
            </Container>
          </RootStyle>
        </Container >
      </RootStyle >
    </MotionContainer >
  );
}
