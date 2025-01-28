import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid } from '@mui/material';
//
import { TextAnimate, MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage:
    'url(/assets/overlay1.svg), url(/assets/images/partnership/handshake.avif)',
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

export default function PatnershipHero() {
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="Partner" variants={varFade().inRight} sx={{ color: 'common.white' }} />
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate text="with" sx={{ mr: 2, color: 'common.white' }} />
            <TextAnimate text="us" sx={{ color: 'common.white' }} />
          </Box>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
