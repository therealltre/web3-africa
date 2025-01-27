// @mui
import { Container, Grid, Typography, Box, Stack, Button } from '@mui/material';
import { useTheme, styled } from "@mui/material/styles";

//framermotion
import { MotionViewport, varFade } from '../../components/animate';
import { m } from 'framer-motion';
// components
import { FaqsForm, FaqsList } from '../faqs';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),

  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

export default function HomeFaq() {
  const theme = useTheme();
  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 10, md: 10 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }} >
              FAQS
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Stack direction={'row'} spacing={1} justifyContent={'center'}>
              <Typography variant="h2">Looking For</Typography>
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
                Answers?
              </Typography>
            </Stack>
          </m.div>

        </Box>
        <Grid container spacing={2} >
          <Grid item xs={12} md={12}>
            <FaqsList />
          </Grid>

          {/* <Grid item xs={12} md={6}>
            <FaqsForm />
          </Grid> */}
        </Grid>
        <Box
          sx={{
            textAlign: 'center',
            mt: { xs: 10, md: 10 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Stack direction={'row'} spacing={1} justifyContent={'center'}>
              <Typography variant="h4">Haven't found the right help?</Typography>

            </Stack>

            <Button
              variant="contained"
              href={'/contact-us'}
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
              Contact Us
            </Button>
          </m.div>
        </Box>
      </Container>
    </RootStyle>
  );
}
