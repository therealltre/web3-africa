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
  Link,
  Divider
} from "@mui/material";
import { MotionContainer, varFade } from "../../components/animate";
import NextLink from "next/link";
import { useState } from "react";
import Image from "next/image";

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  paddingTop: theme.spacing(5),
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
  margin: 10,
  position: "relative",
  textAlign: "start",
  display: "flex",
  justifyContent: "start",
  padding: theme.spacing(10, 2),
  [theme.breakpoints.up("md")]: {
    textAlign: "start",
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
    maxWidth: "100%",
    minWidth: 200,
    minHeight: 200,
    maxHeight: 480,
    margin: "auto",
    textAlign: "center",
    textDecoration: "none",
    overflow: "hidden", // Ensure image doesn't overflow the card
    padding: theme.spacing(0), // Removed padding that could affect image size

    boxShadow: theme.customShadows.z12,
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor: "#fff"
    },
    "&.cardLeft": {
      [theme.breakpoints.up("md")]: { marginTop: -1 }
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
    title: "Del Titus at Binance Blockchain Week 2024",
    thumbnail: "https://img.youtube.com/vi/8ymXjp0lmPQ/maxresdefault.jpg",
    videoSrc: "https://www.youtube.com/embed/8ymXjp0lmPQ",
    type: "youtube"
  },
  {
    title: "Del Titus at TedxAccra",
    thumbnail: "https://img.youtube.com/vi/cpFv_bQh_tY/maxresdefault.jpg",
    videoSrc: "https://www.youtube.com/embed/cpFv_bQh_tY",
    type: "youtube"
  }
];

const newsCards = [
  {
    title: "Blockchain & Financial Inclusion",
    description:
      "Empowering the Unbanked with CBDCs A conversation between Ourfounder Del Titus Bawuah, Head of fintech Kwame Oppong and the University of Ethereum.",
    href: "https://blog.ueth.org/p/blockchain-and-financial-inclusion",
    image: "/assets/images/news/blockchain-financial-inclusion.png",
    date: 'Dec 20, 2023',
  },
  {
    title: "What Is Web 3.0 and Can It Help End Extreme Poverty?",
    description:
      "We spoke to a Ghanaian techpreneur to find out how Web 3.0 can alleviate poverty for Africa’s youth.",
    href: "https://www.globalcitizen.org/en/content/what-is-web-30-and-can-it-end-extreme-poverty/",
    image: "/assets/images/news/what-is-web3.png",
    date: 'Nov 4, 2022',

  },
  {
    title: "Vitalik Buterin Headlines The Web 3 Accra Annual “Africa Summit",
    description:
      "",
    href: "https://newsghana.com.gh/vitalik-buterin-mo-ghoneim-and-kwame-a-a-opoku-debate-the-value-of-web3-to-africa-at-the-inaugural-africa-web-3-summit-in-accra/",
    image: "/assets/images/news/vitalik-buterin-headlines-the-web3-accra.png",
    date: 'March 4, 2023',
  },
  {
    title: "Del Titus Bawuah Addresses the University of the United Nations",
    description:
      "at EDCON 2024 in Japan alongside 24 other global leaders, hosted by Vitalik Buterin and the Ethereum Foundation.",
    href: "https://www.youtube.com/live/7dPKrzSVUTs",
    image: "/assets/images/news/blog-4.jpeg",
    date: 'March 4, 2023',
  }
];

const announcements = [
  {
    href: '#',
    title: "Announcement Title 1",
    description: "This is the first announcement description. Keep it brief and to the point.",
  },
  {
    href: '#',
    title: "Announcement Title 2",
    description: "Another important message or announcement can go here.",
  },
  {
    href: '#',
    title: "Announcement Title 3",
    description: "Feel free to add as many announcements as you like.",
  },
  {
    href: '#',
    title: "Announcement Title 4",
    description: "Feel free to add as many announcements as you like.",
  },
  {
    href: '#',
    title: "Announcement Title 5",
    description: "Feel free to add as many announcements as you like.",
  },
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
                mb: 5
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
                    autoPlay
                    muted
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
                <Typography variant="h5">
                  {currentVideo.title}
                </Typography>
              </Grid>

              {/* Video List */}
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    padding: theme.spacing(2),
                    height: "100%",
                    maxHeight: 450, // Set maximum height
                    overflowY: "auto", // Enable scrolling
                    boxShadow: "none", // Remove box shadow
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mb: 2, textAlign: "start" }}
                  >
                    What's New
                  </Typography>
                  {videoList.map((video, index) => (
                    <Box key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
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
                            height: 70,
                            borderRadius: 1,
                            objectfit: "cover",
                          }}
                        />
                        <Typography variant="body1" fontWeight={500}>
                          {video.title}
                        </Typography>
                      </Box>
                      {index < videoList.length - 1 && <Divider sx={{ my: 2 }} />}
                    </Box>
                  ))}
                </Card>
              </Grid>

            </Grid>
          </ContentStyle>

          {/* Section 2 */}
          <Container>
            <ContentStyle>
              <Grid container spacing={3}>
                {/* Left - News Grid */}
                <Box
                  sx={{
                    textAlign: "start",
                    mb: { xs: 10, md: 5 }
                  }}
                >
                  <m.div variants={varFade().inDown}>
                    <Stack
                      direction={{ xs: "column", md: "row" }}
                      spacing={1}
                    >
                      <Typography variant="h2">News</Typography>
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
                        Highlights
                      </Typography>
                    </Stack>
                  </m.div>
                </Box>


                <Grid item xs={12} md={8}>
                  <Box
                    sx={{
                      display: "grid",
                      gap: { xs: 4, md: 3 },
                      gridTemplateColumns: {
                        xs: "repeat(1, 1fr)",
                        md: "repeat(1, 1fr)",
                      },
                      mx: 'auto',
                      height: 650, // Set fixed height
                      overflowY: "auto", // Allow vertical scrolling
                    }}
                  >
                    {newsCards.map((news, index) => (
                      <m.div key={news.title} variants={varFade().inUp}>
                        <NextLink href={news.href} passHref style={{ textDecoration: "none" }}>
                          <Link
                            underline="none"
                            sx={{
                              textDecoration: "none",
                              display: "block",
                              cursor: "pointer",
                            }}
                          >
                            <CardStyle
                              sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                gap: 2,
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                  transform: "translateY(-5px)",
                                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                                },
                              }}
                            >
                              {/* Image Section */}
                              <Box
                                sx={{
                                  position: "relative",
                                  minWidth: { md: 200 },
                                  height: { xs: 200, md: "auto" },
                                  flexShrink: 0,
                                  overflow: "hidden",
                                  borderRadius: 1,
                                }}
                              >
                                <Image
                                  src={news.image}
                                  alt={news.title}
                                  layout="fill"
                                  objectfit="cover"
                                />
                              </Box>

                              {/* Content Section */}
                              <Stack spacing={2} sx={{ textAlign: "start", m: 2 }}>
                                <Typography variant="subtitle2" color="text.secondary">
                                  {news.date}
                                </Typography>
                                <Typography variant="h5" fontWeight="bold">
                                  {news.title}
                                </Typography>
                                <Typography variant="body1">{news.description}</Typography>
                              </Stack>
                            </CardStyle>
                          </Link>
                        </NextLink>
                      </m.div>
                    ))}
                  </Box>
                </Grid>

                {/* Right - Announcement Section */}
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      padding: 3,
                      height: 650,
                      boxShadow: "none",
                      border: (theme) => `1px solid ${theme.palette.divider}`,
                      borderRadius: 2,
                      background: "#fff",
                      overflowY: "auto", // Allow vertical scrolling
                    }}
                  >
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{ mb: 3, textAlign: "start" }}
                    >
                      Announcements
                    </Typography>
                    <Stack spacing={3}>
                      {announcements.map((announcement, index) => (
                        <Box key={index}>
                          <Typography variant="h6">{announcement.title}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {announcement.description}
                          </Typography>
                          <Divider sx={{ my: 2 }} />
                        </Box>
                      ))}
                    </Stack>
                  </Card>
                </Grid>
              </Grid>
            </ContentStyle>
          </Container>
        </Container>
      </RootStyle>
    </MotionContainer>
  );
}
