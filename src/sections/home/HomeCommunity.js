import React, { useState } from "react";
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
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(15)
  }
}));

// ----------------------------------------------------------------------

export default function HomeCommunity() {
  const theme = useTheme();
  const [showQRCode, setShowQRCode] = useState(false); // State for toggling QR code visibility

  const handleButtonClick = () => {
    setShowQRCode(!showQRCode); // Toggle QR code visibility
  };

  return (
    <RootStyle sx={{
      textAlign: "start",
      mb: { xs: 10, md: 10 },
      // backgroundImage: `url('/assets/images/news/globe.svg')`,
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "contain",
      // height: "100%",
      // backgroundPosition: "left",

    }}>
      < Container
        component={MotionViewport}

      >
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 10, md: 10 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Stack
              direction={"row"}
              spacing={1}
              sx={{ justifyContent: "center" }}
            >
              <Typography variant="h2">Community</Typography>
              <Typography
                variant="h2"
                sx={{
                  backgroundImage: `linear-gradient(45deg, #FF8C42 , #02735E)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 600
                }}
              >
                Building
              </Typography>
            </Stack>
          </m.div>

          <Box>
            <m.div variants={varFade().inUp}>
              <Typography
                variant="body1"
                sx={{
                  width: { xs: "100%", md: "80%" },
                  mx: "auto",
                  textAlign: "center"
                }}
              >
                As the world moves toward decentralization, tokenized economies, and digital sovereignty,
                Africa must seize this opportunity to shape its own digital destiny. At Web 3 Africa Group, we
                believe in the power of collective action to drive change and innovation. Whether you’re a
                blockchain enthusiast, a policymaker, an educator, or simply passionate about the
                transformative potential of decentralized technology, there’s a place for you in our mission.            </Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography
                variant="body1"
                sx={{
                  width: { xs: "100%", md: "80%" },
                  mx: "auto",
                  textAlign: "center",
                  mt: 2
                }}
              >
                Be part of Africa’s leap into the global decentralized economy - connect, collaborate, and
                create with us!
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography
                variant="h6"
                sx={{
                  width: { xs: "100%", md: "80%" },
                  mx: "auto",
                  textAlign: "center",
                  mt: 2
                }}
              >
                Africa’s time is now. Let’s lead the revolution together!

              </Typography>
            </m.div>
          </Box>
        </Box>

        {/* QR Code Section */}
        {showQRCode && (
          <Box
            sx={{
              marginTop: 4,
              textAlign: "center",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Image
              src="/assets/images/home/qr-code.svg"
              alt="QR Code"
              sx={{
                width: 200,
                height: 200,
                boxShadow: theme.customShadows.z20,
                borderRadius: 2
              }}
            />
          </Box>
        )}

        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          <m.div variants={varFade().inUp}>
            <Button
              onClick={handleButtonClick}
              variant="contained"
              sx={{
                position: "relative",
                overflow: "hidden",
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                marginTop: 2,
                border: "2px solid transparent",
                borderRadius: 1,
                transition: "transform 0.3s ease",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                  transform: "translateY(-5px)"
                }
              }}
            >
              Join Our Telegram Community
            </Button>
          </m.div>
        </Box>


      </Container>
    </RootStyle>
  );
}
