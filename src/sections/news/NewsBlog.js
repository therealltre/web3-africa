import { m } from "framer-motion";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia
} from "@mui/material";
import { MotionContainer } from "../../components/animate";
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

const newsCards = [
  {
    title: "Exploring the Future of Web3 Technology",
    description:
      "Dive into the potential of decentralized technology and its impact on industries worldwide.",
    href: "/news/future-of-web3",
    image: "/assets/images/avatars/avatar_1.jpg"
  },
  {
    title: "The Rise of NFTs in Africa",
    description:
      "How African creators are leveraging NFTs to unlock new economic opportunities.",
    href: "/news/rise-of-nfts",
    image: "/assets/images/avatars/avatar_11.jpg"
  },
  {
    title: "Blockchain Education for the Next Generation",
    description:
      "Empowering students with knowledge of blockchain and decentralized finance.",
    href: "/news/blockchain-education",
    image: "/assets/images/avatars/avatar_21.jpg"
  }
];

export default function NewsBlog() {
  const theme = useTheme();

  return (
    <MotionContainer>
      <RootStyle>
        <Container>
          <ContentStyle>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: 36, lg: 48 },
                fontWeight: 700,
                textAlign: "center",
                mb: 5
              }}
            >
              News & Insights
            </Typography>
            <Grid container spacing={4}>
              {newsCards.map((news, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <Card
                    sx={{
                      position: "relative",
                      //   width: 500,
                      height: 300,
                      overflow: "hidden",
                      boxShadow: 3,
                      "&:hover": {
                        transform: "scale(1.05)",
                        transition: "transform 0.3s"
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={news.image}
                      alt={news.title}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 1
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 2,
                        color: "#fff",
                        background: "rgba(0, 0, 0, 0.6)",
                        padding: theme.spacing(2)
                      }}
                    >
                      <Typography variant="h6" fontWeight={700} gutterBottom>
                        {news.title}
                      </Typography>
                      <Typography variant="body2">
                        {news.description}
                      </Typography>
                      <CardActions>
                        <NextLink passHref href={news.href}>
                          <Button
                            variant="contained"
                            size="small"
                            sx={{
                              backgroundColor: theme.palette.primary.main,
                              "&:hover": {
                                backgroundColor: theme.palette.primary.dark
                              }
                            }}
                          >
                            Read More
                          </Button>
                        </NextLink>
                      </CardActions>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </MotionContainer>
  );
}
