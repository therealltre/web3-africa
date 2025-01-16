import { m } from "framer-motion";
// @mui
import { Box, Container, Typography, Grid } from "@mui/material";
// components
import Image from "../../components/Image";
import { MotionViewport, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

export default function AboutVision() {
  return (
    <Container component={MotionViewport} sx={{ mt: 10 }}>
      <Box
        sx={{
          mb: 10,
          position: "relative",
          borderRadius: 2,
          overflow: "hidden"
        }}
      >
        <Image
          src="/assets/images/home/about-img.png"
          // src="/assets/images/about/vision.jpg"
          alt="about-vision"
          effect="black-and-white"
        />

        <Box
          sx={{
            bottom: { xs: 24, md: 30 },
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            position: "absolute",
            justifyContent: "center"
          }}
        >
          {[
            "partner_bog",
            "partner_global_citizen",
            "partner_gse",
            "partner_telos-x",
            "partner_un-digital-library"
          ].map((logo) => (
            <m.div key={logo} variants={varFade().in}>
              <Image
                alt={logo}
                src={`/assets/images/about/${logo}.png`}
                sx={{
                  m: { xs: 1.5, md: 3 },
                  height: { xs: 24, md: 64 }
                }}
              />
            </m.div>
          ))}
        </Box>
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <m.div variants={varFade().inUp}>
            <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
              We are dedicated to empowering entrepreneurs, creators, and
              communities with the tools and knowledge needed to thrive in the
              decentralized economy, while shaping a sustainable and inclusive
              digital future for the continent.
            </Typography>
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );
}
