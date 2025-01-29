import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
// 
import { TextAnimate, MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage:
    'url(/assets/overlay1.svg), url(/assets/images/partnership/partner-bg.svg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 660,
    padding: 0,
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center', // Default text alignment for small screens
  [theme.breakpoints.up('md')]: {
    textAlign: 'left', // Align text left on medium and larger screens
    position: 'absolute',
    bottom: theme.spacing(10),
  },
  display: 'flex', // Add flexbox
  justifyContent: 'center', // Center text horizontally on smaller screens
  alignItems: 'center', // Vertically center the text
  height: '100%', // Make sure the content takes full height
}));

// ----------------------------------------------------------------------

export default function PatnershipHero() {
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <Stack>
            <Box sx={{ display: 'inline-flex', mr: 2 }}>
              <TextAnimate text="Together" variants={varFade().inRight} sx={{ color: 'common.white' }} />
            </Box>
            <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
              <TextAnimate text="We Achieve" sx={{ mr: 2, color: 'common.white' }} />
              <TextAnimate text="More" sx={{ color: 'common.white' }} />
            </Box>

            <Box sx={{ mt: 3 }}>
              <m.div variants={varFade().inLeft}>
                <Typography variant="h4" sx={{ color: 'common.white', fontWeight: 400 }}>
                  Join us in building a future of innovation and growth.
                </Typography>
              </m.div>
            </Box>
          </Stack>


        </ContentStyle>

      </Container>
    </RootStyle>
  );
}
