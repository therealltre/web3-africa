// @mui
import { styled } from "@mui/material/styles";
import { Container, Box } from "@mui/material";
// framermotion
import { m } from "framer-motion";
// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  backgroundColor: theme.palette.background.default,
  textAlign: "center",
  position: "relative",
  display: "flex",
}));

const TickerContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
}));

const TickerContent = styled(m.div)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(5),
}));

const TickerItem = styled("div")(({ theme }) => ({
  flexShrink: 0,
  width: 150,
  height: 80,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const FadeOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  width: "10%",
  pointerEvents: "none",
  background: `linear-gradient(to right, ${theme.palette.background.default} 0%, rgba(255, 255, 255, 0) 100%)`,
  zIndex: 1,
}));

const LeftFadeOverlay = styled(FadeOverlay)({
  left: 0,
});

const RightFadeOverlay = styled(FadeOverlay)({
  right: 0,
  transform: "rotate(180deg)",
});

// ----------------------------------------------------------------------

export default function TrustedBy() {
  const logos = [
    "/assets/images/home/bank-of-ghana.png",
    "/assets/images/home/gse.png",
    "/assets/images/home/telos-x.png",
    "/assets/images/home/global_citizen.png",
  ];

  return (
    <RootStyle>
      <Container>
        <TickerContainer>
          <LeftFadeOverlay />
          <TickerContent
            animate={{ x: ["0%", "-30%"] }}
            transition={{ repeat: Infinity, duration: 20, repeatType: "loop", ease: "linear" }}
          >
            {/* Duplicate logos for infinite loop */}
            {logos.concat(logos).map((logo, index) => (
              <TickerItem key={index}>
                <img
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
              </TickerItem>
            ))}
          </TickerContent>
          <RightFadeOverlay />
        </TickerContainer>
      </Container>
    </RootStyle>
  );
}
