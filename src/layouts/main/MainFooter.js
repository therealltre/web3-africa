// next
import NextLink from "next/link";
// @mui
import { styled } from "@mui/material/styles";
import {
  Grid,
  Link,
  Divider,
  Container,
  Typography,
  Stack
} from "@mui/material";
// routes
import { PATH_PAGE } from "../../routes/paths";
// components
import SocialsButton from "../../components/SocialsButton";
// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: "Web3AfricaGroup",
    children: [
      { name: "About us", href: PATH_PAGE.about },
      { name: "Contact us", href: PATH_PAGE.contact }
      // { name: 'FAQs', href: PATH_PAGE.faqs },
    ]
  },
  {
    headline: "Legal",
    children: [
      { name: "Terms and Condition", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Accessibility", href: "#" },
      { name: "Site Map", href: "#" }
    ]
  },
  {
    headline: "Contact",
    children: [
      { name: "support@w3aafricagroup.com", href: PATH_PAGE.contact },
      { name: "Address Accra, 35 ave", href: PATH_PAGE.contact }
    ]
  }
];

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default
  // backgroundColor: theme.palette.primary.main,
  // color: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <NextLink href="/" passhref="true">
              <Image
                src="/assets/images/brand/w3a-logo.png"
                alt="brand name"
                width={324}
                height={140}
                sx={{ mx: { xs: "auto", md: "inherit" } }}
              />
            </NextLink>
          </Grid>
          <Grid item xs={8} md={4}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              A little description here about the website
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              <SocialsButton sx={{ mx: 0.5 }} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
            >
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" variant="overline">
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <NextLink
                      key={link.name}
                      href={link.href}
                      passhref="true"
                      legacyBehavior
                    >
                      <Link
                        color="color.primary"
                        variant="body2"
                        sx={{ display: "block" }}
                      >
                        {link.name}
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: "center", md: "left" }
          }}
        >
          © 2024. All rights reserved
        </Typography>
      </Container>
    </RootStyle>
  );
}