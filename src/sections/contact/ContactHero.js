import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
//
import { TextAnimate, MotionContainer, varFade } from '../../components/animate';
import SocialsButton from '@/components/SocialsButton';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage:
    'url(/assets/overlay1.svg), url(/assets/images/contact/contact-us.avif)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 660,
    padding: 0,
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function ContactHero() {
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="Where" variants={varFade().inRight} sx={{ color: 'common.white' }} />
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate text="to" sx={{ mr: 2, color: 'common.white' }} />
            <TextAnimate text="find" sx={{ mr: 2, color: 'common.white' }} />
            <TextAnimate text="us?" sx={{ color: 'common.white' }} />
          </Box>

          <Grid container spacing={5} sx={{ mt: 5, }}>
            <Stack alignItems="center" sx={{ mt: 2, mb: 1 }}>
              <SocialsButton sx={{ color: "common.white", width: 80, height: 80 }} />
            </Stack>

          </Grid>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
