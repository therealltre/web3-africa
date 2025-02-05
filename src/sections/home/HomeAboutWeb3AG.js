import { m } from "framer-motion";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import { Box, Button, Card, Container, Link, Typography } from "@mui/material";
// components
import Image from "../../components/Image";
import { MotionViewport, varFade } from "../../components/animate";
import NextLink from "next/link";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  // backgroundImage: `url('/assets/images/home/african-warrior-dance.png')`, // Replace with the actual path of your image
  // backgroundRepeat: "no-repeat",
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

// Image Wrapper for overlay styling
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

const CARDS = [
  {
    icon: "/assets/images/home/card-image-placeholder.png",
    title: "Blockchain 101",
    href: "#1",
    description:
      "The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects."
  },
  {
    icon: "/assets/images/home/card-image-placeholder.png",
    title: "Block Chain Development",
    href: "#2",
    description:
      "Easy to customize and extend each component, saving you time and money."
  },
  {
    icon: "/assets/images/home/card-image-placeholder.png",
    title: "AI Modeling",
    href: "#3",
    description:
      "Consistent design in colors, fonts ... makes brand recognition easy."
  },
  {
    icon: "/assets/images/home/card-image-placeholder.png",
    title: "AI Structuring",
    href: "#4",
    description:
      "Consistent design in colors, fonts ... makes brand recognition easy."
  }
];
// ----------------------------------------------------------------------

export default function HomeAboutWeb3AG() {
  const theme = useTheme();

  const isLight = theme.palette.mode === "light";

  return (
    <RootStyle>
      <Container
        component={MotionViewport}
        sx={{
          backgroundImage: `url('/assets/images/home/african-warrior-dance.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "right",
          padding: theme.spacing(2, 2)
        }}
      >
        <Box
          sx={{
            textAlign: "start",
            mb: { xs: 10, md: 10 }
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography variant="h1">ABOUT US</Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="body2"
              sx={{ width: { xs: 300, lg: 745 }, marginTop: 2 }}
            >
              Web3 Africa Group (W3AG) is a visionary organization committed to
              spearheading the decentralized digital revolution across Africa.
              As the parent company of various Web 3 hubs across the continent,
              W3AG aims to establish innovation centers that will drive
              education, policy advocacy, and community development in the Web 3
              ecosystem. Our flagship hub, Web 3 Accra (W3A), based in Ghana,
              serves as a pioneering incubator and a launchpad for
              entrepreneurs, creators, and innovators within the decentralized
              space.
            </Typography>

            <NextLink href={"/about-us"} passhref="true">
              <Link>
                <Button
                  variant="contained"
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "#fff",
                    marginTop: 2,
                    color: "#060606",
                    border: "2px solid transparent", // Ensures a default border is present
                    borderRadius: 1, // Border radius stays consistent
                    transition:
                      "color 0.3s ease, background-color 0.3s ease, transform 0.3s ease",
                    "&:hover": {
                      color: "#fff", // Text color changes to white on hover

                      borderRadius: 1, // Border radius stays consistent
                      backgroundColor: "#6ADD0B", // Background changes to black
                      transform: "translateY(-5px)" // Moves the button up by 5px on hover
                    }
                  }}
                >
                  More About Us
                </Button>
              </Link>
            </NextLink>
          </m.div>
        </Box>

        <Box
          sx={{
            display: "grid",
            gap: { xs: 4, md: 3 },
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)"
            }
          }}
        >
          {CARDS.map((card, index) => (
            <m.div key={card.title} variants={varFade().inUp}>
              <NextLink href={card.href} passHref>
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
                      maxWidth: { xs: "100%", sm: 360, md: 400, lg: 640 },
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
                      src={card.icon}
                      alt={card.title}
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
                        {card.title}
                      </Typography>
                      <Typography variant="body2">
                        {card.description}
                      </Typography>
                    </ContentWrapper>
                  </CardStyle>
                </Link>
              </NextLink>
            </m.div>
          ))}
        </Box>

        {/* right */}
        <Box
          sx={{
            textAlign: "end",
            mb: { xs: 10, md: 10 }
          }}
        >
          {/* <BgImage /> */}
          <m.div variants={varFade().inUp}>
            <Typography variant="h1">WHY W3A?</Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="body2"
              sx={{
                width: { xs: 300, lg: 745 },
                marginTop: 2,
                textAlign: "end",
                display: "inline-block",
                justifyContent: "center"
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Mi in maecenas sodales
              velit molestie pharetra id consequat. Viverra bibendum id diam id
              eu malesuada montes in dui. Lectus diam auctor donec euismod
              semper. In tortor dictum sit cursus vulputate non.
            </Typography>
          </m.div>
        </Box>
      </Container>
      {/* <Box sx={{ height: { md: "100vh" } }} /> */}
    </RootStyle>
  );
}
