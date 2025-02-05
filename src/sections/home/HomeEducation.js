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
import NextLink from "next/link";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  //   paddingBottom: theme.spacing(15),
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
    // height: "100%",
    height: 'auto',
    margin: "auto",
    textAlign: "start",
    padding: theme.spacing(5, 5, 5),
    boxShadow: theme.customShadows.z12,
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor: "#fff",
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

// Image Wrapper for overlay styling
const ContentWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(3),
  background: `linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)`,
  color: theme.palette.common.white
}));

const CARDS = [
  {
    backgroundImage: "/assets/images/home/blockchain-development.svg",
    title: "Bridging the Knowledge Gap",
    href: "#1",
    description:
      "Web 3 technologies—blockchain, decentralized finance (DeFi), tokenization, and digital identity—offer Africa an unprecedented opportunity to leapfrog traditional financial and technological barriers. However, widespread adoption requires accessible, high-quality education that demystifies these innovations and showcases their real-world applications."
  },
  {
    backgroundImage: "/assets/images/home/digital-assets.svg",
    title: "Our Approach",
    href: "#2",
    description: {
      intro: "We are committed to building a Web 3-literate continent through:",
      points: [
        "Workshops & Training Programs – Hands-on learning experiences tailored for entrepreneurs, developers, and creatives.",
        "Policy & Regulatory Awareness – Equipping governments and institutions with the insights to create progressive Web 3 policies.",
        "University & Institutional Partnerships – Integrating Web 3 education into curricula to foster the next generation of blockchain leaders.",
        "Public Engagement & Media Initiatives – Utilizing content, podcasts, and digital campaigns to inform and inspire communities."
      ]
    }
  },
  {
    backgroundImage: "/assets/images/home/blockchain-education.svg",
    title: "A Decentralized Future Starts with Knowledge",
    href: "#3",
    description:
      "We envision an Africa where Web 3 is not just understood, but actively harnessed to drive financial inclusion, innovation, and digital sovereignty. Through strategic education and awareness, we aim to bridge the gap between potential and impact, ensuring that Africa leads the charge in the decentralized revolution."
  }
];



const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

// ----------------------------------------------------------------------

export default function HomeEducation() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "dark";

  return (
    <RootStyle>
      <Container
        component={MotionViewport}
        sx={{
          textAlign: "start",
          mb: { xs: 10, md: 10 },
          backgroundImage: `url('/assets/images/home/african-woman-head.png')`,
          // backgroundImage: `url('/assets/illustrations/kente-pattern.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "100%",
          backgroundPosition: "right"
        }}
      >
        <Box
          sx={{
            textAlign: "start",
            mb: { xs: 10, md: 10 }
          }}
        >
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
                <Typography variant="h2">Education &</Typography>
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
                  Awareness
                </Typography>
              </Stack>
            </m.div>


            <m.div variants={varFade().inUp}>
              <Typography
                variant="body1"
                sx={{
                  width: { xs: "100%", md: "80%" }
                }}
              >
                At Web 3 Africa Group, we believe that education and awareness are the cornerstones of Africa’s digital and economic transformation. Our mission is to empower individuals, businesses, and policymakers with the knowledge and skills needed to navigate and leverage the decentralized economy.
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <Typography
                variant="body1"
                sx={{
                  width: { xs: "100%", md: "80%", },
                  mt: 2
                }}
              >
                Join us in shaping an informed and empowered Web 3 Africa
              </Typography>
            </m.div>

          </Box>
        </Box>

        {/* <ContentStyle
          // sx={{
          //   backgroundImage: `url('/assets/images/home/bg-african-pattern.png')`,
          //   // backgroundImage: `url('/assets/illustrations/kente-pattern.svg')`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   zindex: 1
          // }}
        > */}
        <Box
          sx={{
            display: "grid",
            gap: { xs: 4, md: 3 },
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(1, 1fr)",
              lg: "repeat(3, 1fr)"
            }
          }}
        >
          {CARDS.map((card, index) => (
            <Grid item xs={12} lg={6} key={index}>
              <m.div variants={varFade().inUp}>
                <CardStyle
                  sx={{
                    padding: { xs: 3, md: 5 },
                    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Added box-shadow for a smooth hover effect
                    "&:hover": {
                      borderRadius: 2, // Border radius stays consistent
                      transform: "translateY(-5px)", // Moves the card up by 5px
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)" // Adds a subtle shadow for depth
                    }
                  }}
                >
                  <Image
                    src={card.backgroundImage}
                    alt={card.title}
                    sx={{
                      mb: 3,
                      width: 60,
                      height: 60,
                      filter: (theme) => shadowIcon(theme.palette.primary.main),
                      ...(index === 0 && {
                        filter: (theme) => shadowIcon(theme.palette.info.main)
                      }),
                      ...(index === 1 && {
                        filter: (theme) => shadowIcon(theme.palette.error.main)
                      })
                    }}
                  />
                  <Typography
                    variant="h5"
                    paragraph
                    sx={{ textAlign: "start" }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      textAlign: "start"
                    }}
                  >
                    {typeof card.description === "object" ? (
                      <>
                        <Typography variant="body1" fontWeight="bold">
                          {card.description.intro}
                        </Typography>
                        <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
                          {card.description.points.map((point, idx) => (
                            <li key={idx} style={{ marginBottom: "6px" }}>{point}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      card.description
                    )}
                  </Typography>




                </CardStyle>
              </m.div>
            </Grid>
          ))}
        </Box>
        {/* </ContentStyle> */}
      </Container>
    </RootStyle>
  );
}
