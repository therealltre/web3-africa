import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
// components
import { MotionContainer, varFade } from "../../components/animate";
import HomeFaq from "./HomeFaq";
import Image from "next/image";

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: "sticky", // Makes the section sticky
  top: 0, // Sticks to the top of the viewport
  backgroundColor: "#1e1e1e",
  zIndex: 1, // Lower z-index allows other sections to overlap this one
  width: "100%",
  height: "100vh",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignItems: "center",
  },
}));

const TiledBackground = styled(Box)(({ theme }) => ({
  position: "absolute", // Keeps the background positioned within the sticky container
  top: 0,
  left: 0,
  zIndex: -1, // Ensures the background is behind the content
  width: "100%",
  height: "100%",
  backgroundImage: "url('/assets/images/home/W3A-kente-Pattern.png')", // Path to the image
  backgroundRepeat: "repeat", // Tiling the image
  backgroundSize: "auto", // Keeps the original size of the image
  backgroundPosition: "top left", // Starts tiling from the top-left corner
}));

// ----------------------------------------------------------------------

export default function HomeStickySection() {
  return (
    <MotionContainer>
      <RootStyle>
        <TiledBackground />
      </RootStyle>

      <Box
        sx={{
          height: "auto", // Adjust this to match the height of your overlapping sections
          background: "linear-gradient(to bottom, #f4f4f4, #F4EBD9)", // Example background for the next section
          position: "relative",
          zIndex: 2, // Higher z-index to overlap the sticky Hero section
        }}
      >
        <HomeFaq />
      </Box>
    </MotionContainer>
  );
}
