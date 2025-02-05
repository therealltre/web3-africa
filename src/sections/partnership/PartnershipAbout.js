import { m } from "framer-motion";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import { Grid, Container, Typography, Box, Stack, Card, CardContent } from "@mui/material";
// hooks
import useResponsive from "../../hooks/useResponsive";
// components
import Image from "../../components/Image";
import { MotionViewport, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
    textAlign: "center",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("md")]: {
        textAlign: "left",
    },
}));

const PartnerCard = styled(Card)(({ theme }) => ({
    boxShadow: `0 8px 16px ${alpha(
        theme.palette.mode === "light"
            ? theme.palette.grey[500]
            : theme.palette.common.black,
        0.24
    )}`,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: `0 12px 24px ${alpha(
            theme.palette.mode === "light"
                ? theme.palette.grey[600]
                : theme.palette.common.black,
            0.4
        )}`,
    },
}));

// ----------------------------------------------------------------------


export default function PartnershipAbout() {
    const theme = useTheme();
    const isDesktop = useResponsive("up", "md");

    const partners = [
        {
            name: "Telos Crypto Exchange",
            logo: "/assets/images/partnership/telos-web3ag.png", // Replace with actual path
            description:
                "Telos Crypto Exchange provides secure and scalable cryptocurrency solutions tailored for the African market.",
        },
        {
            name: "Bank Of Ghana",
            logo: "/assets/images/home/bank-of-ghana.png",
            description:
                "Telos Crypto Exchange provides secure and scalable cryptocurrency solutions tailored for the African market.",
        },
        {
            name: "Ghana Stock Exchange",
            logo: "/assets/images/home/gse.png",
            description:
                "Telos Crypto Exchange provides secure and scalable cryptocurrency solutions tailored for the African market.",
        },
        {
            name: "Global Citizen",
            logo: "/assets/images/home/global_citizen.png",
            description:
                "Telos Crypto Exchange provides secure and scalable cryptocurrency solutions tailored for the African market.",
        },

    ];

    return (
        <RootStyle>
            <Container component={MotionViewport}>
                <Grid container spacing={3}>
                    {/* Header Section */}
                    <Grid item xs={12}>
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{ justifyContent: "center", mb: 5 }}
                        >
                            <Typography variant="h2">Our </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    backgroundImage: `linear-gradient(45deg, #FF8C42, #02735E)`,
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontWeight: 600,
                                }}
                            >
                                Partnerships
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* Partnership Details */}
                    <Grid item xs={12}>
                        <Stack spacing={3}>
                            <m.div variants={varFade().inRight}>
                                <Typography variant="body1">
                                    Strategic Partnership Between Web 3 Africa Group and Telos Crypto Exchange for Africa
                                </Typography>
                            </m.div>
                            <m.div variants={varFade().inRight}>
                                <Typography variant="body1">
                                    As part of this partnership, Web 3 Africa Group will own a 50% stake in the new enterprise, leveraging its deep expertise in decentralized infrastructure and blockchain innovation across the continent.
                                </Typography>
                                <Typography variant="body1">
                                    The venture will integrate Telos&apos; powerful blockchain technology to create a seamless and efficient exchange platform that addresses the unique needs of African users, from remittances and payments to investments and decentralized finance opportunities.
                                </Typography>
                                <Typography variant="body1">
                                    This partnership underscores a shared commitment to positioning Africa at the forefront of the global digital economy, empowering communities through blockchain-based solutions that promote financial inclusion, economic growth, and technological sovereignty.
                                </Typography>
                            </m.div>
                        </Stack>
                    </Grid>

                    {/* Partner Logos and Descriptions */}
                    <Grid item xs={12}>
                        <Grid container spacing={4}>
                            {partners.map((partner, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <PartnerCard>
                                        <CardContent>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    mb: 2,
                                                }}
                                            >
                                                <Image
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                    sx={{ width: 120, height: 120 }}
                                                />
                                            </Box>
                                            <Typography variant="h6" sx={{ mb: 1, textAlign: "center" }}>
                                                {partner.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: "text.secondary", textAlign: "center" }}
                                            >
                                                {partner.description}
                                            </Typography>
                                        </CardContent>
                                    </PartnerCard>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </RootStyle>
    );
}
