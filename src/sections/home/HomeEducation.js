import { m } from "framer-motion";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  Container,
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

  // background: `linear-gradient(to top, ${theme.palette.grey[900]} 0%,${alpha(
  //   theme.palette.grey[900],
  //   0
  // )} 100%)`,

  color: theme.palette.common.white
}));

const CARDS = [
  {
    backgroundImage: "/assets/images/home/card-image-placeholder.png",
    title: "Blockchain Development",
    href: "#1",
    description:
      "Leading the development of decentralized infrastructure across Africa, Web 3 Africa Group builds scalable blockchain solutions to enhance transparency, efficiency, and financial inclusion. Our innovative technologies aim to drive Africa’s digital transformation and economic growth."
  },
  {
    backgroundImage: "/assets/images/home/card-image-placeholder.png",
    title: "Digital Assets Policy Frameworks",
    href: "#2",
    description:
      "Partnering with governments and policymakers, we strive to establish robust legal frameworks that encourage innovation while ensuring regulatory compliance. Our mission is to legitimize digital assets in Africa, positioning the continent as a global leader in the decentralized economy."
  },
  {
    backgroundImage: "/assets/images/home/card-image-placeholder.png",
    title: "Blockchain Education",
    href: "#3",
    description:
      "Web 3 Africa Group is dedicated to equipping individuals with essential knowledge and skills for success in blockchain and digital asset industries. Through partnerships and educational initiatives, we lay the foundation for a new generation of African innovators and leaders in Web 3."
  }
];

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
                Lorem ipsum dolor sit amet consectetur. Mi in maecenas sodales
                velit molestie pharetra id consequat. Viverra bibendum id diam
                id eu malesuada montes in dui. Lectus diam auctor donec euismod
                semper. In tortor dictum sit cursus vulputate non.
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
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)"
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
                      src={card.backgroundImage}
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
                      <Typography variant="body1">
                        {card.description}
                      </Typography>
                    </ContentWrapper>
                  </CardStyle>
                </Link>
              </NextLink>
            </m.div>
          ))}
        </Box>
        {/* </ContentStyle> */}

        <Box
          sx={{
            textAlign: "center",
            marginTop: 2
          }}
        >
          <m.div variants={varFade().inUp}>
            <NextLink href="/about-us" passHref>
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
                >
                  View More
                </Button>
              </Link>
            </NextLink>
          </m.div>
        </Box>
      </Container>
    </RootStyle>
  );
}
