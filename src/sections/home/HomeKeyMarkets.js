import { m } from "framer-motion";
// @mui
import { useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Stack,
  Typography
} from "@mui/material";
// components
import { MotionViewport, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),

  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(5)
  }
}));

// ----------------------------------------------------------------------

export default function HomeKeyMarkets() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Container
        component={MotionViewport}
        sx={{
          textAlign: "start",
          position: "relative",
          height: "100%",
          mb: { xs: 10, md: 0 },
        }}
      >


        {/* Content Block */}
        <Box
          sx={{
            textAlign: "center",
            position: "relative", // Ensure the content stacks above the SVG
            zIndex: 1
          }}
        >
          <m.div variants={varFade().inDown}>
            <Stack
              direction={"row"}
              spacing={1}
              sx={{ justifyContent: "center" }}
            >
              <Typography variant="h2">Our Key</Typography>
              <Typography
                variant="h2"
                sx={{
                  backgroundImage: `linear-gradient(45deg, #FF8C42 , #02735E)`,
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 600
                }}
              >
                Markets
              </Typography>
            </Stack>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="body1"
              sx={{
                width: { xs: "100%", md: "80%" },
                mx: "auto",
                textAlign: "center"
              }}
            >
              With our internal research and surveys conducted, we have
              identified the top 10 African countries leading in cryptocurrency
              adoption, laying the foundations for the development of Web 3
              infrastructure for the continent. These countries demonstrate the
              role cryptocurrency is playing in solving unique economic
              challenges, especially in cross-border payments, remittances, and
              as a hedge against inflation.
            </Typography>
          </m.div>
        </Box>

        {/* SVG positioned behind the content */}
        <Box
          sx={{
            position: "relative",
            top: 0,
            left: 0,
            width: '100%',
            height: { xs: 400, sm: 500, md: 700 }, // Adjust height for different screen sizes
            zIndex: 0, // Place it behind other content
            backgroundImage: `url('/assets/images/home/market-area.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // Use 'contain' for small screens and 'cover' for larger ones
            backgroundPosition: "center"
          }}
        />
      </Container>
    </RootStyle>
  );
}
