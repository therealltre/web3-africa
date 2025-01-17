import PropTypes from "prop-types";

// @mui
import { Box, Container, Link, Stack, Typography } from "@mui/material";
//
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";

// ----------------------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default function MainLayout({ children }) {
  const { pathname } = useRouter();

  const isHome = pathname === "/";

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />

      {children}

      <Box sx={{ flexGrow: 1 }} />

      {/* {!isHome ? ( */}

      {/* <MainFooter /> */}
      <Box
        sx={{
          py: 5,
          textAlign: "center",
          position: "relative",
          bgcolor: "#060606"
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 5
            }}
          >
            <Image
              src="/assets/images/brand/w3a-logo.png"
              alt="brand name"
              width={324}
              height={140}
            />
          </Box>

          {/* <Logo sx={{ mb: 1, mx: "auto" }} /> */}

          <Typography
            variant="subtitle1"
            component="p"
            sx={{ color: "common.white" }}
          >
            © All rights reserved &nbsp;
            <NextLink href="/" style={{ textDecoration: "none" }}>
              <Link underline="none" sx={{ color: "common.white" }}>
                WEB3AFRICAGROUP
              </Link>
            </NextLink>
          </Typography>
        </Container>
      </Box>
      {/* ) : (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default',
          }}
        >
          <Container>
            <Logo sx={{ mb: 1, mx: 'auto' }} />

            <Typography variant="caption" component="p">
              © All rights reserved &nbsp;
              <Link href="#">BoilerPlate</Link>
            </Typography>
          </Container>
        </Box>
      )} */}
    </Stack>
  );
}
